<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Speakers;

class SpeakersController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $speakerIds = [];

         $speakers = (new Speakers)->newQuery();

        if ($request->has('exlude')){

            /*$grid = SpeakerGrid::where('grid_id',$request->exlude)->get();
            foreach ($grid as $key => $value) {
               array_push($speakerIds, $value->speaker_id);
            }
            $speakers->whereNotIn('id', $speakerIds);*/

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
        return $speakers->paginate($limit);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
       $fullName = $request->first_name.' '.$request->last_name;

           if(isset($fullName)){

                $slug = htmlspecialchars(Controller::clrSTR($fullName));

            }       

        
        if ($request->hasFile('speaker_img') && $request->file('speaker_img')->isValid()) {

            switch ($request->file('speaker_img')->getMimeType()) {
                case 'image/jpeg':
                   $extension = '.jpg';
                    break;
                case 'image/png':
                    $extension = '.png';
                    break;                
                default:
                     $extension = '.jpg';
                    break;
            }


               $img_url = 'storage/public/'.$request->file('speaker_img')->storeAs(
                'public/speakers', $slug.$extension
                );

             $img_url = $slug.$extension;
        } else {
            $img_url = '';
        }       
    
           
        $created =  Speakers::create([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name, 
            'full_name' => $fullName, 
            'slug' => $slug,
            'job_title' => $request->job_title ?? null, 
            'bio' => $request->bio ?? null, 
            'company' => $request->company ?? null, 
            'img_url' => $img_url, 
            'facebook' => $request->facebook ?? null, 
            'twitter' => $request->twitter ?? null, 
            'linkedin' => $request->linkedin ?? null, 
            'website' => $request->website ?? null, 
            'blog_url' => $request->blog ?? null

                ]);

        return $created;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
       return Speakers::find($id);
    }

    public function find($slug)
    {
       return Speakers::where('slug',$slug)->get();
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

        $speaker = Speakers::find($id);

        if ($request->hasFile('speaker_img') && $request->file('speaker_img')->isValid()) {

            switch ($request->file('speaker_img')->getMimeType()) {
                case 'image/jpeg':
                   $extension = '.jpg';
                    break;
                case 'image/png':
                    $extension = '.png';
                    break;                
                default:
                     $extension = '.jpg';
                    break;
            }


               $img_url = 'storage/public/'.$request->file('speaker_img')->storeAs(
                'public/speakers', $speaker->slug.$extension
                );

             $speaker->img_url = $speaker->slug.$extension;
        }       
    

         $changable = [
                'prefix', 
                'first_name', 
                'last_name',
                'full_name',
                'slug',
                'job_title',
                'bio',
                'company',
                'img_url',
                'facebook',
                'twitter',
                'linkedin',
                'website',
                'blog_url'
        ];
        foreach ($request->all() as $field => $value) {
          
            if(in_array($field, $changable) && $speaker->$field != $value){
                
                $speaker->$field = $value;

                if(($field == "first_name") || ($field == "last_name")){
                   $speaker->full_name = $request->first_name.' '.$request->last_name;
                }

            }


            
        }



        $speaker->save();

        return $speaker;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
      return Speakers::destroy($id);
    }

  public function search(Request $request){

     $facets = '';


    if($request->filled('tags')){

        $facets .= ' (';

      try{
        $tags = json_decode($request->tags);

        $firstInLine = 0;
        foreach ($tags as $key => $tag) {

          if($firstInLine == 0){
             $facets .= 'tags:'.$tag;
             $firstInLine++;
           }else {
            $facets .= ' OR tags:'.$tag;
           }
         
        } //end foreach
         $facets .=')';

      } catch (Exception $e) {
         echo 'Caught exception: ',  $e->getMessage(), "\n";
    }


    }//if tags


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

     $result = Speakers::search($keyword)->with($params)->get();
     return $result;
    
    
  }     
}
