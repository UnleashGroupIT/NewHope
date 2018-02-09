<?php

namespace App;

use Moloquent;
use Tags;
use Unleashevents;

class AgendaTracks extends Moloquent
{

   public static function doNotEmbedThis(){

        return [];

    }
    
    public function tags()
    {
        return $this->embedsMany('Tags');
    }

    public function event()
    {
        return $this->hasOne('Unleashevents');
    }

}
