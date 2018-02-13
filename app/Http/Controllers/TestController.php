<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Articles;
use App\Tags;

class TestController extends Controller
{
 
 public function index(){

      $flight = Articles::where('tags', 'exists', true)->get();
      foreach ($flight as $key => $value) {
	 	  $tag = $value->tags()->where('_id','=','5a81cfc3ca6c3d1d20003914')->first();
	 	  if($tag){
	 	  	$tag->name = 'Moooo';
	 	  	$tag->save();	
	 	  }

      }


 	  return $flight;
 }

}

