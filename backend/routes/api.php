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
Route::post('deleteUser','DisplayController@deleteUser');
Route::get('displayAllposition','DisplayController@displayAllposition');
Route::get('edtDept/{id}','DisplayController@edtDept');
Route::get('getalltitle','DisplayController@getalltitle'); 

// Staff
Route::get('staffdetails/{id}','DisplayController@staffdetails');
Route::post('uStatus','DisplayController@uStatus');
Route::post('c_uStatus','DisplayController@c_uStatus');
Route::post('reStatus','DisplayController@reStatus');
Route::post('assign','AddController@assign');
Route::post('edtAssign','AddController@edtAssign');


//ItemDetails
Route::get('edtItemDetails/{id}','DisplayController@edtItemDetails');
Route::get('displayItemDetails','DisplayController@displayItemDetails');
Route::post('addItemDetails', 'AddController@addItemDetails');
Route::post('updateItemDetails', 'AddController@updateItemDetails');
Route::post('deleteItemDetails', 'AddController@deleteItemDetails');
Route::get('disItemDet','DisplayController@disItemDet');

//Branch
Route::get('edtBranch/{id}','DisplayController@edtBranch');
Route::get('displayBranch','DisplayController@displayBranch');
Route::get('displaysetBranch','DisplayController@displaysetBranch');
Route::post('addBranch', 'AddController@createBranch');
Route::post('updateBranch', 'AddController@updateBranch');
Route::post('deleteBranch', 'AddController@deleteBranch');

Route::post('suspendBranch', 'AddController@suspendBranch');
Route::post('activateBranch', 'AddController@activateBranch');

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
Route::get('displayItem/{id}','DisplayController@displayItem');
Route::post('addItem', 'AddController@addItem');
Route::post('updateItem', 'AddController@updateItem');
Route::post('deleteItem', 'AddController@deleteItem');

//Customers / Patients
Route::get('edtCustomer/{id}','DisplayController@edtCustomer');
Route::get('displayCustomer','DisplayController@displayCustomer');
Route::post('addCustomer', 'AddController@addCustomer');
Route::post('updateCustomer', 'AddController@updateCustomer');
Route::post('deleteCustomer', 'AddController@deleteCustomer');
Route::post('makeAppointment','AddController@makeAppointment');
Route::get('patientdetails/{id}','DisplayController@patientdetails');

// Appointments 
Route::get('displayAllappointment','DisplayController@displayAllappointment');
Route::post('makeAppointment','AddController@makeAppointment');
Route::get('displayDeptAppointment','DisplayController@displayDeptAppointment');
Route::get('countAppointment','DisplayController@countAppointment');
Route::post('deleteAppointment', 'AddController@deleteAppointment');

//Doctor Prescriptions
Route::get('edtPrescription/{id}','DisplayController@edtPrescription');
Route::get('displayPrescription','DisplayController@displayPrescription');
Route::post('addPrescription', 'AddController@addPrescription');
Route::post('updatePrescription', 'AddController@updatePrescription');
Route::post('deletePrescription', 'AddController@deletePrescription');
Route::get('displayPharmPrescription/{id}','DisplayController@displayPharmPrescription');
Route::post('pharmPriscription', 'AddController@pharmPriscription');


//Invoices
Route::get('edtInvoice/{id}','DisplayController@edtInvoice');
Route::get('displayInvoice','DisplayController@displayInvoice');
Route::post('addInvoice', 'AddController@addInvoice');
Route::post('updateInvoice', 'AddController@updateInvoice');
Route::post('deleteInvoice', 'AddController@deleteInvoice');

//Vouchers
Route::get('edtVoucher/{id}','DisplayController@edtVoucher');
Route::get('displayVoucher','DisplayController@displayVoucher');
Route::post('addVoucher', 'AddController@addVoucher');
Route::post('updateVoucher', 'AddController@updateInvoice');
Route::post('deleteVoucher', 'AddController@deleteVoucher');

//Laboratory Department
Route::post('addLab', 'AddController@createLabDept');
Route::get('displayLabDepartments','DisplayController@displayLabDepartments');
Route::post('deleteLabDepartments', 'AddController@deleteLabDept');
Route::post('updateLabDept', 'AddController@updateLabDept');
Route::get('edtLabDept/{id}','DisplayController@edtLabDept');
//Laboratory Test Type
Route::post('addLabTestType', 'AddController@createLabTestType');
Route::get('displayLabTestType','DisplayController@displayLabTestType');
Route::post('deleteLabTestType', 'AddController@deleteLabTestType');
Route::post('updateLabTestType', 'AddController@updateLabTestType');
Route::get('edtLabTestType/{id}','DisplayController@edtLabTestType');

//Updating Stock
Route::get('stockBranches','DisplayController@stockBranches');
Route::post('addToStock', 'AddController@addToStock');
Route::post('transferToStock', 'AddController@transferToStock');
Route::get('saveAdd', 'AddController@saveAdd');
Route::get('saveTransfer', 'AddController@saveTransfer');
Route::get('saveVariance', 'AddController@saveVariance');
Route::post('varianceStock', 'AddController@varianceStock');

Route::get('varianceItems','DisplayController@varianceItems');
Route::get('addedItems','DisplayController@addedItems');
Route::get('transItems','DisplayController@transItems');
Route::get('inStock/{id}','DisplayController@inStock');
Route::post('inStockT','DisplayController@inStockT');
Route::get('editAdd/{id}', 'AddController@editAdd');
Route::post('deleteAdd', 'AddController@deleteAdd');
Route::post('updateAddItem', 'AddController@updateAddItem');
Route::post('updatetransferItem', 'AddController@updatetransferItem');

Route::get('editTrans/{id}', 'AddController@editTrans');
Route::post('deleteTrans', 'AddController@deleteTrans');

//Stock Report
Route::post('stockReport','DisplayController@stockReport');
Route::post('searchReport','DisplayController@searchReport');
Route::post('stockHistory','DisplayController@stockHistory');

});


//  Route::get('test',function(){rolecate
//      return response()->json([
//          'user'=>['fname'=>'tawa',
//          'lname'=>'adio']
//      ]); 
//  });
// spiral
// waterfall model
// SDLC SCRUM
