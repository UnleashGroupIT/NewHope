<?php

namespace App\Policies;

use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class AdminPolicy
{
    use HandlesAuthorization;

    /**
     * Create a new policy instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    public function AdminSubSiteAccess (User $user){

         return $user->user_level <= 3;
      
    }

    public function AdminHiddenSiteAccess (User $user){

        return $user->user_level <= 1;
    }

}
