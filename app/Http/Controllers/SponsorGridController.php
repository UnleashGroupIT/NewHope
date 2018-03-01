<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Grids;

class SponsorGridController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($gridId)
    {
        $grid = Grids::find($gridId);

        return $sponsors = $grid->sponsors()->get();
    }


    public function list(){
        return Grids::where('sponsors_ids', 'exists', true)->with('unleashevents')->get();
    }
}
