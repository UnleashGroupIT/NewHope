<?php

namespace App;

use Moloquent;
use Tags;

class Sponsors extends Moloquent
{

   public static function doNotEmbedThis(){

        return [];

    }
    	
    public function tags()
    {
        return $this->embedsMany('App\Tags');
    }
}
