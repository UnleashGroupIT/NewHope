<?php

namespace App;

use Moloquent;
use Speakers;
use Sponsors;
use Unleashevents;

class Grids extends Moloquent
{

   public static function doNotEmbedThis(){

        return [];

    }
        

    public function speakers()
    {
        return $this->embedsMany('App\Speakers');
    }

    public function sponsors()
    {
        return $this->embedsMany('App\Sponsors');
    } 

    public function event()
    {
        return $this->hasOne('App\Unleashevents');
    }
       
}
