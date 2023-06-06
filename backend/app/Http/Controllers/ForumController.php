<?php

namespace App\Http\Controllers;

use App\Models\Forum;
use App\Models\Topic;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ForumController extends Controller
{
    public function index()
    {
        return response()->json([
            "forums" => Forum::all()
        ]);
    }

    public function getTopics(Forum $forum)
    {
        return response()->json([
            "topics" => $forum->with(['topics' => function($query) use ($forum) {
                return $query->where('forum_id', $forum->id)->with('user');
            }])->get()
        ]);
    }

    public function getTopic(Forum $forum, Topic $topic)
    {
        return response()->json([
            "topic" => $topic->with(['comments' => function($query) use ($topic) {
                return $query->where('topic_id', $topic->id)->with('user');
            }])->first()
        ]);
    }

    public function createForum(Request $request)
    {
        $fields = $request->validate([
            'title' => 'required|string',
            'description' => 'required',
        ],
        [
            'title.required' => 'عنوان الزامی است',
            'description.required' => 'توضیحات الزامی است',
        ]);

        $forum = Forum::create([
            'user_id' => auth()->id(),
            'title' => $fields['title'],
            'slug' => str_replace(' ', '_', $fields['title']),
            'description' => $fields['description']
        ]);

        return response()->json([
            "forum" => $forum,
        ], 201);

    }
}

