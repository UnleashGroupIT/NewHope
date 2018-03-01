<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Grids;

class SpeakerGridController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($gridId)
    {
        $grid = Grids::find($gridId);

        return $speaker = $grid->speakers()
                     ->orderBy('speaker_grids.order_number','ASC')
                     ->get();
    }

    public function list(){
        return Grids::where('speakers_ids', 'exists', true)->with('unleashevents')->get();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, $gridId)
    {
        $grid = Grids::find($gridId);
        $speaker = $grid->speakers()
                     ->orderBy('speaker_grids.order_number','desc')
                     ->get();
        if (!empty($speaker[0]->pivot->order_number)){
            $order = $speaker[0]->pivot->order_number +1;
        } else {
            $order = 1;
        }   

    return $grid->speakers()->attach($request->speaker_id,['order_number' => $order]);         

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($gridId, $speakerId)
    {
        $grid = Grids::find($gridId);
    
        return $grid->speakers()->find($speakerId);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $gridId, $speakerId)
    {
        $grid = Grids::find($gridId);

        $speaker = $grid->speakers()->find($speakerId);

        
         foreach ($request->all() as $field => $value) {
            if(isset($speaker->pivot->$field) || is_null($speaker->pivot->$field)){
            
                $speaker->pivot->$field = $value;

            }
            
        }

        $speaker->pivot->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function detach($gridId, $speakerId)
    {
        $grid = Grids::find($gridId);
        return $grid->speakers()->detach($speakerId);
    }
}
