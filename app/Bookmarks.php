<?php

namespace App;

use Moloquent;
use App\Articles;
use App\Talks;
use App\User;

class Bookmarks extends Moloquent
{
    protected $guarded = [];
    
   public static function doNotEmbedThis(){

        return [];

    }
        
    public function articles()
    {
        return $this->belongsToMany(Articles::class);
    }

    public function user()
    {
        return $this->hasOne(User::class, '_id', 'user_id');
    }

    public function talks()
    {
        return $this->embedsMany(Talks::class);
    }

}
