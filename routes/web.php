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

Route::post('/getWelcomeMessage', 'HomeController@getWelcomeMessage');
Route::post('/homepageProducts', 'HomeController@getHomepageProducts');

Route::post('/login', 'UserController@login');
Route::post('/registerUser', 'AuthController@register');

Route::post('/product/{id}', 'ProductController@viewProduct');
Route::get('/product_list/{category}', 'ProductController@getProductListByCategory');

Route::post('/addToCart', 'ProductController@addToCart');

Route::get('/{any}', 'HomeController@index')->where('any','.*');