<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Socialite;



class SocialMediaAuthController extends Controller
{
    /**
     * Redirect the user to the GitHub authentication page.
     *
     * @return \Illuminate\Http\Response
     */
    public function facebookRedirect()
    {
        return Socialite::driver('facebook')->redirect();
    }

    /**
     * Obtain the user information from GitHub.
     *
     * @return \Illuminate\Http\Response
     */
    public function facebookCallback()
    {
       // $user = Socialite::driver('facebook')->stateless()->user();

        // $user->token;
		
		 dd(Socialite::driver('facebook')->stateless()->user());
    }
}
