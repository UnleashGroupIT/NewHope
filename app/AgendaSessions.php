<?php

namespace App;

use Moloquent;
use Speakers;
use AgendaTracks;

class AgendaSessions extends Moloquent
{

	 public static function doNotEmbedThis(){

        return [];

    }

    public function tracks()
    {
        return $this->embedsMany('App\AgendaTracks');
    }

    public function speakers()
    {
        return $this->embedsMany('App\Speakers');
    }

}
