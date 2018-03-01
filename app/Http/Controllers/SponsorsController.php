<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Sponsors;

class SponsorsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {

        $sponsorIds = [];

         $sponsors = (new Sponsors)->newQuery();

        if ($request->has('exlude')){

         /*   $grid = SponsorGrid::where('grid_id',$request->exlude)->get();
            foreach ($grid as $key => $value) {
               array_push($sponsorIds, $value->sponsor_id);
            }
            $sponsors->whereNotIn('id', $sponsorIds);*/

        }

         if ($request->has('search')){
            $sponsors->where('company_name','like', '%'.$request->search.'%');
        }     

         if ($request->has('limit')){
            $limit = $request->limit;
        }else {
            $limit = 30;
        }              
       
       // return $sponsors->get();
        return $sponsors->paginate($limit);  
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
    public function show($sponsorId)
    {
        return Sponsors::find($sponsorId);
    }

    public function find($slug)
    {
       return Sponsors::where('slug',$slug)->get();
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

     $result = Sponsors::search($keyword)->with($params)->get();
     return $result;
    
    
  }      
}
