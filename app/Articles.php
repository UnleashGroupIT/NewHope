<?php

namespace App;

use Moloquent;
use App\Tags;
use App\User;
use App\NewsCategories;
use Laravel\Scout\Searchable;

class Articles extends Moloquent
{

  use Searchable;
  protected $guarded = [];

   public static function doNotEmbedThis(){

        return [
            'tags',
            'author',
            'category',
            'content'

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
