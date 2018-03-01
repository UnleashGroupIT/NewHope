<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Unleashevents;

class UnleashEventsController extends Controller
{
	public function index(){
		return Unleashevents::all();

	}
 
}
