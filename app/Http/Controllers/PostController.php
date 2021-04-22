<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use App\Http\Resources\Post as PostResource;
use App\Models\Post;


class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return PostResource::collection(Post::all());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'location' => 'required',
            'review' => 'required',
        ]);
        $post = new Post([
            'name' => $request->name,
            'location' => $request->location,
            'review' => $request->review,
        ]);
        $post->save();
        return response()->json([
            'data' => 'Post created!'
        ]);
    }

    public function edit($id)
    {
        return new PostResource(Post::findOrFail($id));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'required',
            'location' => 'required',
            'review' => 'required',
        ]);
        $post = Post::findOrFail($id);
        $post->name = $request->name;
        $post->location = $request->location;
        $post->review = $request->review;
        $post->save();

        return response()->json([
            'data' => 'Post updated!'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $post = Post::findOrFail($id);
        $post->delete();

        return response()->json([
            'data' => 'Post deleted!'
        ]);

    }
}
