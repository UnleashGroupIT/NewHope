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

Route::get('/speakers', 'SpeakersController@index');

Route::middleware(['auth:api', 'roles'])->post('/speakers', 'SpeakersController@store');

Route::get('/speaker/{id}', 'SpeakersController@show');

Route::get('/speaker/slug/{slug}', 'SpeakersController@find');

Route::middleware(['auth:api', 'roles'])->patch('/speaker/{id}', 'SpeakersController@update');

Route::middleware(['auth:api', 'roles'])->delete('/speaker/{id}', 'SpeakersController@destroy');


/* Sponsor Routes */
Route::get('/sponsors', 'SponsorsController@index');

Route::middleware(['auth:api', 'hidden'])->post('/sponsors', 'SponsorsController@store');

Route::get('/sponsor/{sponsorId}', 'SponsorsController@show');

Route::get('/sponsor/slug/{slug}', 'SponsorsController@find');

Route::middleware(['auth:api', 'hidden'])->patch('/sponsor/{sponsorId}', 'SponsorsController@update');

Route::middleware(['auth:api', 'hidden'])->delete('/sponsor/{sponsorId}', 'SponsorsController@destroy');

/* Agenda Track Routes */
Route::get('/tracks', 'AgendaTracksController@index');

Route::middleware(['auth:api', 'hidden'])->post('/tracks', 'AgendaTracksController@store');

Route::get('/track/{trackId}', 'AgendaTracksController@show');

Route::middleware(['auth:api', 'hidden'])->patch('/track/{trackId}', 'AgendaTracksController@update');

Route::middleware(['auth:api', 'hidden'])->delete('/track/{trackId}', 'AgendaTracksController@destroy');


/* Agenda Session Routes */
Route::get('/sessions', 'AgendaSessionsController@index');

Route::middleware(['auth:api', 'hidden'])->post('/session', 'AgendaSessionsController@store');

Route::middleware(['auth:api', 'hidden'])->get('/session/{sessionId}', 'AgendaSessionsController@show');

Route::middleware(['auth:api', 'hidden'])->patch('/session/{sessionId}', 'AgendaSessionsController@update');

Route::middleware(['auth:api', 'hidden'])->delete('/session/{sessionId}', 'AgendaSessionsController@destroy');

Route::middleware(['auth:api', 'hidden'])->post('/session/speaker', 'AgendaSessionsController@updateSpeaker');

Route::middleware(['auth:api', 'hidden'])->delete('/session/speaker', 'AgendaSessionsController@destroySpeaker');

/* Speaker Grid Routes */
Route::get('/grid/{gridId}/speakers/', 'SpeakerGridController@index');

Route::get('/grids/speakers', 'SpeakerGridController@list');

Route::middleware(['auth:api', 'roles'])->post('/grid/{gridId}/speaker/', 'SpeakerGridController@store');

Route::get('/grid/{gridId}/speaker/{speakerId}', 'SpeakerGridController@show');

Route::middleware(['auth:api', 'roles'])->patch('/grid/{gridId}/speaker/{speakerId}', 'SpeakerGridController@update');

Route::middleware(['auth:api', 'roles'])->delete('/grid/{gridId}/speaker/{speakerId}', 'SpeakerGridController@detach');

/* Sponsor Routes */
Route::get('/grid/{gridId}/sponsors/', 'SponsorGridController@index');

Route::get('/grids/sponsors', 'SponsorGridController@list');

Route::middleware(['auth:api', 'roles'])->post('/grid/{gridId}/sponsor/', 'SponsorGridController@store');

Route::get('/grid/{gridId}/sponsor/{sponsorId}', 'SponsorGridController@show');

Route::middleware(['auth:api', 'roles'])->patch('/grid/{gridId}/sponsor/{sponsorId}', 'SponsorGridController@update');

Route::middleware(['auth:api', 'roles'])->delete('/grid/{gridId}/sponsor/{sponsorId}', 'SponsorGridController@detach');


/* Event Routes */
Route::middleware(['auth:api', 'roles'])->get('/events', 'UnleashEventsController@index');

Route::middleware(['auth:api', 'roles'])->post('/events', 'UnleashEventsController@store');

Route::middleware(['auth:api', 'roles'])->get('/event/{eventId}', 'UnleashEventsController@show');

Route::middleware(['auth:api', 'roles'])->patch('/event/{eventId}', 'UnleashEventsController@update');

Route::middleware(['auth:api', 'roles'])->delete('/event/{eventId}', 'UnleashEventsController@destroy');


/* Articles */

Route::get('/articles', 'ArticlesController@index');

Route::middleware(['auth:api', 'roles'])->post('/articles', 'ArticlesController@store');

Route::get('/article/{id}', 'ArticlesController@show');

Route::get('/article/slug/{slug}', 'ArticlesController@find');

Route::middleware(['auth:api', 'roles'])->patch('/article/{id}', 'ArticlesController@update');

Route::middleware(['auth:api', 'roles'])->delete('/article/{id}', 'ArticlesController@destroy');

/* Talks */

Route::get('/talks', 'TalksController@index');

Route::middleware(['auth:api', 'roles'])->post('/talks', 'TalksController@store');

Route::get('/talk/{id}', 'TalksController@show');

Route::get('/talk/slug/{slug}', 'TalksController@find');

Route::middleware(['auth:api', 'roles'])->patch('/talk/{id}', 'TalksController@update');

Route::middleware(['auth:api', 'roles'])->delete('/talk/{id}', 'TalksController@destroy');

Route::apiResource('bookmarks', 'BookmarksController');