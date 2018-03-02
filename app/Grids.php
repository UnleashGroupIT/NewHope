<?php

namespace App;

use Moloquent;
use App\Speakers;
use App\Sponsors;
use App\Unleashevents;

class Grids extends Moloquent
{

   public static function doNotEmbedThis(){

        return [];

    }
        

    public function speakers()
    {
        return $this->belongsToMany(Speakers::class);
    }

    public function sponsors()
    {
        return $this->embedsMany(Sponsors::class);
    } 

    public function unleashevents()
    {
        return $this->belongsToMany(Unleashevents::class);
    }
       
}
