<?php

namespace App;

use Moloquent;
use Tags;
use Laravel\Scout\Searchable;

class Sponsors extends Moloquent
{
  use Searchable;
  
   public static function doNotEmbedThis(){

        return ['website', 'logo_url', 'description', 'facebook', 'linkedin', 'twitter', 'solutions', 'contacts', 'tags'];

    }
    	
    public function tags()
    {
        return $this->embedsMany('App\Tags');
    }
}
