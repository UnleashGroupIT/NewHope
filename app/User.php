<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use DesignMyNight\Mongodb\Auth\User as Authenticatable;
use Moloquent;
use Articles;
use Talks;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $guarded = [
        'remember_token'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token', 'user_level'
    ];

   public static function doNotEmbedThis(){

        return [
            'password',
            'remember_token',
            'email',
            'user_level',
			'facebook_id'
        ];

    }


}
