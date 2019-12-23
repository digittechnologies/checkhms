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
        
            User::orderBy('id')    
            ->where('id','=',$id)          
            ->get()
           
        );
    
    }
    
    public function displayAllstaff()
    {
                  
            return User::orderBy('id')->join('departments','users.dept_id','=','departments.id')
                    ->select('users.*','departments.name')               
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

    public function displayItem()
    {
        

        $item = DB::table('branch_main')->select('branch_main.*', 'item_details.id AS item_id',  'item_details.generic_name', 'manufacturer_details.name','item_categories.cat_name', 'item_details.item_img')
         ->join ('item_details','branch_main.item_detail_id','=','item_details.id')
         ->join ('item_categories','item_details.item_category_id','=','item_categories.id')
         ->join ('manufacturer_details','item_details.manufacturer_id','=','manufacturer_details.id')
    
        ->get();
        if($item){
            return $item;
        } else {
            return ;
        }

        // return DB::table("item_details")->get();
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

    public function displayBranch()
    {
        return DB::table("branches")->get();
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
        
            Item_details::select('item_details.*')        
            ->get()
        );
    }



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
