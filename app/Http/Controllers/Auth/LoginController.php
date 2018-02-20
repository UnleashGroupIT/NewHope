<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Socialite;
use Auth;
use Exception;
use App\User;
use Illuminate\Support\Facades\DB;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = '/home';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }
	
	public function urlRedirect(Request $request)
    {
		$uri = $request->path();
		
		switch ($uri) {
			case "login/twitter":
				return Socialite::driver('twitter')->redirect();
				break;
			case "login/facebook":
				return Socialite::driver('facebook')->redirect();
				break;
			case "login/linkedin":
				return Socialite::driver('linkedin')->redirect();
				break;			
			default:
			 return redirect('login');
				break;
		}
		
		
		
        
    }

    public function urlCallback(Request $request)
    {
		$uri = $request->path();
		
		switch ($uri) {
			case "login/twitter/callback":
			
				$social_name = "twitter";
				$social_id = 'twitter_id';
				
				break;
			case "login/facebook/callback":
			
				$social_name = "facebook";
				$social_id = 'facebook_id';		
				
				
				break;
			case "login/linkedin/callback":
				
				$social_name = "linkedin";
				$social_id = 'linkedin_id';					
				
				break;			
			default:
			
			 return redirect('login');
			 
				break;
		}		
		
		
		 try {
			$user = Socialite::driver($social_name)->user();
		} catch (Exception $e) {
			return redirect('login/'.$social_name);
		}

        $authUser = $this->findOrCreateUser($user, $social_id);

        Auth::login($authUser, true);

        return redirect()->route('home');
    }

    private function findOrCreateUser($User, $social_id)
    {
        $authUser = User::where($social_id, $User->id)->first();

        if ($authUser){
            return $authUser;
        }
		
		//First check if the user exists at all
		$usr = User::where('email', $User->email)->first();
		
		//If exists just add that social media login to their account
		if($usr){
			 DB::collection('users')->where('email', $User->email)->update([$social_id => $User->id], ['upsert' => true]);
		    $authUser = User::where($social_id, $User->id)->first();
		    return $authUser;
		} 	
		
		

			
		 return User::create([
				'name' => $User->name,
				'email' => $User->email ?: $this->clrSTR($User->name).'@socialLogin.fake',
				$social_id => $User->id,
				'avatar' => $User->avatar
			]);				
		


		

    }
	
    
		
	
}
