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

class DisplayController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    
    //staff
    public function staffdetails($id)
    {
        return response()->json(
        
            User::orderBy('id')->join ('departments','users.dept_id','=','departments.id')
            ->select('users.*', 'departments.position_id')
            ->where('users.id','=',$id)          
            ->get()
           
        );
    
    }
    
    public function displayAllstaff()
    {
        $id= Auth()->user()->id;
            return User::orderBy('id')->join('departments','users.dept_id','=','departments.id')
                    ->select('users.*','departments.name')  
                    ->where('users.id', '!=', $id)             
                    ->get();
    
    }
    public function uStatus(Request $request)
    {
        $id=$request[0];

   
    $status=DB::table('users')
    ->where('id','=', $id)
    ->update(['status' =>'approved']); 
  
     return $status;
    
    }

    public function c_uStatus(Request $request)
    {
        $id=$request[0];

   
    $status=DB::table('users')
    ->where('id','=', $id)
    ->update(['status' =>'suspended']); 
  
     return $status;
    
    }

    public function reStatus(Request $request)
    {
        $id=$request[0];

   
    $status=DB::table('users')
    ->where('id','=', $id)
    ->update(['status' =>'approved']); 
  
     return $status;
    
    }

    //Depertment

    public function displayDepartments()
    {
        return Departments::orderBy('id')->join('positions','departments.position_id','=','positions.id')
                    ->select('departments.*','positions.position_name')               
                    ->get();
    }

    public function edtDept($id)
    {
    
        return response()->json(
        
            Departments::orderBy('id')->join('positions','departments.position_id','=','positions.id')
            ->select('departments.*','positions.position_name')     
            ->where('departments.id','=',$id)          
            ->get()
           
        );
    
    }

    //Position
    public function displayAllposition()
    {
        return DB::table("positions")->get();
    }

    // Unit

    public function displayUnit()
    {
        return DB::table("item_units")->get();
    }

    public function edtUnit($id)
    {
    
        return response()->json(
        
            Item_units::orderBy('id')
            ->select('item_units.*')     
            ->where('id','=',$id)          
            ->get()
           
        );
    
    }

    // type

    public function displayType()
    {
        return DB::table("item_types")->get();
    }

    public function edtType($id)
    {
    
        return response()->json(
        
            Item_types::orderBy('id')
            ->select('item_types.*')     
            ->where('id','=',$id)          
            ->get()
           
        );
    
    }

    // Manufacturer

    public function displayManufacturer()
    {
        return DB::table("manufacturer_details")->get();
    }

    public function edtManufacturer($id)
    {
    
        return response()->json(
        
            Manufacturer_details::orderBy('id')
            ->select('manufacturer_details.*')     
            ->where('id','=',$id)          
            ->get()
           
        );
    
    }

    // Categories

    public function displayCategories()
    {
        return DB::table("item_categories")->get();
    }

    public function edtCategories($id)
    {
    
        return response()->json(
        
            Item_categories::orderBy('id')
            ->select('item_categories.*')     
            ->where('id','=',$id)          
            ->get()
           
        );
    
    }


    // Shelve

    public function displayShelve()
    {
        return Shelves::orderBy('id')->join('branches','shelves.branch_id','=','branches.id')
                    ->select('shelves.*','branches.br_name')               
                    ->get();
        // return DB::table("shelves")->get();
    }

    public function edtShelve($id)
    {
    
        return response()->json(        
              
            Shelves::orderBy('id')
            ->select('shelves.*')     
            ->where('id','=',$id)          
            ->get()
           
        );
    
    }


    // Item

    public function displayItemDetails()
    {
        

        $item = DB::table('item_details')->select('item_details.*', 'item_types.type_name', 'item_types.image', 'item_categories', 'manufacturer_details.name','item_categories.cat_name', 'item_details.item_img')
         ->join ('item_types','item_details.item_type_id','=','item_types.id')
         ->join ('item_categories','item_details.item_category_id','=','item_categories.id')
         ->join ('item_units','item_details.item_unit_id','=','item_units.id')
         ->join ('manufacturer_details','item_details.manufacturer_id','=','manufacturer_details.id')
    
        ->get();
        if($item){
            return $item;
        } else {
            return ;
        }

        // return DB::table("item_details")->get();
    }

    public function edtItemDetails($id)
    {
    
        return response()->json(
        
            Item_details::orderBy('id')
            ->join ('item_types','item_details.item_type_id','=','item_types.id')
            ->join ('item_categories','item_details.item_category_id','=','item_categories.id')
            ->join ('item_units','item_details.item_unit_id','=','item_units.id')
            ->join ('manufacturer_details','item_details.manufacturer_id','=','manufacturer_details.id')
            ->select('item_details.*', 'item_units.name AS unit_name', 'item_units.box_size', 'item_units.value', 'item_types.type_name', 'item_types.image', 'item_categories.cat_name', 'manufacturer_details.name AS manuf_name', 'manufacturer_details.address','manufacturer_details.contact_number', 'manufacturer_details.details', 'item_details.item_img')     
            ->where('item_details.id','=',$id)          
            ->get()
           
        );
    
    }


    // All Items Informations

    public function displayItem($id)
    {
        $verifyId = Auth()->user()->branch_id;
        return $id;
        $dt = Carbon::now();
        $cDate = $dt->toFormattedDateString();
        $cTime = $dt->format('h:i:s A');
        
        $branch = DB::table("branches")
        ->where('id', $id)
        ->get();   
        $id = $branch[0]->br_name;
    
        if($id != 'branch_main'){
            $branch = DB::table("branches")
            ->where('id', $id)
            ->get();   
            $id = $branch[0]->br_name;
        }

        return response()->json([

           'item'=>DB::table($id)->select($id.'.*', 'item_details.id AS item_id',  'item_details.generic_name', 'manufacturer_details.name','item_categories.cat_name', 'item_details.item_img', 'item_details.selling_price', 'item_details.purchasing_price', 'item_details.markup_price')
           ->join ('item_details',$id.'.item_detail_id','=','item_details.id')
           ->join ('item_categories','item_details.item_category_id','=','item_categories.id')
           ->join ('manufacturer_details','item_details.manufacturer_id','=','manufacturer_details.id')
           // ->where ('c_date', '=', $cDate)
           ->get(),
           'addedItem'=>DB::table($id)->select($id.'.*')->sum($id.'.receive'),
           'transferredItem'=>DB::table($id)->select($id.'.*')->sum($id.'.transfer'),
           'soldItem'=>DB::table($id)->select($id.'.*')->sum($id.'.sales'),
           'varianced'=>DB::table($id)->select($id.'.*')->sum($id.'.variance'),
           'openBal'=>DB::table($id)->select($id.'.*')->sum($id.'.open_stock'),
           'physBal'=>DB::table($id)->select($id.'.*')->sum($id.'.physical_balance'),
           'total'=>DB::table($id)->select($id.'.*')->sum($id.'.total_remain'),
           'bran'=>DB::table('branches')->select('branches.name')->where('br_name', '=', $id)->first(), 

        ]);
    }

    public function edtItem($id)
    {
    
        return response()->json(
        
            Item_details::orderBy('id')
            ->select('item_details.*')     
            ->where('id','=',$id)          
            ->get()
           
        );
    
    }


    // Branch

    public function displaysetBranch()
    {
        // return DB::table("branches")->get();
        return Branches::all();
    }

    public function displayBranch()
    {
        // return DB::table("branches")->get();
        return Branches::where('status', '=', 'active')->get();
    }


    public function edtBranch($id)
    {
    
        return response()->json(
        
            Branches::orderBy('id')
            ->select('branches.*')     
            ->where('id','=',$id)          
            ->get()
           
        );
    
    }


    // Customers/ Patients

    public function displayCustomer()
    {
        return DB::table("customers")->get();
    }

    public function edtCustomer($id)
    {
    
        return response()->json(
        
            Customers::orderBy('id')
            ->select('customers.*')     
            ->where('id','=',$id)          
            ->get()
           
        );
    
    }
    public function patientdetails($id)
    {
    
        return response()->json(
        
            Customers::where('id','=',$id)          
            ->get()
           
        );
    
    }

    //Appointment
    public function displayAllappointment()
    {
                  
            return Appointments::orderBy('id')->join('departments','appointments.department_id','=','departments.id')
                    ->join('customers','appointments.customer_id','=','customers.id')
                    ->select('appointments.*','departments.name as dept_name', 'customers.name as pat_name', 'customers.othername', 'customers.patient_image', 'customers.card_number')               
                    ->get();
    
    }

    public function displayDeptAppointment()
    {
       
        $deptId= Auth()->user()->dept_id;
            return Appointments::orderBy('id')->join('departments','appointments.department_id','=','departments.id')
                    ->join('customers','appointments.customer_id','=','customers.id')
                    ->select('appointments.*','departments.name as dept_name', 'customers.name as pat_name', 'customers.id as cust_id', 'customers.othername', 'customers.card_number', 'customers.patient_image', 'customers.blood_group', 'customers.genotype')               
                    ->where('appointments.department_id','=',$deptId)
                    ->get();
    
    }

    public function countAppointment()
    {
        $deptId= Auth()->user()->dept_id;
        $post = DB::table('appointments')->select(DB::raw('count(id) as "all_appoint", (select COUNT(id) from appointments where treatment = "open" and department_id ='.$deptId.') as "open", (select COUNT(id) from appointments where treatment = "success" and department_id ='.$deptId.') as "success", (select COUNT(id) from appointments where lab = "open" and department_id ='.$deptId.') as "pending" '))
        ->where('appointments.department_id','=',$deptId)        
        ->get();
      return $post;

    }

    // Prescriptions

    public function displayPrescription()
    {
        return DB::table("doctor_prescriptions")->get();
    }

    public function displayPharmPrescription($id)
    {
        return DB::table("doctor_prescriptions")
                ->select('doctor_prescriptions.*', 'item_details.selling_price', 'item_details.generic_name', 'item_details.item_img', 'branch_main.total_remain')
                ->join ('item_details','doctor_prescriptions.item_id','=','item_details.id')
                ->join ('branch_main','branch_main.item_detail_id','=','doctor_prescriptions.item_id')
                ->where('doctor_prescriptions.status', '=', 'open')
                ->where('customer_id', '=', $id)
                ->get();
    }

    public function edtPrescription($id)
    {
    
        return response()->json(
        
            Doctor_prescriptions::orderBy('id')
            ->select('doctor_prescriptions.*')     
            ->where('id','=',$id)          
            ->get()
           
        );
    
    }

    // Invoices

    public function displayInvoice()
    {
        return DB::table("invoices")->get();
    }

    public function edtInvoice($id)
    {
    
        return response()->json(
        
            Invoices::orderBy('id')
            ->select('invoices.*')     
            ->where('id','=',$id)          
            ->get()
           
        );
    
    }

    // Vouchers

    public function displayVoucher()
    {
        return DB::table("vouchers")->get();
    }

    public function edtVoucher($id)
    {
    
        return response()->json(
        
            Vouchers::orderBy('id')
            ->select('vouchers.*')     
            ->where('id','=',$id)          
            ->get()
           
        );
    
    }

