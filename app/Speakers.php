<?php

namespace App;

use Moloquent;
use Tags;
use Laravel\Scout\Searchable;

class Speakers extends Moloquent
{
   use Searchable;

   public static function doNotEmbedThis(){

        return [];

    }	
	
    public function tags()
    {
        return $this->embedsMany('App\Tags');
    }
}
