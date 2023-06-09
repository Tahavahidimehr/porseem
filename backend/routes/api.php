<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ForumController;
use App\Models\Forum;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::get('/forums', [ForumController::class, 'index']);
Route::get('/forums/{forum}', [ForumController::class, 'getTopics']);
Route::get('/forums/{forum}/{topic}', [ForumController::class, 'getTopic']);
Route::get('/tags', [ForumController::class, 'getTags']);
Route::get('/tags/{tag}/topics', [ForumController::class, 'getTagTopics']);

Route::middleware('auth:sanctum')->group(function (){
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::post('/forums/new', [ForumController::class, 'createForum']);
    Route::post('/forums/{forum}/new', [ForumController::class, 'createTopic']);
    Route::post('/forums/{forum}/{topic}/comment', [ForumController::class, 'createComment']);
});


