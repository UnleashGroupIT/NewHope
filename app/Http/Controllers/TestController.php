<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Articles;
use App\Tags;

class TestController extends Controller
{
 
 public function index(){

	$article = Articles::first();


 	$Tag = Tags::take(1)->skip(mt_rand(0,Tags::count()-1))->first();

 	dd($Tag['_id']);
 	$save = [
 		'name' => $Tag->name,
 		'description' => $Tag->description
 	];
 	
 	$article->tags()->create($save);

 	return $article;
 }

}

