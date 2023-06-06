<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use App\Models\Forum;
use App\Models\Topic;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ForumController extends Controller
{
    public function index(Request $request)
    {
        if ($request->search) {
            $forums = Forum::query()->when('search', function ($query) use ($request) {
                $query->where('slug', 'like', '%'.$request->search.'%');
            })->get();
        }

        else{
            $forums = Forum::all();
        }

        return response()->json([
            "forums" => $forums
        ]);
    }

    public function getTopics(Forum $forum)
    {
        $topics = $forum->with(['topics' => function($query) use ($forum) {
            return $query->where('forum_id', $forum->id)->with('user');
        }])->get();

        return response()->json([
            "topics" => $topics
        ]);
    }

    public function getTopic(Forum $forum, Topic $topic)
    {
        return response()->json([
            "topic" => $topic->with(['comments' => function($query) use ($topic) {
                return $query->where('topic_id', $topic->id)->with('user');
            }])->with('user')->get()
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

    public function createTopic(Request $request)
    {
        $fields = $request->validate([
            'title' => 'required|string',
            'description' => 'required',
        ],
        [
            'title.required' => 'عنوان الزامی است',
            'description.required' => 'توضیحات الزامی است',
        ]);

        $forum = Forum::whereSlug($request['forumSlug'])->first();

        $topic = Topic::create([
            'user_id' => auth()->id(),
            'forum_id' => $forum->id,
            'title' => $fields['title'],
            'slug' => str_replace(' ', '_', $fields['title']),
            'description' => $fields['description']
        ]);

        $forum->topics_count = $forum->topics_count + 1;
        $forum->save();

        return response()->json([
            "topic" => $topic,
        ], 201);

    }

    public function createComment(Forum $forum, Topic $topic, Request $request)
    {
        $fields = $request->validate([
            'comment' => 'required',
        ],
        [
            'comment.required' => 'پاسخ نمی تواند خالی باشد',
        ]);

        $comment = Comment::create([
            'user_id' => auth()->id(),
            'topic_id' => $topic->id,
            'comment' => $fields['comment']
        ]);

        return response()->json([
            "comment" => $comment,
        ], 201);
    }
}

