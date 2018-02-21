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

/* Search Routes */

Route::get('/articles/search', 'ArticlesController@search');

Route::get('/speakers/search', 'SpeakersController@search');

Route::get('/talks/search', 'TalksController@search');

Route::get('/sponsors/search', 'SponsorsController@search');

Route::get('/agenda/search', 'AgendaSessionsController@search');

/* Speaker Routes */

Route::middleware(['auth:api', 'roles'])->get('/speakers', 'SpeakersController@index');

Route::middleware(['auth:api', 'roles'])->post('/speakers', 'SpeakersController@store');

Route::middleware(['auth:api', 'roles'])->get('/speaker/{id}', 'SpeakersController@show');

Route::middleware(['auth:api', 'roles'])->get('/speaker/slug/{slug}', 'SpeakersController@find');

Route::middleware(['auth:api', 'roles'])->patch('/speaker/{id}', 'SpeakersController@update');

Route::middleware(['auth:api', 'roles'])->delete('/speaker/{id}', 'SpeakersController@destroy');

/* Sponsor Routes */
Route::middleware(['auth:api', 'hidden'])->get('/sponsors', 'SponsorsController@index');

Route::middleware(['auth:api', 'hidden'])->post('/sponsors', 'SponsorsController@store');

Route::middleware(['auth:api', 'hidden'])->get('/sponsor/{sponsorId}', 'SponsorsController@show');

Route::middleware(['auth:api', 'hidden'])->patch('/sponsor/{sponsorId}', 'SponsorsController@update');

Route::middleware(['auth:api', 'hidden'])->delete('/sponsor/{sponsorId}', 'SponsorsController@destroy');

/* Agenda Track Routes */
Route::middleware(['auth:api', 'hidden'])->get('/tracks', 'AgendaTracksController@index');

Route::middleware(['auth:api', 'hidden'])->post('/tracks', 'AgendaTracksController@store');

Route::middleware(['auth:api', 'hidden'])->get('/track/{trackId}', 'AgendaTracksController@show');

Route::middleware(['auth:api', 'hidden'])->patch('/track/{trackId}', 'AgendaTracksController@update');

Route::middleware(['auth:api', 'hidden'])->delete('/track/{trackId}', 'AgendaTracksController@destroy');


/* Agenda Session Routes */
Route::middleware(['auth:api', 'hidden'])->get('/sessions', 'AgendaSessionsController@index');

Route::middleware(['auth:api', 'hidden'])->post('/session', 'AgendaSessionsController@store');

Route::middleware(['auth:api', 'hidden'])->get('/session/{sessionId}', 'AgendaSessionsController@show');

Route::middleware(['auth:api', 'hidden'])->patch('/session/{sessionId}', 'AgendaSessionsController@update');

Route::middleware(['auth:api', 'hidden'])->delete('/session/{sessionId}', 'AgendaSessionsController@destroy');

Route::middleware(['auth:api', 'hidden'])->post('/session/speaker', 'AgendaSessionsController@updateSpeaker');

Route::middleware(['auth:api', 'hidden'])->delete('/session/speaker', 'AgendaSessionsController@destroySpeaker');

/* Grid Routes */
Route::middleware(['auth:api', 'roles', 'checkevent:0'])->get('/grids', 'GridsController@index');

Route::middleware(['auth:api', 'roles'])->post('/grids', 'GridController@store');

Route::middleware(['auth:api', 'roles'])->get('/grid/{gridId}', 'GridController@show');

Route::middleware(['auth:api', 'roles'])->patch('/grid/{gridId}', 'GridController@update');

Route::middleware(['auth:api', 'roles'])->delete('/grid/{gridId}', 'GridController@destroy');


/* Event Routes */
Route::middleware(['auth:api', 'roles'])->get('/events', 'UnleashEventsController@index');

Route::middleware(['auth:api', 'roles'])->post('/events', 'UnleashEventsController@store');

Route::middleware(['auth:api', 'roles'])->get('/event/{eventId}', 'UnleashEventsController@show');

Route::middleware(['auth:api', 'roles'])->patch('/event/{eventId}', 'UnleashEventsController@update');

Route::middleware(['auth:api', 'roles'])->delete('/event/{eventId}', 'UnleashEventsController@destroy');


/* Articles */

Route::middleware(['auth:api', 'roles'])->get('/articles', 'ArticlesController@index');

Route::middleware(['auth:api', 'roles'])->post('/articles', 'ArticlesController@store');

Route::middleware(['auth:api', 'roles'])->get('/article/{id}', 'ArticlesController@show');

Route::middleware(['auth:api', 'roles'])->get('/article/slug/{slug}', 'ArticlesController@find');

Route::middleware(['auth:api', 'roles'])->patch('/article/{id}', 'ArticlesController@update');

Route::middleware(['auth:api', 'roles'])->delete('/article/{id}', 'ArticlesController@destroy');

/* Talks */

Route::middleware(['auth:api', 'roles'])->get('/talks', 'TalksController@index');

Route::middleware(['auth:api', 'roles'])->post('/talks', 'TalksController@store');

Route::middleware(['auth:api', 'roles'])->get('/talk/{id}', 'TalksController@show');

Route::middleware(['auth:api', 'roles'])->get('/talk/slug/{slug}', 'TalksController@find');

Route::middleware(['auth:api', 'roles'])->patch('/talk/{id}', 'TalksController@update');

Route::middleware(['auth:api', 'roles'])->delete('/talk/{id}', 'TalksController@destroy');

Route::apiResource('bookmarks', 'BookmarksController');