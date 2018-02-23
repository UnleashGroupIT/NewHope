<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Articles;

class ArticlesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {

        $validatedData = $request->validate([
        'limit' => 'numeric'
        ]);

        $articles = (new Articles)->newQuery();

        if ($request->has('category')){
            
        }


         if ($request->has('order')){
            switch ($request->order) {
                case 'latest':
                    $articles->orderBy('created_at', 'desc');
                    break;
                 case 'popular':
                   //NYI
                    break;  
                 case 'title':
                    $articles->orderBy('title', 'desc');
                    break;                                 
                default:
                   $articles->orderBy('created_at', 'desc');
                    break;
            }
            
         }

         if ($request->has('limit')){
            $articles->take((int)$request->limit);
         }

        return $articles->get();

        /*$speakerIds = [];

         $speakers = (new Speakers)->newQuery();

        if ($request->has('exlude')){

            $grid = SpeakerGrid::where('grid_id',$request->exlude)->get();
            foreach ($grid as $key => $value) {
               array_push($speakerIds, $value->speaker_id);
            }
            $speakers->whereNotIn('id', $speakerIds);

        }

         if ($request->has('search')){
            $speakers->where('full_name','like', '%'.$request->search.'%');
        }      

         if ($request->has('limit')){
            $limit = $request->limit;
        }else {
            $limit = 30;
        }             
       
       // return $speakers->get();
        return $speakers->paginate($limit);*/





        /* if ($request->filled('filter')){
            switch ('filter') {
                case 'latest':
                    return Articles::orderBy('created_at', 'desc')->take(4)->get();
                    break;
                
                default:
                    # code...
                    break;
            }

            
         } else {
            return Articles::all();

         }*/

        
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
         return Articles::find($id);
    }

    public function find($slug)
    {
         return Articles::where('slug', $slug)->get();
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

     $result = Articles::search($keyword)->with($params)->get();
     return $result;
    
    
  }  
}
