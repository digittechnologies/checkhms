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
public function patientVouchers($id){
  
   $deptId= Auth()->user()->dept_id;
  $branchId= Auth()->user()->branch_id;
  $customeId= appointments::orderBy('id')->where('id','=',$id)->select('appointments.customer_id')->first();
  $cId= $customeId->customer_id;
return response()->json([    
      'customer'=> Customers::join('customer_category', 'customers.cust_category_id', '=', 'customer_category.id')
        ->select('customers.*', 'customer_category.*')
        ->where('customers.id','=',$cId)          
        ->get(),

        'voucher'=> Vouchers::orderBy('id')->join('branches', 'vouchers.branch_id', '=', 'branches.id')
                                        ->join('departments', 'branches.dept_id', '=', 'departments.id')
                                        ->where('appointment_id','=',$id)
                                        ->select('vouchers.*', 'departments.name as d_name', 'branches.name as br_name')->get()
]);

}
}