//Lab Depertment

    public function displayLabDepartments()
    {
        return response()->json(
        
            Lab_depts::orderBy('id')->join('departments','lab_depts.department_id','=','departments.id')
            ->select('lab_depts.*','departments.name')       
            ->get()
           
        );
    }

    public function edtLabDept($id)
    {
        return response()->json(
        
            Lab_depts::orderBy('id')->join('departments','lab_depts.department_id','=','departments.id')
            ->select('lab_depts.*','departments.name') 
            ->where('lab_depts.id','=',$id)        
            ->get()
           
        );
    }


//Lab Test Types

    public function displayLabTestType()
    {
        return response()->json(
        
            Lab_test_types::orderBy('id')->join('lab_depts','lab_test_types.lab_dept_id','=','lab_depts.id')
            ->select('lab_test_types.*','lab_depts.lab_name')       
            ->get()
           
        );
    }

    public function edtLabTestType($id)
    {
        return response()->json(
        
            Lab_test_types::orderBy('id')->join('lab_depts','lab_test_types.lab_dept_id','=','lab_depts.id')
            ->select('lab_test_types.*','lab_depts.lab_name') 
            ->where('lab_test_types.id','=',$id)        
            ->get()
           
        );
    }
    
//Branches to add items to 
    public function stockBranches()
    {
        $branch = DB::table("branches")->get(); 
        $array = array();
        foreach($branch as $row){
            $name = $row->br_name;
            if($row->br_name != 'branch_main'){
                $name = 'branch_'.strtolower(trim(str_replace(' ', '', $row->br_name)));
            }
            array_push($array, $name);
         }
         return $array;
    }

    public function disItemDet()
    {
    
        return response()->json(
        
            Item_details::orderBy('id')->join ('manufacturer_details','item_details.manufacturer_id','=','manufacturer_details.id') 
                                    ->select('item_details.*', 'manufacturer_details.name AS manuf_name')        
                                    ->get()
        );
    }

    public function addedItems()
    {
        return DB::table("branch_main")
        ->select('branch_main.*', 'item_details.id AS item_id',  'item_details.generic_name', 'item_details.item_img', 'manufacturer_details.name AS manuf_name', 'purchases.id AS aID', 'purchases.quantity', 'purchases.newstock', 'purchases.instock')
        ->join ('item_details','branch_main.item_detail_id','=','item_details.id')
        ->join ('manufacturer_details','item_details.manufacturer_id','=','manufacturer_details.id')
        ->join ('purchases','branch_main.item_detail_id','=','purchases.item_detail_id')
        ->where('purchases.status','=','saved')
        ->get();
    }

    public function varianceItems()
    {
        return DB::table("branch_main")
        ->select('branch_main.*', 'item_details.id AS item_id',  'item_details.generic_name', 'item_details.item_img', 'manufacturer_details.name AS manuf_name', 'variances.id AS vID', 'variances.quantity', 'variances.newstock', 'variances.instock', 'variances.purpose', 'variances.detail')
        ->join ('item_details','branch_main.item_detail_id','=','item_details.id')
        ->join ('manufacturer_details','item_details.manufacturer_id','=','manufacturer_details.id')
        ->join ('variances','branch_main.item_detail_id','=','variances.item_detail_id')
        ->where('variances.status','=','open')
        ->get();
    }

    public function transItems()
    {
        return DB::table("branch_main")
        ->select('branch_main.*', 'item_details.id AS item_id',  'item_details.generic_name', 'item_details.item_img', 'transfers.quantity_from', 'transfers.remain_from', 'transfers.remain_to', 'transfers.newstock', 'transfers.quantity_to', 'total_quantity', 'transfers.id AS tID')
        ->join ('item_details','branch_main.item_detail_id','=','item_details.id')
        ->join ('transfers','branch_main.item_detail_id','=','transfers.item_detail_id')
        ->where('transfers.status','=','open')
        ->get();
    }    

    public function inStock($id)
    {
           return DB::table("branch_main")
            ->where('item_detail_id', '=', $id)
            ->select('branch_main.total_remain')
            ->get();

           // $sub = substr($id, 3);
           //  return DB::table("branch_main")
           //  ->where('item_detail_id', '=', $sub)
           //  ->select('branch_main.total_remain')
           //  ->get();
    }

    public function inStockT(Request $request)
    {
        $item = $request[0];
        $branch= $request[1];
        return DB::table($branch)
        ->where('item_detail_id', '=', $item)
        ->select($branch.'.total_remain')
        ->get();
    }

    public function stockReport($branch)
    {
        $dt = Carbon::now();
        $cDate = $dt->toFormattedDateString();

        if($branch != 'branch_main'){
            $branch = DB::table("branches")
            ->where('name', $id)
            ->get();   
            $branch = $branch[0]->br_name;
        }

        return DB::table($branch)
        ->select($branch.'.*', 'transfers.*')
        ->join ('transfers',$branch.'.item_detail_id','=','transfers.item_detail_id')
           // ->where ('c_date', '=', $cDate)
        ->get();
    }

    public function searchReport(Request $request)
    {
        $branch = $request->br_name;
        $sDate = $request->sDate;
        $eDate = $request->eDate;

        $startDate = new Carbon('2020-01-01');
        $endDate = new Carbon('2020-01-08');
        $dateRange = array();
        while ($startDate->lte($endDate)) {
            $dateRange[] = $startDate->toFormattedDateString();
            $startDate->addDay();
        }

        if($branch != 'branch_main'){
            $branch = DB::table("branches")
            ->where('name', $id)
            ->get();   
            $branch = $branch[0]->br_name;
        }

        return DB::table($branch)
        ->select($branch.'.*', 'transfers.*')
        ->join ('transfers',$branch.'.item_detail_id','=','transfers.item_detail_id')
        ->whereIn($branch.'.c_date', $dateRange)
        ->get();
    }

    public function stockHistory(Request $request)
    {
        $action = $request->action;
        $branch = $request->branch;
        $sDate = $request->sDate;
        $eDate = $request->eDate;
        $dt = Carbon::now();
        $defaultDate = $dt->toFormattedDateString();

        if($action == 'sales'){

        }
        if($action == 'adds'){
            
        }
        if($action == 'transfers'){
            
        }
        if($action == 'variances'){
            
        }
    }
    // public function generalSearch($term)
    // {
    //     return DB::table($branch)
    //     ->select($branch.'.*', 'transfers.*')
    //     ->join ('transfers',$branch.'.item_detail_id','=','transfers.item_detail_id')
    //        ->where ('column', 'like', $term%)
    //     ->get();
    // }








    public function deleteUser(Request $request)
    {
        $id=$request[0];

    $deletec=DB::table('users')->where('id', $id)->delete();
     return $id;
    
    }

    
    public function search($searchTerm)
    {
       
       
        return response()->json(
            title::whereLike(['location', 'name_title'], $searchTerm)->get()
            
        
        );
    }

    public function getitems($id)
    {
        return response()->json([
          
               'title'=> title::orderBy('id','desc')->join('categories','items.category_id','=','categories.id')
                ->join('users','items.user_id','=','users.id')
            ->select('items.*','categories.catname','categories.destription','categories.activity_id','users.firstname','users.lastname','users.middlename')
            ->where('activity_id','=',$id)
            ->where('items.status','=','Y')
            // ->inRandomOrder()->take(4) 
               ->get(),
            'acti' =>Activities::where('id','=', $id)->get(),
            'cat' =>Category::where('activity_id','=', $id)->get()
        
        ]);
    }
    public function getitemsforadmin($id)
    {
        return response()->json([
          
               'title'=> title::orderBy('id','desc')->join('categories','items.category_id','=','categories.id')
                ->join('users','items.user_id','=','users.id')
            ->select('items.*','categories.catname','categories.destription','categories.activity_id','users.firstname','users.lastname','users.middlename')
            ->where('activity_id','=',$id)
               ->get(),
            'acti' =>Activities::where('id','=', $id)->get(),
            'cat' =>Category::where('activity_id','=', $id)->get()
        
        ]);
    }
    public function getUitems()
    {
        $id=auth()->user()->id;
        // return $id;
        return response()->json([
          
               'title'=> title::orderBy('id','desc')->join('categories','items.category_id','=','categories.id')
                ->join('users','items.user_id','=','users.id')
            ->select('items.*','categories.catname','categories.destription','categories.activity_id','users.firstname','users.lastname','users.middlename')
            ->where('user_id','=',$id)
            // ->where('status','=','Y')
            // ->inRandomOrder()->take(4) 
               ->get(),
            // 'acti' =>Activities::where('id','=', $id)->get(),
            // 'cat' =>Category::where('activity_id','=', $id)->get()
        
        ]);
    }
    
    public function getUContent()
    {
        $id=auth()->user()->id;
        // return $id;
        return response()->json([
           'ucontents'=> content::orderBy('id','desc')  ->join('items','contents.name_id','=','items.id')
               ->join('categories','items.category_id','=','categories.id')
                ->join('users','items.user_id','=','users.id')
            ->select('contents.*','categories.catname','categories.destription','categories.activity_id','users.firstname','users.lastname','users.middlename')
            ->where('user_id','=',$id)
            // ->where('status','=','Y')
            // ->inRandomOrder()->take(4) 
               ->get(),
            // 'acti' =>Activities::where('id','=', $id)->get(),
            // 'cat' =>Category::where('activity_id','=', $id)->get()
        
        ]);
    }
}
