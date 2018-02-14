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

/*Route::get('/', function () {
    return view('welcome');
});*/


Route::get('/moo', 'TestController@index');

Auth::routes();

//Auth::routes();
Route::get('/home', 'HomeController@index')->name('home');


Route::view('/{path?}', 'welcome')
     ->where('path', '.*')
     ->name('react');




  
   
