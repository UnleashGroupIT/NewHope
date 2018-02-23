<?php

namespace App;

use Moloquent;

class NewsCategories extends Moloquent
{
   protected $guarded = [];
   public static function doNotEmbedThis(){

        return [];

    }
}
