<?php

namespace App;

use Moloquent;
use App\Tags;
use App\User;
use App\NewsCategories;

class Articles extends Moloquent
{

   public static function doNotEmbedThis(){

        return [];

    }
        
    public function tags()
    {
        return $this->embedsMany(Tags::class);
    }

    public function author()
    {
        return $this->embedsOne(User::class);
    }

    public function category()
    {
        return $this->embedsOne(NewsCategories::class);
    }

}
