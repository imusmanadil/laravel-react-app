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

Route::middleware('auth:admin')->get('/admin', function (Request $request) {
    return $request->user();
});

Route::middleware('auth:member')->get('/member', function (Request $request) {
    return $request->user();
});







Route::group([
     'prefix' => 'members'
],function(){
    Route::post('register', 'Auth\MembersRegisterController@create');
    Route::post('login','MemberAuthController@login');
    Route::post('me', 'MemberAuthController@me');
    Route::post('logout', 'MemberAuthController@logout');
}
);






Route::group([

    'prefix' => 'admin'

], function () {
    Route::post('login', 'AuthController@login');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');

});



