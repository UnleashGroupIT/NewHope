<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Grids;
use App\Sponsors;

class SponsorGridController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request, $gridId)
    {


    $validatedData = $request->validate([
        'category' => 'numeric'
        ]);

        $grid = Grids::where('_id',$gridId)->first();
        $result = [];

        $var = 0;
        foreach ($grid->sponsors as $key => $value) {
        	  if (($request->has('category') && $request->category == $value->category) || !$request->has('category')){
        	  
        	  		     array_push($result, $value);
        	
			        	$SponsorData = Sponsors::find($result[$var]->_id);
			        	$result[$var]->data = $SponsorData;
			        	$var++;


            }
		}
        return $result;

    }


    public function list(){
        return Grids::where('sponsors', 'exists', true)->with('unleashevents')->get();
    }
}
