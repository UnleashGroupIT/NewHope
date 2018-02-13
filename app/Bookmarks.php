<?php

namespace App;

use Moloquent;
use App\Articles;
use App\Talks;
use App\User;

class Bookmarks extends Moloquent
{
   public static function doNotEmbedThis(){

        return [];

    }
        
    public function articles()
    {
        return $this->embedsMany(Articles::class);
    }

    public function user()
    {
        return $this->embedsOne(User::class);
    }

    public function talks()
    {
        return $this->embedsOne(Talks::class);
    }

}
