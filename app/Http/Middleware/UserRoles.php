<?php

namespace App\Http\Middleware;

use App\User;
use Closure;

class UserRoles
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if($request->user()->user_level> 3){
             return response('Unauthorized Request', 403);

        }
        return $next($request);
    }
}
