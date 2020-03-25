<?php

use Illuminate\Support\Facades\Route;



Route::get('{any}', 'AppController@index')->where('any','.*')->middleware('auth')->name('home');

// Auth::routes();

