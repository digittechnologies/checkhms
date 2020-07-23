<?php
use Illuminate\Http\Request;

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('setupStatus', 'SetupController@setupStatus');

Route::group([
    'middleware' => 'api',
], function () {

//Settings
Route::get('setupStatus', 'SetupController@setupStatus');
Route::get('generalSettings', 'SetupController@generalSettings');
Route::get('displayPriceColumn', 'DisplayController@displayPriceColumn');

Route::post('login', 'AuthController@login');
Route::post('signup', 'AuthController@signup');
Route::post('permision', 'AuthController@permision');
Route::post('adminLogin','AuthController@adminLogin');
Route::post('logout', 'AuthController@logout');
Route::post('refresh', 'AuthController@refresh');
Route::get('me', 'AuthController@me');
Route::post('sendPasswordResetLink', 'ResetPasswordController@sendEmail');
Route::post('resetPassword', 'ChangePasswordController@process');
Route::post('changePassword', 'ChangePasswordController@changePassword');

Route::get('displayModule','DisplayController@displayModule');
Route::get('displayRole','DisplayController@displayRole');

Route::get('general_setting','DisplayController@general_setting');
Route::post('updateGeneralset', 'AddController@updateGeneralSet');
Route::post('addGeneralset', 'AddController@GeneralSet');
Route::post('updateprofile','AuthController@updateprofile');
Route::get('editPriviledges/{data}','DisplayController@editPriviledges');

Route::post('editPriviledges', 'AuthController@editPriviledges');

Route::post('addDept', 'AddController@addDept');
Route::post('EditBranch', 'AddController@EditBranch');
Route::post('suspendCenter', 'AddController@suspendCenter');
Route::get('showBranches','DisplayController@showBranches');
Route::get('displayDepartments','DisplayController@displayDepartments');
Route::get('displayAllstaff','DisplayController@displayAllstaff');
Route::post('deleteUser','DisplayController@deleteUser');
Route::get('edtDept/{id}','DisplayController@edtDept');
Route::get('getalltitle','DisplayController@getalltitle'); 
Route::get('getmodules/{id}','DisplayController@getmodules'); 
Route::post('Addposition', 'AddController@Addposition');
Route::post('AddpositionModules', 'AddController@AddpositionModules');
Route::get('displayAllposition','DisplayController@displayAllposition');
Route::get('onEditPos/{id}','DisplayController@onEditPos');
Route::post('updatePos', 'AddController@updatePos');
Route::post('permtes', 'AddController@permtes');
Route::get('displaySchemes','DisplayController@displaySchemes');
Route::get('displayPricelist','DisplayController@displayPricelist');
Route::post('addHmo', 'AddController@addHmo');
Route::get('onEditHmo/{id}', 'DisplayController@onEditHmo');
Route::post('editingHmo', 'AddController@editingHmo');
Route::post('editingondeleteHmoHmo/{id}', 'AddController@editingondeleteHmoHmo');






//Dashboard (PHARMACY)
Route::get('displayPharAdminDash','DisplayController@displayPharAdminDash');
Route::get('displayPharAdminDashStaff','DisplayController@displayPharAdminDashStaff');
Route::get('displayPharAdminDashInvoice','DisplayController@displayPharAdminDashInvoice');
Route::post('displayPharStaffDashInvoice','DisplayController@displayPharStaffDashInvoice');
Route::get('displayPharAdminDashStock','DisplayController@displayPharAdminDashStock');
Route::post('displayPharStaffDashStock','DisplayController@displayPharStaffDashStock');
Route::get('displayPharAdminDashAppointment','DisplayController@displayPharAdminDashAppointment');
Route::post('displayPharStaffDashAppointment','DisplayController@displayPharStaffDashAppointment');
Route::post('displayPharStaffDash','DisplayController@displayPharStaffDash');
// Staff
Route::get('staffdetails/{id}','DisplayController@staffdetails');
Route::get('mydetails','DisplayController@mydetails');
Route::post('uStatus','DisplayController@uStatus');
Route::post('c_uStatus','DisplayController@c_uStatus');
Route::post('reStatus','DisplayController@reStatus');
Route::post('assign','AddController@assign');
Route::post('edtAssign','AddController@edtAssign');
Route::get('staffdepartment/{id}','DisplayController@staffdepartment');
Route::get('deptModules/{id}','DisplayController@deptModules');
Route::get('dashDeptModules/{id}','DisplayController@dashDeptModules');
Route::get('fetchteam','DisplayController@fetchteam');




//ItemDetails
Route::get('edtItemDetails/{id}','DisplayController@edtItemDetails');
Route::get('displayItemDetails','DisplayController@displayItemDetails');
Route::post('addItemDetails', 'AddController@addItemDetails');
Route::post('updateItemDetails', 'AddController@updateItemDetails');
Route::post('deleteItemDetails', 'AddController@deleteItemDetails');
Route::get('disItemDet','DisplayController@disItemDet');   
//Branch  
Route::post('addCenter', 'AddController@addCenter');
Route::get('displayStaffBranch/{id}','DisplayController@displayStaffBranch');
Route::post('displayAppointmentBranch/{id}','DisplayController@displayAppointmentBranch');
Route::get('edtBranch/{id}','DisplayController@edtBranch');
Route::get('displayCenter/{id}','DisplayController@displayCenter');
Route::get('displayBranch','DisplayController@displayBranch');
Route::get('displayPharmacyBranch','DisplayController@displayPharmacyBranch');
Route::get('displaybranchs','DisplayController@displayBranchs');
Route::get('displaysetBranch','DisplayController@displaysetBranch');
Route::get('getDepertment','DisplayController@getDepertment');
Route::post('onEditBranch','DisplayController@onEditBranch');
Route::post('addBranch', 'AddController@createBranch');
Route::post('addBranchs', 'AddController@createBranchs');
Route::post('updateBranch', 'AddController@updateBranch');
Route::post('deleteBranch', 'AddController@deleteBranch');
Route::post('suspendBranch', 'AddController@suspendBranch');
Route::post('activateBranch', 'AddController@activateBranch');
Route::get('centerBranch','DisplayController@centerBranch');
Route::get('centerType','DisplayController@centerType');
Route::post('CenterTypes','AddController@CenterTypes');
Route::post('editCenterType','AddController@editCenterType');
Route::post('editCentertype','AddController@editCentertypes');
Route::post('deleteCenterType','AddController@deleteCenterType');
Route::get('Ranks','DisplayController@Ranks');
Route::post('AddRank','AddController@AddRank');
Route::post('editingRank','AddController@editingRank');
Route::post('editRank','AddController@editRank');
Route::post('deleteRank','AddController@deleteRank');
Route::get('Teams','DisplayController@Teams');
Route::post('AddTeam','AddController@AddTeam');
Route::post('editingTeam','AddController@editingTeam');
Route::post('editTeam','AddController@editTeam');
Route::post('deleteTeam','AddController@deleteTeam');
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
//Pharmacy services componential settings
Route::get('displayDuration','DisplayController@displayDuration');
Route::get('displayDurationForV/{id}','DisplayController@displayDurationForV');
Route::get('idDurationForV/{id}','DisplayController@idDurationForV');
Route::get('updatePrecription/{id}','DisplayController@updatePrecription');
Route::post('addItemType', 'AddController@addItemType');
Route::post('updateDuration', 'AddController@updateDuration');
Route::get('edtduration/{id}','DisplayController@edtduration');
Route::post('deleteDuration', 'AddController@deleteDuration');
Route::get('displayInstruction','DisplayController@displayInstruction');
Route::get('idInstruction/{id}','DisplayController@idInstruction');
Route::post('updateInstruction', 'AddController@updateInstruction');
Route::get('edtinstruction/{id}','DisplayController@edtinstruction');
Route::post('addInstruction', 'AddController@addInstruction');
Route::post('deleteInstruction', 'AddController@deleteInstruction');
Route::get('edtInstruction/{id}','DisplayController@edtInstruction');
Route::post('updateInsruction', 'AddController@updateInsruction');
Route::get('displayRefill','DisplayController@displayRefill');
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
Route::get('displayHospitalNum/{id}','DisplayController@displayHospitalNum');
Route::get('countCustomer','DisplayController@countCustomer');
Route::post('addCustomer', 'AddController@addCustomer');
Route::post('updateCustomer', 'AddController@updateCustomer');
Route::post('updateCustomer2', 'AddController@updateCustomer2');
Route::post('deleteCustomer', 'AddController@deleteCustomer');
Route::get('displayCharges','DisplayController@displayCharges');
Route::post('searchPatient','AddController@searchPatient');
Route::get('patientdetails/{id}','DisplayController@patientdetails');
Route::get('getpatientdetails/{id}','DisplayController@getpatientdetails');
Route::get('verifyInvoice/{id}','DisplayController@verifyInvoice');
Route::get('customer_category','DisplayController@customer_category');
Route::get('patientbyappointment/{id}','DisplayController@patientbyappointment');
Route::post('changeCategory', 'AddController@changeCategory');
Route::post('addCustCategories', 'AddController@addCustCategories');
Route::get('displayCustomerCategory','DisplayController@displayCustomerCategory');
Route::get('edtCustCategories/{id}','DisplayController@edtCustCategories');
Route::post('updateCustCategories', 'AddController@updateCustCategories');
Route::post('deleteCustCategories', 'AddController@deleteCustCategories');
Route::get('displayAppointmentType','RecordModuleController@displayAppointmentType');
//EPS Patients
Route::post('addEpsCustomer', 'AddController@addEpsCustomer');
// Appointments   
Route::get('displayAllappointment','DisplayController@displayAllappointment');
Route::get('getEncounterType','DisplayController@getEncounterType');
Route::get('getEncounter/{id}','DisplayController@getEncounter');
Route::get('getEncounterDetails/{id}','DisplayController@getEncounterDetails');
Route::post('submitPreamble','AddController@submitPreamble');
Route::post('submitEncounter','AddController@submitEncounter');
Route::post('makeAppointment2','AddController@makeAppointment2');
Route::get('displayDeptAppointment/{id}','DisplayController@displayDeptAppointment');
Route::get('displayRevenueAppointment','DisplayController@displayRevenueAppointment');
Route::get('displayPharmStaffDashAppointment','DisplayController@displayPharmStaffDashAppointment');
Route::get('displayDeptAppoint/{id}','DisplayController@displayDeptAppoint');
Route::get('countAppointment','DisplayController@countAppointment');
Route::post('deleteAppointment', 'AddController@deleteAppointment');
Route::post('terminateAppointment/{id}', 'AddController@terminateAppointment');
Route::post('closeAppointment/{id}/{vid}', 'AddController@closeAppointment');
Route::post('endappointment','DisplayController@endAppointment');
Route::get('endappointments','DisplayController@endAppointments');
Route::post('deptlist','DisplayController@deptList');
Route::post('editapp','DisplayController@editAppoint');
Route::post('relocateapp','DisplayController@relocateApp');
Route::get('getnewappoint/{id}','DisplayController@getNewappoint');



//Doctor Prescriptions
Route::get('edtPrescription/{id}','DisplayController@edtPrescription');
Route::get('displayPrescription','DisplayController@displayPrescription');
Route::post('addPrescription', 'AddController@addPrescription');
Route::post('updatePrescription', 'AddController@updatePrescription');
Route::post('deletePrescription/{id}', 'AddController@deletePrescription');
Route::post('displayPharmInvoice/{id}/{vid}/{moduleid}','DisplayController@displayPharmInvoice');
Route::post('displayServiceChargeInvoice/{id}/{vid}','DisplayController@displayServiceChargeInvoice');
Route::get('displayAllInvoice/{id}','DisplayController@displayAllInvoice');
Route::post('pharmPriscription', 'AddController@pharmPriscription');
Route::post('saveTovoucher/{id}', 'AddController@saveTovoucher');
// Route::post('updateVoucher', 'AddController@updateVoucher');
Route::post('displayRefillPrescriptions/{id}','DisplayController@displayRefillPrescriptions');
Route::post('pres_refill_id/{id}','DisplayController@pres_refill_id');
Route::post('refillInStock','DisplayController@refillInStock');
Route::post('saveRefill','AddController@saveRefill');
Route::get('displayPharmPrescription/{id}','DisplayController@displayPharmPrescription');
Route::post('checkRefill/{id}','AddController@checkRefill');
// Route::post('deletePrescription/{id}', 'AddController@deletePrescription');  
//Invoices
Route::get('edtInvoice/{id}','DisplayController@edtInvoice');
Route::get('displayInvoice','DisplayController@displayInvoice');
Route::post('addInvoice', 'AddController@addInvoice');
Route::post('updateInvoice', 'AddController@updateInvoice');
Route::post('deleteInvoice', 'AddController@deleteInvoice');
Route::post('saveToInvoice', 'AddController@saveToInvoice');
Route::post('payService', 'AddController@payService');
//Vouchers
Route::get('edtVoucher/{id}','DisplayController@edtVoucher');
Route::get('displayVoucher','DisplayController@displayVoucher');
Route::post('addVoucher', 'AddController@addVoucher');
Route::post('updateVoucher', 'AddController@updateInvoice');
Route::post('deleteVoucher', 'AddController@deleteVoucher');
Route::post('cancelPharmLog','DisplayController@cancelPharmLog');
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
Route::post('submitReturn', 'AddController@submitReturn');
Route::get('saveAdd', 'AddController@saveAdd');
Route::get('saveTransfer', 'AddController@saveTransfer');
Route::get('saveVariance', 'AddController@saveVariance');
Route::post('varianceStock', 'AddController@varianceStock');
Route::get('varianceItems','DisplayController@varianceItems');
Route::get('addedItems','DisplayController@addedItems');
Route::get('transItems','DisplayController@transItems');
Route::get('inStock/{id}','DisplayController@inStock');
Route::post('inStockT','DisplayController@inStockT');
Route::post('voucherAllStock/{id}/{appointment}','DisplayController@voucherAllStock');
Route::post('displayEncounterPharm/{appointment}/{pharm}','DisplayController@displayEncounterPharm');
Route::get('editAdd/{id}', 'AddController@editAdd');
Route::post('deleteAdd', 'AddController@deleteAdd');
Route::post('updateAddItem', 'AddController@updateAddItem');
Route::post('updatetransferItem', 'AddController@updatetransferItem');
Route::get('editTrans/{id}', 'AddController@editTrans');
Route::post('deleteTrans', 'AddController@deleteTrans');
Route::get('editVariance/{id}', 'AddController@editVariance');
Route::post('deleteVariance', 'AddController@deleteVariance');
Route::post('updateVarianceItem', 'AddController@updateVarianceItem');
//Stock Report
Route::post('stockReport','DisplayController@stockReport');
Route::post('searchReport','DisplayController@searchReport');
Route::post('stockHistory','DisplayController@stockHistory');

 //RECORD MODULE APIS  
 Route::get('displayApptType', 'RecordModuleController@displayApptType');
Route::post('addApptType', 'RecordModuleController@addApptType');
Route::get('displayRecordCharges','RecordModuleController@displayRecordCharges');
Route::get('editApptType/{id}', 'RecordModuleController@editApptType');
Route::post('deleteApptType', 'RecordModuleController@deleteApptType');
Route::post('updateApptType', 'RecordModuleController@updateApptType');

Route::get('displayUser', 'RecordModuleController@displayUser');
Route::post('addHospitalCharge', 'RecordModuleController@addHospitalCharge');
Route::get('displayRecordCharges','RecordModuleController@displayRecordCharges');
Route::get('editCharge/{id}', 'RecordModuleController@editCharge');
Route::post('deleteCharge', 'RecordModuleController@deleteCharge');
Route::post('updateCharge', 'RecordModuleController@updateCharge');  

Route::post('makeAppointment','RecordModuleController@makeAppointment');
Route::post('bookAppointment','RecordModuleController@bookAppointment');

// DOctor Module
Route::get('patient-data/{id}', 'DoctorModule@patientData');
Route::get('displayAppointment','DoctorModule@displayAppointment');

//REVENUE RECORD APIS
Route::get('patientvouchers/{id}','RevenueModuleController@patientVouchers');
Route::get('councelVoucher/{id}','RecordModuleController@councelVoucher');

//RECORD DASHBOARD
Route::get('displayRecordData','RecordModuleController@displayRecordData');
Route::get('displayRecordStaffData','RecordModuleController@displayRecordStaffData');
Route::get('displayRecordPieData','RecordModuleController@displayRecordPieData');

//REVENUE DASHBOARD 
Route::get('displayRevenueData','RevenueModuleController@displayRevenueData');
Route::get('displayRevenueStaffData','RevenueModuleController@displayRevenueStaffData');


//Medical Processes
Route::get('displayProcessProperties','DisplayController@displayProcessProperties');
Route::get('displayProcessModules','DisplayController@displayProcessModules');
Route::get('displayProcessAttributes','DisplayController@displayProcessAttributes');
Route::get('displayProcessValues','DisplayController@displayProcessValues');
Route::get('Value/{id}','DisplayController@Value');
Route::get('formvalue/{id}','DisplayController@formvalue');
Route::get('fetchForm','DisplayController@fetchForm');
Route::post('processResult','DisplayController@processResult');
Route::post('addProcessProperties','AddController@addProcessProperties');
Route::post('addProcessModules','AddController@addProcessModules');
Route::post('addProcessAttributes','AddController@addProcessAttributes');
Route::post('addProcessValues','AddController@addProcessValues');
Route::post('addValues','AddController@addValues');
Route::get('editProperty/{id}','DisplayController@editProperty');
Route::get('editAttribute/{id}','DisplayController@editAttribute');
Route::get('editProcessValue/{id}','DisplayController@editProcessValue');
Route::post('updateProperty', 'AddController@updateProperty');
Route::post('updateAttribute', 'AddController@updateAttribute');
Route::post('updateProcessValue', 'AddController@updateProcessValue');
Route::post('deleteProp/{id}', 'AddController@deleteProp');
Route::post('deleteAttr/{id}', 'AddController@deleteAttr');
Route::post('deletePropVal/{id}', 'AddController@deletePropVal');
Route::post('submitProcessVals','AddController@submitProcessVals');
Route::post('onSubmitTable', 'AddController@onSubmitTable');












});


