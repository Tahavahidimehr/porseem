<?php

namespace App\Http\Controllers;

use App\Classes\helpers;
use App\Models\Forum;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class LastForumController extends Controller
{
    const BUSINESS_ROLE_NAME = "business";

    // list of forums
    public function index()
    {
        $user = Auth::user();

        return response()->json([
            "forums" => $user->forums()->get()
        ]);
    }

    // Store forum
    public function store(Request $request)
    {
        $user = Auth::user();
        if ($user->hasRole(self::BUSINESS_ROLE_NAME)){
            $newFilename = "";
            if ($request->hasFile('background')) {

                $file = $request->file('background');
                if ($file->isValid()) {

                    // Filename is hashed filename + part of timestamp
                    $hashedName = hash_file('md5', $file->path());
                    $timestamp = microtime() * 1000000;

                    $newFilename = $hashedName . $timestamp . '.' . $file->getClientOriginalExtension();

                    Storage::disk('local')->put($newFilename, file_get_contents($file));
                }
            }


            $forum = Forum::create([
                "id" => $request->id ,
                "title" => $request->title ,
                "description" => $request->description ,
                "is_public" => $request->is_public ,
                "background" => $newFilename
            ]);
            $user->forums()->attach($forum->id);

            return helpers::preparedJsonResponseWithMessage(true, "فروم ایجاد شد.", ["forum" => $forum]);
        }

        return helpers::preparedJsonResponseWithMessage(false, "شما دسترسی ایجاد فروم را ندارید.");
    }

    // Get whole forum with questions for the Single Forum page
    public function getForum(Request $request)
    {
        $forum_id = $request->id;
        $forum = Forum::where('id', $forum_id)->first();

        return response()->json([
            "users_count" => $forum->users()->count(),
            "questions_count" => $forum->contents()->count(),
            "questions" => $forum->contents()->where('parent_id', 0)->get(),
        ]);
    }
}
