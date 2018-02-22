<?php

namespace App;

use Moloquent;
use Tags;
use User;
use NewsCategories;
use Laravel\Scout\Searchable;

class Talks extends Moloquent
{
  use Searchable;

protected $guarded = [];

   public static function doNotEmbedThis(){

        return [
            'tags',
            'author',
            'category'
        ];

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
