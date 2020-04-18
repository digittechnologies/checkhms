<?php
namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use App\Http\Requests\SignUpRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Positions;
use App\Departments;
use App\User;
use App\Item_units;
use App\Item_types;
use App\Item_categories;
use App\Manufacturer_details;
use App\Shelves;
use App\Branches;
use App\Item_details;
use App\Customers;
use App\Doctor_prescriptions;
use App\Invoices;
use App\Vouchers;
use App\Appointments;
use App\Lab_depts;
use App\Lab_test_types;
use Carbon\Carbon;
use App\Role;
use App\Duration;
class RevenueModuleController extends Controller
{
public function patientVouchers(Request $request){
    $vouchid = $request->id;
    //  return  $user =  Auth()->user();
   $deptId= Auth()->user()->dept_id;
  $branchId= Auth()->user()->branch_id;

return response()->json([
    'pharm'=> DB::table('appointments')
    ->join('departments','appointments.department_id','=','departments.id')
    ->select('appointments.*','departments.*')
    ->where('appointments.customer_id',$vouchid)
    // ->where('prescription','=','success')
    // ->where('status','=','active')
    // ->where('branch_id',  $branchId)
    // ->where('invoice','=','open')
    // ->where('voucher','=','success')
    ->where('appointments.department_id',1)
    ->get(),

    'record'=> DB::table('appointments')
    ->join('departments','appointments.department_id','=','departments.id')
    ->select('appointments.*','departments.*')
    ->where('appointments.customer_id',$vouchid)
    // ->where('prescription','=','success')
    // ->where('status','=','active')
    // ->where('branch_id',  $branchId)
    // ->where('invoice','=','open')
    // ->where('voucher','=','success')
    ->where('department_id',16)
    ->get()
    //  'pharm'=>DB::table('vouchers')->where('customer_id','=',$vouchid)->where('paid')->get()
]);

}
}
