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
                                        ->join('module', 'vouchers.module_id', '=', 'module.id')
                                        ->where('appointment_id','=',$id)
                                        ->select('vouchers.*', 'departments.name as d_name', 'module.module', 'branches.name as br_name')->get()
]);

}

    public function displayRevenueData(Request $request)
    {     
        return response()->json([
            'allPatients'=> Customers::count(),
            "income" => DB::table('invoices')->sum('paid'),
            "balance" => DB::table('invoices')->sum('balance'),
            // "databaseSize" => DB::select(DB::statement(
            //     'SELECT table_schema "database", sum(data_length + index_length)/1024/1024/1024 "size in GB" FROM information_schema.TABLES WHERE table_schema="buth_pharmacy" GROUP BY table_schema'
            //     // 'SELECT table_schema "database", sum(data_length + index_length)/1024/1024 "size in MB" FROM information_schema.TABLES GROUP BY table_schema'
            //     // 'SELECT table_schema AS "database", ROUND(SUM(data_length + index_length)/1024/1024, 2) AS "size in MB" FROM information_schema.TABLES WHERE table_schema = "buth_pharmacy" GROUP BY table_schema'
            // )),
        ]);
    }

    public function displayRevenueStaffData(Request $request)
    {
        $id= Auth()->user()->branch_id;
        return response()->json([
            'allPatients'=> Customers::count(),
            "income" => DB::table('invoices')->where('branch_id', '=', $id)->sum('paid'),
            "balance" => DB::table('invoices')->where('branch_id', '=', $id)->sum('balance'),
        ]);
    }
}
