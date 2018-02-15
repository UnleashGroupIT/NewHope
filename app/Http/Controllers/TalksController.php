<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Talks;

class TalksController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Talks::find($id);
    }

    public function find($slug)
    {
         return Talks::where('slug', $slug)->get();
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
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

  public function search(Request $request){

     $facets = '';



 if ($request->filled('keyword')){
   $keyword = $request->keyword;
 }else {
  $keyword = '';
 }

      $params = [
                  'filters' => $facets,
                  'hitsPerPage' => 10,
                  'page' => 0,

              ];

     $result = Talks::search($keyword)->with($params)->get();
     return $result;
    
    
  }      
}
