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
Route::get('displayartifact','DisplayController@displayartifact');
Route::get('displaybusiness','DisplayController@displaybusiness');
Route::get('displaypeople','DisplayController@displaypeople');
Route::get('displaynews','DisplayController@displaynews');



Route::post('addDept', 'AddController@addDept');
Route::post('updateDept', 'AddController@updateDept');
Route::post('deleteDept', 'AddController@deleteDept');
Route::get('displayDepartments','DisplayController@displayDepartments');
Route::get('displayAllstaff','DisplayController@displayAllstaff');
Route::post('uStatus','DisplayController@uStatus');
Route::post('deleteUser','DisplayController@deleteUser');
Route::get('displayAllposition','DisplayController@displayAllposition');
Route::get('edtDept/{id}','DisplayController@edtDept');
Route::get('getalltitle','DisplayController@getalltitle');

//Branch
Route::get('edtBranch/{id}','DisplayController@edtBranch');
Route::get('displayBranch','DisplayController@displayBranch');
Route::post('addBranch', 'AddController@addBranch');
Route::post('updateBranch', 'AddController@updateBranch');
Route::post('deleteBranch', 'AddController@deleteBranch');

//Unit
Route::get('edtUnit/{id}','DisplayController@edtUnit');
Route::get('displayUnit','DisplayController@displayUnit');
Route::post('addUnit', 'AddController@addUnit');
Route::post('updateUnit', 'AddController@updateUnit');
Route::post('deleteUnit', 'AddController@deleteUnit');

//Type
Route::get('edtType/{id}','DisplayController@edtType');
Route::get('displayType','DisplayController@displayType');
Route::post('addType', 'AddController@addType');
Route::post('updateType', 'AddController@updateType');
Route::post('deleteType', 'AddController@deleteType');

//Manufacturer
Route::get('edtManufacturer/{id}','DisplayController@edtManufacturer');
Route::get('displayManufacturer','DisplayController@displayManufacturer');
Route::post('addManufacturer', 'AddController@addManufacturer');
Route::post('updateManufacturer', 'AddController@updateManufacturer');
Route::post('deleteManufacturer', 'AddController@deleteManufacturer');

//Categories
Route::get('edtCategories/{id}','DisplayController@edtCategories');
Route::get('displayCategories','DisplayController@displayCategories');
Route::post('addCategories', 'AddController@addCategories');
Route::post('updateCategories', 'AddController@updateCategories');
Route::post('deleteCategories', 'AddController@deleteCategories');

//Shelve
Route::get('edtShelve/{id}','DisplayController@edtShelve');
Route::get('displayShelve','DisplayController@displayShelve');
Route::post('addShelve', 'AddController@addShelve');
Route::post('updateShelve', 'AddController@updateShelve');
Route::post('deleteShelve', 'AddController@deleteShelve');

//Item
Route::get('edtItem/{id}','DisplayController@edtItem');
Route::get('displayItem','DisplayController@displayItem');
Route::post('addItem', 'AddController@addItem');
Route::post('updateItem', 'AddController@updateItem');
Route::post('deleteItem', 'AddController@deleteItem');

//Customers / Patients
Route::get('edtCustomer/{id}','DisplayController@edtCustomer');
Route::get('displayCustomer','DisplayController@displayCustomer');
Route::post('addCustomer', 'AddController@addCustomer');
Route::post('updateCustomer', 'AddController@updateCustomer');
Route::post('deleteCustomer', 'AddController@deleteCustomer');

//Doctor Prescriptions
Route::get('edtPrescription/{id}','DisplayController@edtPrescription');
Route::get('displayPrescription','DisplayController@displayPrescription');
Route::post('addPrescription', 'AddController@addPrescription');
Route::post('updatePrescription', 'AddController@updatePrescription');
Route::post('deletePrescription', 'AddController@deletePrescription');

//Invoices
Route::get('edtInvoice/{id}','DisplayController@edtInvoice');
Route::get('displayInvoice','DisplayController@displayInvoice');
Route::post('addInvoice', 'AddController@addInvoice');
Route::post('updateInvoice', 'AddController@updateInvoice');
Route::post('deleteInvoice', 'AddController@deleteInvoice');





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
