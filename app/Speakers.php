<?php

namespace App;

use Moloquent;
use Tags;
use Laravel\Scout\Searchable;

class Speakers extends Moloquent
{
   use Searchable;

      protected $fillable = [
      	'prefix', 
      	'first_name', 
      	'last_name',
      	'full_name',
      	'slug',
      	'job_title',
      	'bio',
      	'company',
      	'img_url',
      	'facebook',
      	'twitter',
      	'linkedin',
      	'website',
      	'blog_url'
  ];    

   public static function doNotEmbedThis(){

        return [];

    }	
	
    public function tags()
    {
        return $this->embedsMany('App\Tags');
    }
}
