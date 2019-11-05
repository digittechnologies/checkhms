<?php
use Illuminate\Http\Request;

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::group([
    'middleware' => 'api',
], function () {

    Route::post('login', 'AuthController@login');
    Route::post('signup', 'AuthController@signup');
    Route::post('adminLogin','AuthController@adminLogin');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::get('me', 'AuthController@me');
    Route::post('sendPasswordResetLink', 'ResetPasswordController@sendEmail');
    Route::post('resetPassword', 'ChangePasswordController@process');
    
});
Route::get('gettitles/{id}','DisplayController@gettitles');
Route::get('getUtitles','DisplayController@getUtitles');
Route::get('getUcontent','DisplayController@getUContent');
Route::post('comment','CommentController@store');
Route::post('me','AuthController@updateprofile');
Route::get('roleuser', 'RoleController@roleuser');
Route::post('role','RoleController@store');
Route::post('cate','CategoryController@store');
Route::post('activity','ActivitiesController@store');
Route::post('content','ContentController@store');
Route::post('name_t','Name_titleController@store');
Route::get('getact', 'ActivitiesController@index');
Route::get('getcat', 'CategoryController@index');
Route::get('post/{id}','ContentController@getactid');
Route::get('displayevent','DisplayController@displayevent');
Route::get('displayartifact','DisplayController@displayartifact');
Route::get('displaybusiness','DisplayController@displaybusiness');
Route::get('displaypeople','DisplayController@displaypeople');
Route::get('displaynews','DisplayController@displaynews');
Route::get('displaylocation','DisplayController@displaylocation');

Route::get('getcontent/{id}','ContentController@getcontent');
Route::post('updatecontent','ContentController@update');
Route::get('getcontentonly/{id}','ContentController@getcontentonly');
Route::get('getalltitle','DisplayController@getalltitle');
Route::get('getfootertitle','DisplayController@getfootertitle');
Route::get('search/{searchTerm}','DisplayController@search');

Route::get('comments','UserController@getComments');
Route::get('rates','UserController@getRates');
Route::get('all','UserController@getAll');
Route::get('articles','UserController@getArticle');
Route::get('titlerates','UserController@getRatesforTitle');
Route::get('titlecomment','UserController@getcommentforTitle');
Route::post('addview','UserController@addview');
Route::post('updatePost','UserController@updatepost');
Route::get('getAllPost','UserController@getAllPost');

//  Route::get('test',function(){rolecate
//      return response()->json([
//          'user'=>['fname'=>'tawa',
//          'lname'=>'adio']
//      ]); 
//  });
// spiral
// waterfall model
// SDLC SCRUM
