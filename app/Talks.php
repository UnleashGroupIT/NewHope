<?php

namespace App;

use Moloquent;
use Tags;
use User;
use NewsCategories;

class Talks extends Moloquent
{

   public static function doNotEmbedThis(){

        return [];

    }
        
    public function tags()
    {
        return $this->embedsMany('App\Tags');
    }

    public function author()
    {
        return $this->embedsOne('App\User');
    }

    public function category()
    {
        return $this->embedsOne('App\NewsCategories');
    }    
        
}
