<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/*Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});*/


Route::get('/articles/search', 'ArticlesController@search');

Route::get('/speakers/search', 'SpeakersController@search');

Route::get('/talks/search', 'TalksController@search');

Route::get('/sponsors/search', 'SponsorsController@search');

Route::get('/agenda/search', 'AgendaSessionsController@search');