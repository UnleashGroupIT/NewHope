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




        $result = $articles->get();

        if ($request->has('category')){
            $category = "hr-tech";
            
            $result = $result->filter(function($value, $key) use ($category){
              
                if($value->category->slug == $category){
                   return true;
                }
               
            });
        }         

         if ($request->has('limit')){
            return $result->take((int)$request->limit);
         } else {
             return $result->all();
         }
        
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
