<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\User;
use App\Bookmarks;
use App\Articles;
use App\Talks;

class BookmarksController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }
    
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
        
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $request->validate([
            'type' => 'bail|required',
            'id' => 'required',
        ]);


        //user's id
        $user = Auth::id();

        $bookmark = Bookmarks::where('user_id',$user)->first();

        if(!$bookmark){

            $bookmark = new Bookmarks;

            $bookmark->user_id = $user;

            $bookmark->save();   

            $bookmark = Bookmarks::find($bookmark->id)->first();         

        }


       switch ($request->type) {
            case 1:
               return $this->AttachDetach($bookmark, 'App\Articles', 'articles', $request->id, 'save');
                
                break;
            case 2:
                return $this->AttachDetach($bookmark, 'App\Talks', 'talks', $request->id, 'save');
                
                break;            
            default:
               return response('Type is incorrect!', 400);
                break;
        }


    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
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
    public function destroy(Request $request, $id)
    {

        $request->validate([
            'type' => 'bail|required',
        ]);

        $user = Auth::id();

        $bookmark = Bookmarks::where('user_id',$user)->first();

        if($bookmark){
           switch ($request->type) {
                case 1:
                     return $this->AttachDetach($bookmark, 'App\Articles', 'articles', $id, 'detach');
                    break;
                case 2:
                    return $this->AttachDetach($bookmark, 'App\Talks', 'talks', $id, 'detach');
                    break;            
                default:
                   return response('Type is incorrect!', 400);
                    break;
            }  

           return $bookmark; 

        } else {
            return response("This user does not have any bookmarks yet!", 400);
        }
      
    }

protected function AttachDetach($instance, $model, $relationship, $id, $method){
        $element = $model::find($id);
        if($element){
            return $instance->$relationship()->$method($element);
        } else {
            return response('Element does not exist!', 400);
        }

}   

}
