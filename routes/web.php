<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//Default Route =============================================================================

/*Route::get('/', function () {
    return view('home');
});*/

//===========================================================================================

Route::get('/moo', 'TestController@index');

Auth::routes();

//Home Route ================================================================================

Route::get('/home', 'HomeController@index')->name('home');

//News Route ================================================================================

Route::get('/news', function () {
 return view('news');
});

//Events routes =============================================================================

Route::get('/london', function () {
 return view('london.london');
});

Route::get('/america', function () {
 return view('america.america');
});

Route::get('/amsterdam', function () {
 return view('amsterdam.amsterdam');
});

//Social Media Login Routes =================================================================

Route::get('login/facebook', 'Auth\LoginController@urlRedirect');
Route::get('login/facebook/callback', 'Auth\LoginController@urlCallback');

Route::get('login/twitter', 'Auth\LoginController@urlRedirect');
Route::get('login/twitter/callback', 'Auth\LoginController@urlCallback');

Route::get('login/linkedin', 'Auth\LoginController@urlRedirect');
Route::get('login/linkedin/callback', 'Auth\LoginController@urlCallback');

//React Route ===============================================================================

Route::view('/{path?}', 'home')
     ->where('path', '.*')
     ->name('react');




  
   
