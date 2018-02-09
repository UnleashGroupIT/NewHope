<?php

namespace App;

use Moloquent;

class Tags extends Moloquent
{

   public static function doNotEmbedThis(){

        return [];

    }
    	
	protected $fillable = [
		'name',
		'description',
	];


}
