<?php

namespace App\Http\Controllers;

use App\Classes\helpers;
use App\Models\Content;
use Illuminate\Http\Request;

class ContentController extends Controller
{
    public function store(Request $request)
    {
        $content = Content::create([
            'user_id' => $request->user_id,
            'forum_id' => $request->forum_id,
            'parent_id' => $request->parent_id,
            'title' => $request->title,
            'content' => $request->content,
            'tags' => $request->tags,
        ]);

        return helpers::preparedJsonResponseWithMessage(true, "مطلب ایجاد شد.", ["content" => $content]);
    }
}
