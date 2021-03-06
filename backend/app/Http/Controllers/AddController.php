<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Positions;
use App\Departments;
use App\User;
use App\Hmo;
use App\Doctor_encounter;
use Image;
use Validator;
use App\Item_types;
use App\Item_units;
use App\Item_categories;
use App\Manufacturer_details;
use App\Shelves;
use App\Item_details;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use App\Branches;
use App\Customers;
use App\Doctor_prescriptions;
use App\Invoices;
use App\Vouchers;
use Carbon\Carbon;
use App\Appointments;
use App\Lab_depts;
use App\Lab_test_types;
use App\Duration;
use App\Centers;
use App\Daily_supply;
use App\Customer_category;
use App\Hospital_charges;
use App\Http\Requests\PatientRequest;
use App\Http\Requests\EpsRequest;
use App\Process_tb;
use App\Process_attribute_tb;
use App\Process_module_tb;
use App\Service_charges;
use App\Encounter;

class AddController extends Controller
{
//General Setting
public function addGeneralSet(Request $request)
{
    do{
        $license_key= substr(str_shuffle("0123456789abcdefghijklmnopqrstuvwxyz"), 0, 15);
    }while(DB::table('general_settings')->where('license_key','=',$license_key)->exists());

       $datas=$request->formdata;
       
        if ($request->image){
            $file=$request->image;
            $filename=time().'.' . explode('/', explode(':', substr($file, 0, strpos($file,';')))[1])[1];
            Image::make($file)->resize(300, 300)->save(public_path('upload/uploads/'.$filename));
            
        }    
 

$update = DB::table('general_settings')->insert([
        'company_name'=>$datas['company_name'],
        'app' => $datas['app'],
        'short_name' =>$datas['short_name'],
        'address' =>$datas['address'],
        'contact_number' =>$datas['contact_number'],
        'web_url' =>$datas['web_url'],
        'email' =>$datas['email'],
        'module' =>$datas['module'],
        'logo'=> $filename,
        'status'=>'registerd',
        'license_key'=>$license_key
    ]);
    if($update){
        return '{
            "success":true,
            "message":"successful"
        }' ;
    } else {
        return '{
            "success":false,
            "message":"Failed"
        }';
    }
}
public function updateGeneralSet(Request $request)
{
   
       $datas=$request->formdata;
       $id=$datas['id'];
  
    $currentfile= $datas['logo'];
        if ($request->image != $currentfile){
            $file=$request->image;
            $filename=time().'.' . explode('/', explode(':', substr($file, 0, strpos($file,';')))[1])[1];
            Image::make($file)->resize(300, 300)->save(public_path('upload/uploads/'.$filename));
            $update =DB::table('general_settings')->where('id','=',$id)->update([ 'logo'=>$filename]);
        }    
 
// return $update;
$update = DB::table('general_settings')->where('id','=',$id)->update([
        'company_name'=>$datas['company_name'],
        'app' => $datas['app'],
        'short_name' =>$datas['short_name'],
        'address' =>$datas['address'],
        'contact_number' =>$datas['contact_number'],
        'web_url' =>$datas['web_url'],
        'email' =>$datas['email'],
        'module' =>$datas['module'],
    ]);
    if($update){
        return '{
            "success":true,
            "message":"successful"
        }' ;
    } else {
        return '{
            "success":false,
            "message":"Failed"
        }';
    }
}
//Set Depertment Component  

public function addCenter(Request $request)
{

    $staffId= Auth()->user()->id;
    $request->merge(['created_by' => $staffId]);
    $dept= Centers::create($request-> all());
   
    if($dept){
        return '{
            "success":true,
            "message":"successful"
        }' ;
    } else {
          return '{
            "success":false,
            "message":"Failed"
        }';
    }
}

    public function addDept(Request $request)
    {
        $dept= Departments::create($request-> all());
       
        if($dept){
            return '{
                "success":true,
                "message":"successful"
            }' ;
        } else {
              return '{
                "success":false,
                "message":"Failed"
            }';
        }
    }
    public function updateBranch(Request $request){
        $name = $request->name;
        $address = $request->adress;
        $sales_rep = $request->sales_rep;
        $branch_id  = $request->branch_id;
        $dept_id = $request->dept_id;
        $status = $request->status;
        $id = $request->id;

        $update = Branches::where('id','=',$id)
        ->update([
            'name'=>$name,
            'address'=>$address,
            'sales_rep'=>$sales_rep,
            'branch_id'=>$branch_id,
            'dept_id'=>$dept_id,
            'status'=>$status
            ]);
        if($update){
           return '{
            "message":"successful"
        }' ;
        }
        // return $request;

    }

    public function EditBranch(Request $request)
    {
        $id=$request->id;
        $name= $request->name;
        $address= $request->description;
        $status= $request->position_id;

        $update = DB::table('centers')->where('id','=',$id)
        ->update([
            'name'=> $name,
            'address' => $address,
            'status' => $status
        ]);
        if($update){
            return '{
                "success":true,
                "message":"successful"
            }' ;
        } else {
            return '{
                "success":false,
                "message":"Failed"
            }';
        }
    }

    public function submitEncounter(Request $request)
    {
       
        $dt = Carbon::now();
        $cDate = $dt->toFormattedDateString();
        $cTime = $dt->format('h:i:s A');
        $staffId= Auth()->user()->id;

        $request->merge(['created_time' => $cTime]);
        $request->merge(['created_at' => $cDate]);
        $request->merge(['created_by' => $staffId]);

        $encounter= Encounter::insert($request->all());
       
        if($encounter){
            return '{
                "success":true,
                "message":"successful"
            }' ;
        } else {
              return '{
                "success":false,
                "message":"Failed"
            }';
        }
    }

    public function submitPreamble(Request $request)
    {
        // return $request->all();
        $staffId= Auth()->user()->id;
        $docProcess=DB::table('encounter_tb')->where('id', $request->value2)->where('appointment_id', $request->value3)->update(    
           $request->value1
        );
        if($docProcess){
            return '{
                "success":true,
                "message":"successful"
            }' ;
        } else {
            return '{
                "success":false,
                "message":"Failed"
            }';
        }
    } 

    public function suspendCenter(Request $request)
    {
        $id=$request[0];

    $deletec=DB::table('centers')->where('id', $id)->update([    
        'status' => "deleted"
    ]);
    if($deletec){
        return '{
            "success":true,
            "message":"successful"
        }' ;
    } else {
        return '{
            "success":false,
            "message":"Failed"
        }';
    }
    
    }

    public function deleteDept(Request $request)
    {
        $id=$request[0];

    $deletec=DB::table('departments')->where('id', $id)->delete();
    if($deletec){
        return '{
            "success":true,
            "message":"successful"
        }' ;
    } else {
        return '{
            "success":false,
            "message":"Failed"
        }';
    }
    
    }

// Unit
    public function addUnit(Request $request)
    {
        $dept= Item_units::create($request-> all());
       
        if($dept){
            return '{
                "success":true,
                "message":"successful"
            }' ;
        } else {
              return '{
                "success":false,
                "message":"Failed"
            }';
        }
    }

    public function updateUnit(Request $request)
    {
        $id=$request->id;
        $name= $request->name;
        $box= $request->box_size;
        $value= $request->value;

        $update = DB::table('item_units')->where('item_units.id','=',$id)
        ->update([
            'name'=> $name,
            'box_size' => $box,
            'value' => $value
        ]);
        if($update){
            return '{
                "success":true,
                "message":"successful"
            }' ;
        } else {
            return '{
                "success":false,
                "message":"Failed"
            }';
        }
    }

    public function deleteUnit(Request $request)
    {
        $id=$request[0];

        $deletec=DB::table('item_units')->where('id', $id)->delete();
        if($deletec){
            return '{
                "success":true,
                "message":"successful"
            }' ;
        } else {
            return '{
                "success":false,
                "message":"Failed"
            }';
        }
    
    }

    // Type
    public function addType(Request $request)
    {
        $type= Item_types::create($request-> all());
       
        if($type){
            return '{
                "success":true,
                "message":"successful"
            }' ;
        } else {
              return '{
                "success":false,
                "message":"Failed"
            }';
        }
    }

    // Setting
    public function addItemType(Request $request)
    {
        $staffId= Auth()->user()->id;
        $request->merge(['user_id' => $staffId]);

        $type= Duration::create($request-> all());
       
        if($type){
            return '{
                "success":true,
                "message":"successful"
            }' ;
        } else {
              return '{
                "success":false,
                "message":"Failed"
            }';
        }
    }

    public function addInstruction(Request $request)
    {
        $staffId= Auth()->user()->id;
        $request->merge(['user_id' => $staffId]);

        $type= Daily_supply::create($request-> all());
       
        if($type){
            return '{
                "success":true,
                "message":"successful"
            }' ;
        } else {
              return '{
                "success":false,
                "message":"Failed"
            }';
        }
    }

    public function updateType(Request $request)
    {
        $id=$request->data['id'];
        $name= $request->data['name'];    
        $file=$request->image;
        if(empty($file)){
            $update = DB::table('item_types')->where('item_types.id','=',$id)
            ->update([
                'type_name'=> $name,
            ]);
        }
        elseif(!empty($file)){
            
            $filename=time().'.' . explode('/', explode(':', substr($file, 0, strpos($file,';')))[1])[1];
            Image::make($file)->resize(300, 300)->save(public_path('/upload/uploads/'.$filename));           
            
            $update = DB::table('item_types')->where('item_types.id','=',$id)
            ->update([
                'type_name'=> $name,
                'image' => $filename,
            ]);
        }
        if($update){
            return '{
                "success":true,
                "message":"successful"
            }' ;
        } else {
            return '{
                "success":false,
                "message":"Failed"
            }';
        }
    }

    public function deleteType(Request $request)
    {
        $id=$request[0];

        $deletec=DB::table('item_types')->where('id', $id)->delete();
        if($deletec){
            return '{
                "success":true,
                "message":"successful"
            }' ;
        } else {
            return '{
                "success":false,
                "message":"Failed"
            }';
        }
      
    }  

    public function submitAppointmentUser(Request $request)
    {
        $user_id = Auth()->user()->id;
        $request ->merge(['created_by'=>$user_id]);
        $request ->merge(['updated_by'=>$user_id]);
        $added= Doctor_encounter::create($request-> all());    
        if($added){
            return '{
                "success":true,
                "message":"successful"
            }' ;
        } else {
              return '{
                "success":false,
                "message":"Failed"
            }';
        }
    }

    public function Addposition(Request $request)
    {
        $user_id = Auth()->user()->id;
        $request ->merge(['created_by'=>$user_id]);
        $request ->merge(['updated_by'=>$user_id]);
        $position= Positions::create($request-> all());
        return $position->id;
        if($dept){
            return '{
                "success":true,
                "message":"successful"
            }' ;
        } else {
              return '{
                "success":false,
                "message":"Failed"
            }';
        }
    }
    public function AddpositionModules(Request $request)
    {
        $user_id = Auth()->user()->id;
        $position_id = $request->id;
        $position_modules = $request->modules;
        foreach ($position_modules as $module) {
         $update = DB::table('possition_module')->insert([
                 'position_id' =>$position_id,
                 'component_id' => $module,
                 'created_by'   =>  $user_id,
                 'updated_by'   =>  $user_id
            ]);   
        }
        if($update){
            return '{
                "success":true,
                "message":"successful"
            }' ;
        } else {
              return '{
                "success":false,
                "message":"Failed"
            }';
        }
    }
    
    public function updatePos(Request $request)
    {
        // return $request->all();
        $user_id = Auth()->user()->id;
        $id = $request->id;
        $name = $request->position_name;
        $describ = $request->description;
        $status = $request->status;
        $update = DB::table('positions')->where('id','=',$id)
        ->update([
            'position_name'=> $name,
            'description' => $describ,
            'status' => $status
        ]);
        if($update){
            return '{
                "success":true,
                "message":"successful"
            }' ;
        } else {
            return '{
                "success":false,
                "message":"Failed"
            }';
        }
    }

    public function permtes(Request $request)
    {
        $user_id = Auth()->user()->id;
        $request ->merge(['created_by'=>$user_id]);
        $request ->merge(['updated_by'=>$user_id]);
        $positioned = DB::table('possition_module')->where('position_id',$request->id)->where('component_id',$request->component_id)->select('status')->get();
        if ($positioned->count()>0) {
            if ($positioned[0]->status =='permite') {
                DB::table('possition_module')->where('position_id',$request->id)->where('component_id',$request->component_id)->update(['status' => 'unpermite','updated_by'=>$user_id]);
            } else {
                DB::table('possition_module')->where('position_id',$request->id)->where('component_id',$request->component_id)->update(['status' => 'permite','updated_by'=>$user_id]);
                
            }
            
        } else {
            DB::table('possition_module')->insert([
                'position_id' =>$request->id,
                'component_id' => $request->component_id,
                'created_by'   =>  $user_id,
                'updated_by'   =>  $user_id
           ]);  
        }
    }

    public function addHmo(Request $request)
    {    
        $dt = Carbon::now();
        $cDate = $dt->toFormattedDateString();
        $cTime = $dt->format('h:i:s A');
        $user_id = Auth()->user()->id;
        $position_id = $request->id;
        $price_list = $request->price_list_column;
        $request->merge(['created_by' => $user_id]);
        $request->merge(['updated_by' => $user_id]);
        $request->merge(['c_date' => $cDate]);
        $request->merge(['c_time' => $cTime]);
        $hmo = Hmo::create($request-> all());
        if($hmo){
            return '{
                "success":true,
                "message":"successful"
            }' ;
        } else {
              return '{
                "success":false,
                "message":"Failed"
            }';
        }
    }

    public function editingHmo(Request $request)
    {
        $id=$request->id;
        $name= $request->name;
        $address= $request->address;
        $contact= $request->contact_number;
        $details= $request->details;
        $status= $request->status; 
        $update = DB::table('scheme_hmo')->where('id','=',$request->id)
        ->update([
            'name'=> $name,
            'address' => $address,
            'contact_number' => $contact,
            'details' => $details,
            'status' => $status
        ]);
        if($update){
            return '{
                "success":true,
                "message":"successful"
            }' ;
        } else {
            return '{
                "success":false,
                "message":"Failed"
            }';
        }
    }
    public function editingondeleteHmoHmo($id)
    {
        $update = DB::table('scheme_hmo')->where('id','=',$id)
        ->update([
            'status' =>"suspend"
        ]);
        if($update){
            return '{
                "success":true,
                "message":"successful"
            }' ;
        } else {
            return '{
                "success":false,
                "message":"Failed"
            }';
        }
    }

    // Manufacturer
    public function addManufacturer(Request $request)
    {
        $type= Manufacturer_details::create($request-> all());
       
        if($type){
            return '{
                "success":true,
                "message":"successful"
            }' ;
        } else {
              return '{
                "success":false,
                "message":"Failed"
            }';
        }
    }

    public function updateManufacturer(Request $request)
    {
        $id=$request->id;
        $name= $request->name;
        $address= $request->address;
        $contact= $request->contact_number;
        $details= $request->details;
        $status= $request->status; 
        $update = DB::table('manufacturer_details')->where('manufacturer_details.id','=',$id)
        ->update([
            'name'=> $name,
            'address' => $address,
            'contact_number' => $contact,
            'details' => $details,
            'status' => $status
        ]);
        if($update){
            return '{
                "success":true,
                "message":"successful"
            }' ;
        } else {
            return '{
                "success":false,
                "message":"Failed"
            }';
        }
    }



    public function updateDuration(Request $request)
    {
        $id=$request->id;
        $duration= $request->duration_name;
        $type= $request->type_id;
        $value= $request->value;
        $userId= Auth()->user()->id;;
        $status= $request->status; 
        $update = DB::table('durations')->where('durations.id','=',$id)
        ->update([
            'duration_name'=> $duration,
            'type_id' => $type,
            'value' => $value,
            'user_id' => $userId,
            'status' => $status
        ]);
        if($update){
            return '{
                "success":true,
                "message":"successful"
            }' ;
        } else {
            return '{
                "success":false,
                "message":"Failed"
            }';
        }
    }

    public function updateInstruction(Request $request)
    {
        $id=$request->id;
        $name= $request->name;
        $type= $request->type_id;
        $value= $request->value;
        $userId= Auth()->user()->id;;
        $status= $request->status; 
        $update = DB::table('daily_supply')->where('daily_supply.id','=',$id)
        ->update([
            'name'=> $name,
            'type_id' => $type,
            'value' => $value,
            'user_id' => $userId,
            'status' => $status
        ]);
        if($update){
            return '{
                "success":true,
                "message":"successful"
            }' ;
        } else {
            return '{
                "success":false,
                "message":"Failed"
            }';
        }
    }

    public function deleteDuration(Request $request)
    {
        $id=$request[0];

        $deletec=DB::table('durations')->where('id', $id)->delete();
        if($deletec){
            return '{
                "success":true,
                "message":"successful"
            }' ;
        } else {
            return '{
                "success":false,
                "message":"Failed"
            }';
        }
    
    }


    public function deleteInstruction(Request $request)
    {
        $id=$request[0];

        $deletec=DB::table('daily_supply')->where('id', $id)->delete();
        if($deletec){
            return '{
                "success":true,
                "message":"successful"
            }' ;
        } else {
            return '{
                "success":false,
                "message":"Failed"
            }';
        }
    
    }

    public function deleteManufacturer(Request $request)
    {
        $id=$request[0];

        $deletec=DB::table('manufacturer_details')->where('id', $id)->delete();
        if($deletec){
            return '{
                "success":true,
                "message":"successful"
            }' ;
        } else {
            return '{
                "success":false,
                "message":"Failed"
            }';
        }
    
    }

    // Categories
    public function addCategories(Request $request)
    {
        $type= Item_categories::create($request-> all());
       
        if($type){
            return '{
                "success":true,
                "message":"successful"
            }' ;
        } else {
              return '{
                "success":false,
                "message":"Failed"
            }';
        }
    }

    public function updateCategories(Request $request)
    {
        $id=$request->id;
        $name= $request->name;       
        $status= $request->status; 
        $update = DB::table('item_categories')->where('item_categories.id','=',$id)
        ->update([
            'cat_name'=> $name,            
            'status' => $status
        ]);
        if($update){
            return '{
                "success":true,
                "message":"successful"
            }' ;
        } else {
            return '{
                "success":false,
                "message":"Failed"
            }';
        }
    }

    public function deleteCategories(Request $request)
    {
        $id=$request[0];

    $deletec=DB::table('item_categories')->where('id', $id)->delete();
    if($deletec){
        return '{
            "success":true,
            "message":"successful"
        }' ;
    } else {
        return '{
            "success":false,
            "message":"Failed"
        }';
    }
    
    }


    // Shelve
    public function addShelve(Request $request)
    {
        $shelve= Shelves::create($request-> all());
       
        if($shelve){
            return '{
                "success":true,
                "message":"successful"
            }' ;
        } else {
              return '{
                "success":false,
                "message":"Failed"
            }';
        }
    }

    public function updateShelve(Request $request)
    {
        $id=$request->id;
        $name= $request->name;
        $point= $request->point;
        $branch_id= $request->branch_id;
        $status= $request->status;

        $update = DB::table('shelves')->where('shelves.id','=',$id)
        ->update([
            'name'=> $name,
            'point' => $point,
            'branch_id' => $branch_id,
            'status' => $status
        ]);
        if($update){
            return '{
                "success":true,
                "message":"successful"
            }' ;
        } else {
            return '{
                "success":false,
                "message":"Failed"
            }';
        }
    }

    public function deleteShelve(Request $request)
    {
        $id=$request[0];

        $delete=DB::table('shelves')->where('id', $id)->delete();
        if($delete){
            return '{
                "success":true,
                "message":"successful"
            }' ;
        } else {
            return '{
                "success":false,
                "message":"Failed"
            }';
        }
        
    }

    // Item Details
    public function addItemDetails(Request $request)
    {
        // return $request;       
        $dt = Carbon::now();
        $cDate = $dt->toFormattedDateString();
        $cTime = $dt->format('h:i:s A');

        $branch = DB::table("branches")->get();   
        $dt = Carbon::now();
        $item_date = $dt->toFormattedDateString();
        $item_time = $dt->format('h:i:s A');
        $request->merge(['item_date' => $item_date]);
        $request->merge(['item_time' => $item_time]);
        $request->merge(['item_shelf_id' => $request->shelve_id]);
        $staffId= Auth()->user()->id;
        $request->merge(['staff_id' => $staffId]);

        if($request->image == null){
            $getImage = Item_types::select('image')     
            ->where('id','=',$request->item_type_id)          
            ->get();
            $request->merge(['item_img' => $getImage[0]->image]);   

        }
        
        if ($request->image != null){
            $file=$request->image;
            $filename=time().'.' . explode('/', explode(':', substr($file, 0, strpos($file,';')))[1])[1];
            Image::make($file)->resize(300, 300)->save(public_path('upload/uploads/'.$filename));
            $request->merge(['item_img' => $filename]);
        }

        $item= Item_details::create($request-> all());              
        foreach($branch as $row){
            $name = $row->br_name;
            $insert = DB::table($name)->insertGetId(
                [
                    'c_date' => $cDate,
                    'c_time' => $cTime,
                    'item_detail_id' => $item->id,
                ]
                );
        }
        if($item){
            return '{
                "success":true,
                "message":"successful"
            }' ;
        } else {
              return '{
                "success":false,
                "message":"Failed"
            }';
        }
    }

    public function updateItemDetails(Request $request)
    {
        
        $datas=$request->formdata;
        $id=$datas['id'];
        $generic_name=$datas['generic_name'];
        $selling_price=$datas['selling_price'];
        $purchasing_price= $datas['purchasing_price'];
        $manufacture_date = $datas['manufacture_date'];
        $expiring_date = $datas['expiring_date'];
        $markup_price=$datas['markup_price'];
        $currentfile=$datas['item_img'];
        $price2 = $datas['price_2'];
        $price3 = $datas['price_3'];
        // $status= $request->status;
        // $item_unit_id= $request->item_unit_id;
        // $item_category_id= $request->item_category_id;
        // $item_type_id= $request->item_type_id;
        // $manufacturer_id= $request->manufacturer_id;
        // $manufacture_date=$request->manufacture_date;
        // $expiring_date= $request ->expiring_date;
        // $tax_id= $request->tax_id;
        // $discount_id= $request->discount_id;
        // return $request->image;
        
        if ($request->image != $currentfile && !empty($request->image)){
            $file=$request->image;
            $filename=time().'.' . explode('/', explode(':', substr($file, 0, strpos($file,';')))[1])[1];
            Image::make($file)->resize(300, 300)->save(public_path('upload/uploads/'.$filename));
            // $update->item_img = $filename;
            // $update->update();
            DB::table('item_details')->where('item_details.id','=',$id)->update(['item_img' => $filename,]);
        }
      
        $update = DB::table('item_details')->where('item_details.id','=',$id)->update([
            'generic_name'=>  $generic_name,
            'selling_price' => $selling_price,
            'purchasing_price' => $purchasing_price,
            'manufacture_date' => $manufacture_date,
            'expiring_date' => $expiring_date,
            'markup_price' => $markup_price,
            'price_2' => $price2,
            'price_3' => $price3,
            // 'status' => $status,
            // 'item_unit_id' => $item_unit_id,
            // 'item_category_id' => $item_category_id,
            // 'item_type_id' => $item_type_id,
            // 'manufacturer_id' => $manufacturer_id,
            // 'manufacture_date' => $manufacture_date,
            // 'expiring_date' => $expiring_date,
            // // 'tax_id' => $tax_id,
            // 'discount_id' => $discount_id,
        ]);
        if($update){
            return '{
                "success":true,
                "message":"successful"
            }' ;
        } else {
            return '{
                "success":false,
                "message":"Failed"
            }';
        }
    }

    public function deleteItem(Request $request)
    {
        $id=$request[0];

        $delete1=DB::table('item_details')->where('id', $id)->delete();

        $branch = DB::table("branches")->get();   
        foreach($branch as $row){
            $name = $row->br_name;
            $delete=DB::table($name)->where('id', $id)->delete();
        }        
        if($delete){
            return '{
                "success":true,
                "message":"successful"
            }' ;
        } else {
            return '{
                "success":false,
                "message":"Failed"
            }';
        }
        
    }

  
    public function createBranch(Request $request)
    {
        // return $request;
        $creator = Auth()->user()->id;
        $req_name=$request->bran_name;
        $depts=$request->dept_id;
        $branch;
        if ($depts==1){
        $dt = Carbon::now();
        $item_date = $dt->toFormattedDateString();
        $item_time = $dt->format('h:i:s A');
        $table_name = 'branch_'.strtolower(trim(str_replace(' ', '', $req_name)));
        Schema::create($table_name, function (Blueprint $table) {
            $table->increments('id');
            $table->string('open_stock')->default(0);
            $table->string('sales')->default(0);
            $table->string('transfer')->default(0);
            $table->string('receive')->default(0);
            $table->string('total_remain')->default(0);
            $table->string('close_balance')->default(0);
            $table->string('variance')->default(0);
            $table->string('physical_balance')->default(0);
            $table->string('amount')->default(0);
            $table->string('balance')->default(0);
            $table->string('c_date')->nullable();
            $table->string('c_time')->nullable();
            $table->timestamps();
            $table->string('add_status')->nullable();
            $table->string('update_status')->nullable();
            $table->string('item_detail_id')->index();
            $table->string('staff_id')->index()->default(0);
        });
        $itemD = DB::table("item_details")->get(); 
        foreach($itemD as $rowID){
            $insert = DB::table($table_name)->insertGetId(
                [
                    'item_detail_id' => $rowID->id,
                    'c_date' => $item_date,
                    'c_time' => $item_time,
                ]
                );
        }
        $request->merge(['name' => $req_name]);

        $staffId= Auth()->user()->id;
        $request->merge(['staff_id' => $staffId]);

        $request->merge(['br_name' => $table_name]);
        $branch= Branches::create($request-> all());
    }
    else{
        $request->merge(['name' => $req_name]);
        $branch= Branches::create($request-> all());
    }
        if($branch){
            return '{
                "success":true,
                "message":"successful"
            }' ;
        } else {
              return '{
                "success":false,
                "message":"Failed"
            }';
        }
    }

    public function deleteBranch(Request $request)
    {
        $table_name=$request->name;
        Schema::dropIfExists($table_name);

        $id=$request[0];
        $delete=DB::table('branches')->where('id', $id)->delete();
        if($delete){
            return '{
                "success":true,
                "message":"successful"
            }' ;
        } else {
            return '{
                "success":false,
                "message":"Failed"
            }';
        }
    }
    
    public function suspendBranch(Request $request)
    {
        $id=$request[0];
        $suspend=DB::table('branches')->where('id', $id)
        ->update([
            'status' => 'suspend'
        ]);
        if($suspend){
            return '{
                "success":true,
                "message":"successful"
            }' ;
        } else {
            return '{
                "success":false,
                "message":"Failed"
            }';
        }
    }


    public function activateBranch(Request $request)
    {
        $id=$request[0];
        $suspend=DB::table('branches')->where('id', $id)
        ->update([
            'status' => 'active'
        ]);
        if($suspend){
            return '{
                "success":true,
                "message":"successful"
            }' ;
        } else {
            return '{
                "success":false,
                "message":"Failed"
            }';
        }
    }

    // Customers / Patients
    public function addCustomer(PatientRequest $request)
    {
        $patient_category = app(\App\Http\Controllers\DisplayController::class)->displayHospitalNum($request->cust_category_id);
        $request->merge(['card_number' => $patient_category]);
        // $dt = Carbon::now();
        // $request->date = $dt->toFormattedDateString();
        // $request->time = $dt->format('h:i:s A');
        $customer= Customers::create($request-> all());
       
        if($customer){
        //    $wallet = DB::table('wallets')->insert([
        //         'name'=>$customer->name,
        //         'user_id'=>$customer->id, 
        //     ]);
            return '{
                "success":true,
                "message":"successful"
            }' ;
        } else {
              return '{
                "success":false,
                "message":"Failed"
            }';
        }
    } 

    public function addEpsCustomer(EpsRequest $request)
    {
        $dt = Carbon::now();
        $request->date = $dt->toFormattedDateString();
        $time= $dt->format('h:i:s A');

        $cust_id = auth()->user()->id;
        $request->merge(["created_by" => $cust_id]);
        $request->merge(["updated_by" => $cust_id]);

        $request->merge(["created_at" => 0]);
        $request->merge(["updated_at" => $dt]);

        $epsPatient = DB::table('eps')->insert($request->all());

        if($epsPatient){
            return '{
                "success":true,
                "message":"successful"
            }' ;
        } else {
              return '{
                "success":false,
                "message":"Failed"
            }';
        }
    }


    public function changeCategory(Request $request)
    {
        $customer= Customers::find($request->cust_id);

        $customer->cust_category_id= $request->category_name;

        $customer->save();
       
        if($customer->save()){
            return '{
                "success":true,
                "message":"successful"
            }' ;
        } else {
              return '{
                "success":false,
                "message":"Failed"
            }';
        }
    }

    public function addCustCategories(Request $request)
    {
        $cust_id = auth()->user()->id;
        $request->merge(["created_by" => $cust_id]);
        $request->merge(["update_by" => $cust_id]);
        $customerCategory = DB::table('customer_category')->insert($request->all());
       
        if($customerCategory){
            return '{
                "success":true,
                "message":"successful"
            }' ;
        } else {
              return '{
                "success":false,
                "message":"Failed"
            }';
        }
    }

    public function updateCustCategories(Request $request)
    {   
        $cust_id = auth()->user()->id;
        $name = $request->category_name;
        $desc = $request->description;
        $id = $request->id;   
        $update = DB::table('customer_category')->where('id','=',$id)
            ->update([
                'category_name'=> $name,
                'description'=> $desc,
                'update_by' => $cust_id,
            ]);
        if($update){
            return '{
                "success":true,
                "message":"successful"
            }' ;
        } else {
            return '{
                "success":false,
                "message":"Failed"
            }';
        }
    }

    public function deleteCustCategories(Request $request)
    {
        $id=$request[0];

        $deletec=DB::table('customer_category')->where('id', $id)->delete();
        if($deletec){
            return '{
                "success":true,
                "message":"successful"
            }' ;
        } else {
            return '{
                "success":false,
                "message":"Failed"
            }';
        }
    
    }
    
    public function updateCustomer(Request $request)
    {
        
        $id=$request->formdata['id'];
        $user=Customers::find($id);
        $currentfile= $user->patient_image;
        $datas=$request->formdata;
         if ($request->image != $currentfile){
             $file=$request->image;
             $filename=time().'.' . explode('/', explode(':', substr($file, 0, strpos($file,';')))[1])[1];
             Image::make($file)->resize(300, 300)->save(public_path('upload/uploads/'.$filename));
             $user->patient_image = $filename;
         }
        
         $user->name = $datas['name'];
         $user->othername = $datas['othername'];
         $user->card_number = $datas['card_number'];
         $user->email =  $datas['email'];
         $user->city =  $datas['city'];
         $user->address =  $datas['address'];
         $user->mobile_number =  $datas['mobile_number'];
        //  $user->gender =  $datas['gender'];
        //  $user->genotype =  $datas['genotype'];
        //  $user->blood_group =  $datas['blood_group'];
        $user->cust_category_id = $datas['cust_category_id'];
         $user->state =  $datas['state'];
         $user->d_o_b =  $datas['d_o_b'];
         $user->country=$datas['country'];
         $user->religion = $datas['religion'];
         $user->age = $datas['age'];
         $user->occupation = $datas['occupation'];
         $user->type = $datas['type'];
         $user->marital_status = $datas['marital_status'];
         $user->next_of_kin_name = $datas['next_of_kin_name'];
         $user->kin_relationship = $datas['kin_relationship'];
         $user->next_of_kin_mobile = $datas['next_of_kin_mobile'];
         $user->next_of_kin_address = $datas['next_of_kin_address'];
         $user->referral_name = $datas['referral_name'];
         $user->referral_address = $datas['referral_address'];
         $user->referral_mobile = $datas['referral_mobile'];
        //  return $user;
         $user->save();
         // $user->update($request->all());
         if($user){
             return '{
                 "success":true,
                 "message":"successful"
             }' ;
         } else {
             return '{
                 "success":false,
                 "message":"Failed"
             }';
         }
    }

    public function updateCustomer2(Request $request)
    {
        // return $request->all();

        $id=$request->formdata['id'];
        $user=Customers::find($id);
        $datas=$request->formdata;
        
         $user->scheme_id = $datas['scheme_id'];
         $user->n_h_i_s = $datas['n_h_i_s'];
         $user->hmo_no = $datas['hmo_no'];
         $user->cust_category_id =  $datas['cust_category_id'];
         $user->updated_by =  auth()->user()->id;
       
         $user->save();
         // $user->update($request->all());
         if($user){
             return '{
                 "success":true,
                 "message":"successful"
             }' ;
         } else {
             return '{
                 "success":false,
                 "message":"Failed"
             }';
         }
    }

  
    public function deleteCustomer(Request $request)
    {
        $id=$request[0];

        $deletec=DB::table('customers')->where('id', $id)->delete();
        if($deletec){
            return '{
                "success":true,
                "message":"successful"
            }' ;
        } else {
            return '{
                "success":false,
                "message":"Failed"
            }';
        }
    
    }

    public function searchPatient(Request $request)
    {
        $dt = Carbon::now();
        $cDate = $dt->toFormattedDateString();

        $value=$request->customer;
        $action=$request->action;
        $category = $request->category;
        if($action == 'mobile_number'){
            $value = substr($value, 1);
        }
        if($action == 'name'){
            $value = strtoupper($value);

            $search=DB::table('customers')
                ->join('customer_category','customers.cust_category_id','=','customer_category.id')
                ->join('scheme','customers.scheme_id','=','scheme.id')
                ->join('scheme_hmo','customers.hmo_no','=','scheme_hmo.id')
                ->where('customers.name', 'LIKE', "%{$value}%")
                ->orWhere('customers.othername', 'LIKE', "%{$value}%")
                ->select('customers.*','customer_category.category_name as cate_name', 'scheme.scheme_name','scheme_hmo.scheme_id','scheme_hmo.hmo_no','scheme_hmo.hmo_name','scheme_hmo.hmo_address','scheme_hmo.hmo_contact','scheme_hmo.discount_1','scheme_hmo.discount_2','scheme_hmo.discount_3')
                ->limit(1000)
                ->get();
        } else {
            $search=DB::table('customers')
                ->join('customer_category','customers.cust_category_id','=','customer_category.id')
                ->join('scheme','customers.scheme_id','=','scheme.id')
                ->join('scheme_hmo','customers.hmo_no','=','scheme_hmo.id')
                ->where('customers.'.$action, $value)
                ->select('customers.*','customer_category.category_name as cate_name', 'scheme.scheme_name','scheme_hmo.scheme_id','scheme_hmo.hmo_no','scheme_hmo.hmo_name','scheme_hmo.hmo_address','scheme_hmo.hmo_contact','scheme_hmo.discount_1','scheme_hmo.discount_2','scheme_hmo.discount_3')
                ->get();
        }
        if (count($search) == 0) {
            return response()->json([
                'count'=> count($search),
                'message' => "successfully", 
                'search'=> $search, 
                'show'=>"empty"
            ]);
        }
        else if (count($search) > 0){
            foreach($search as $row){
                    return response()->json([
                        'count'=> count($search),
                        'message' => "successfully", 
                        'search'=> $search, 
                        'show'=>"show",
                        'category' => $category,
                        'cate'=>DB::table('customer_category')->get(),
                        "app" => DB::table('appointments')->orderBy('id')->join('branches','appointments.clinic_id','=','branches.id')
                        ->join('customers','appointments.customer_id','=','customers.id')
                        ->select('appointments.*','branches.name as dept_name', 'customers.name as pat_name', 'customers.othername', 'customers.patient_image', 'customers.card_number')   
                        ->where('appointments.customer_id','=',$search[0]->id)->get(),

                        "count1" => DB::table('appointments')->orderBy('id')->select('appointments.*')   
                        ->where('appointments.customer_id','=',$row->id)->count(),
                        
                        "countBooked" => DB::table('appointments')->orderBy('id')->select('appointments.*')   
                        ->where('appointments.customer_id','=',$row->id)->where( 'appointments.a_date', '!=', $cDate)->where('appointments.status', '=', 'open')->count(),

                        "count3" => DB::table('invoices')->orderBy('id')->join('vouchers','invoices.voucher_id','=','vouchers.id')
                        ->join('appointments','vouchers.appointment_id','=','appointments.id')
                        ->join('customers','appointments.customer_id','=','customers.id')
                        ->select('invoices.*')   
                        ->where('customers.id','=',$row->id)->sum('invoices.balance'),
                    ]);
            }
        }    
    }

    //Appointment
    // public function makeAppointment(Request $request)
    // {
    //     $id = $request->customer;
    //     $cus=Customers::where('mobile_number', '=', $id)->orWhere('card_number', '=', $id)->first();
    //     $cust_id=$cus->id;
    //     $dept_id= auth()->user()->dept_id;
    //     $bid= Auth()->user()->branch_id;
    //     // $dept_id = $request->form['dept_id'];
    //     $dt = Carbon::now();
    //     $date = $dt->toFormattedDateString();
    //     $time = $dt->format('h:i:s A');
    //     $checkAppointment= Appointments::orderBy('id')->select('appointments.id')->where([
    //         'appointments.customer_id' => $cust_id,
    //         'appointments.prescription' =>'open',
    //         'appointments.date' => $date
    //         ])->get();
    //     if (count($checkAppointment) == 0) {

    //         $appointment= Vouchers::create(
    //             [
    //                 'customer_id' => $cust_id, 
    //                 'staff_id' => $dept_id,           
    //                 'branch_id' => $bid
    //             ]);    
            
    //         $appointment= Appointments::create(
    //             [
    //                 'customer_id' => $cust_id,  
    //                 'appointment_type' => $request->appointment_type,  
    //                 'branch_id'=> $bid,
    //                 'voucher_id'=> $appointment->id,
    //                 'prescription' => 'open', 
    //                 'invoice' => 'open', 
    //                 'voucher' => 'open',
    //                 'treatment' => 'open', 
    //                 'status' => 'active',
    //                 'date' => $date,
    //                 'time' => $time,
    //                 'branch_id' => $bid
    //             ]);    
      
    //      if($appointment){
    //         return '{
    //             "success":true,
    //             "message":"successful"
    //         }' ;
    //     } else {
    //           return '{
    //             "success":false,
    //             "message":"Failed"
    //         }';
    //     }
        
    //     }else if(count($checkAppointment) > 0){

    //         return 'Already Loged';

    //     }
        
    // }

    // public function makeAppointment2(Request $request)
    // {       
    //     $cust_id=$request->aid;
    //     // $dept_id= auth()->user()->dept_id;
    //     $bid= Auth()->user()->branch_id;
    //     $dept_id = $request->form['dept_id'];
       
    //     $dt = Carbon::now();
    //     $date = $dt->toFormattedDateString();
    //     $time = $dt->format('h:i:s A');

    //     $checkAppointment= Appointments::orderBy('id')->select('appointments.id')->where('appointments.customer_id', $cust_id)->where('appointments.prescription','open')->get();
       

    //     if ( empty ( $checkAppointment[0] )) {

    //         $appointment= Vouchers::create(
    //             [
    //                 'customer_id' => $cust_id, 
    //                 'staff_id' => $dept_id,           
    //                 'branch_id' => $bid
    //             ]);    
            
          
    //         $appointment= Appointments::create(
    //             [
    //                 'customer_id' => $cust_id, 
    //                 'department_id' => $dept_id, 
    //                 'voucher_id'=> $appointment->id,
    //                 'prescription' => 'open', 
    //                 'invoice' => 'open', 
    //                 'voucher' => 'open',
    //                 'treatment' => 'open', 
    //                 'status' => 'active',
    //                 'date' => $date,
    //                 'time' => $time,
    //                 'branch_id' => $bid
    //             ]);   
    //          }
        
        //  $appointment= Appointments::create(
        //     [
        //         'customer_id' => $cust_id, 
        //         'department_id' => $dept_id, 
        //         'prescription' => 'open', 
        //         'invoice' => 'open', 
        //         'voucher' => 'open',
        //         'treatment' => 'open', 
        //         'status' => 'active',
        //         'date' => $date,
        //         'time' => $time,
        //         // 'branch_id' => $bid
        //     ]);    
  
    //  if($appointment){
    //     return '{
    //         "success":true,
    //         "message":"successful"
    //     }' ;
    // } else {
    //       return '{
    //         "success":false,
    //         "message":"Failed"
    //     }';
    // }
    
    // }

    public function deleteAppointment(Request $request)
    {
        $id=$request[0];

        $deletea=DB::table('appointments')->where('id', $id)->update([
            'status' => 'terminated'
        ]);
        if($deletea){
            return '{
                "success":true,
                "message":"successful"
            }' ;
        } else {
            return '{
                "success":false,
                "message":"Failed"
            }';
        }
    
    }
    // Prescription
    public function addPrescription(Request $request)
    {
        $dt = Carbon::now();
        $request->date = $dt->toFormattedDateString();
        $request->time = $dt->format('h:i:s A');
        $prescription= Doctor_prescriptions::create($request-> all());
       
        if($prescription){
            return '{
                "success":true,
                "message":"successful"
            }' ;
        } else {
              return '{
                "success":false,
                "message":"Failed"
            }';
        }
    }

    public function updatePrescription(Request $request)
    {
        $id=$request->p_id;       
        $quantity= $request->quantity;
        // $instuction= $request->instruction;   
        // $daysupply= $request->day_supply;
        // $days= $request->days;    
        // $status= $request->refill_status;
        $refill_amount= $request->refill_amount_quantity;
        $refill_status= $request->refill_status;
        $refill_quantity= $request->refill_quantity;
        $paid= $request->amount;

        $update = DB::table('doctor_prescriptions')->where('doctor_prescriptions.id','=',$id)
        ->update([        
            'quantity' => $quantity, 
            'refill_status' => $refill_status,
            'refill_input' => $refill_quantity,       
            'refill_amount' => $refill_amount,       
            'amount_paid' => $paid,             
        ]);
        if($update){
            return '{
                "success":true,
                "message":"successful"
            }' ;
        } else {
            return '{
                "success":false,
                "message":"Failed"
            }';
        }
    }

    public function deletePrescription($id)
    {

        $deletec=DB::table('doctor_prescriptions')->where('id', $id)->delete();
        if($deletec){
            return '{
                "success":true,
                "message":"successful"
            }' ;
        } else {
            return '{
                "success":false,
                "message":"Failed"
            }';
        }
    
    }

    // Invoices
    public function addInvoice(Request $request)
    {
        $dt = Carbon::now();
        $request->date = $dt->toFormattedDateString();
        $request->time = $dt->format('h:i:s A');
        $request->merge(["graph_date" => date("Y-m")]);
        $invoice= Invoices::create($request-> all());
       
        if($invoice){
            return '{
                "success":true,
                "message":"successful"
            }' ;
        } else {
              return '{
                "success":false,
                "message":"Failed"
            }';
        }
    }

    public function updateInvoice(Request $request)
    {
        $id=$request->id;
        $name= $request->name;
        $item_no= $request->no_of_item; 
        $amount_paid= $request->amount_paid;    
        $status= $request->status;
        $supply_quantity= $request->supply_quantity;
        $doctor= $request->doctor_id;
        $pharmacist= $request->pharmacist_id;
        $branch= $request->branch_id;

        $update = DB::table('invoices')->where('invoices.id','=',$id)
        ->update([
            'name' => $name,
            'no_of_item' => $item_no, 
            'amount_paid' => $amount_paid, 
            'status' => $status, 
            'supply_quantity' => $supply_quantity,
            'doctor_id' => $doctor, 
            'pharmacist_id' => $pharmacist, 
            'branch_id' => $branch
        ]);
        if($update){
            return '{
                "success":true,
                "message":"successful"
            }' ;
        } else {
            return '{
                "success":false,
                "message":"Failed"
            }';
        }
    }

    public function deleteInvoice(Request $request)
    {
        $id=$request[0];

        $deletec=DB::table('invoices')->where('id', $id)->delete();
        if($deletec){
            return '{
                "success":true,
                "message":"successful"
            }' ;
        } else {
            return '{
                "success":false,
                "message":"Failed"
            }';
        }
    
    }

    // Vouchers
    public function addVoucher(Request $request)
    {
        $dt = Carbon::now();
        $request->date = $dt->toFormattedDateString();
        $request->time = $dt->format('h:i:s A');
        $voucher= Vouchers::create($request-> all());
       
        if($voucher){
            return '{
                "success":true,
                "message":"successful"
            }' ;
        } else {
              return '{
                "success":false,
                "message":"Failed"
            }';
        }
    }

    public function updateVoucher(Request $request)
    {
        $id=$request->id;
        $item_no= $request->no_of_item; 
        $open_quantity= $request->open_quantity; 
        $supply_quantity= $request->supply_quantity;
        $amount_cost= $request->amount_cost;
        $refill_quantity= $request->refill_quantity;
        $refill_amount= $request->refill_amount;   
        $status= $request->status;
        $staff= $request->staff_id;
        $branch= $request->branch_id;

        $update = DB::table('vouchers')->where('vouchers.id','=',$id)
        ->update([
            'no_of_item' => $item_no, 
            'open_quantity' => $open_quantity, 
            'supply_quantity' => $supply_quantity,
            'amount_cost' => $amount_cost, 
            'refill_quantity' => $refill_quantity, 
            'refill_amount' => $refill_amount, 
            'status' => $status, 
            'staff_id' => $staff, 
            'branch_id' => $branch
        ]);
        if($update){
            return '{
                "success":true,
                "message":"successful"
            }' ;
        } else {
            return '{
                "success":false,
                "message":"Failed"
            }';
        }
    }

    public function deleteVoucher(Request $request)
    {
        $id=$request[0];

        $deletec=DB::table('vouchers')->where('id', $id)->delete();
        if($deletec){
            return '{
                "success":true,
                "message":"successful"
            }' ;
        } else {
            return '{
                "success":false,
                "message":"Failed"
            }';
        }
    
    }


    //Set Lab Depertment

    public function createLabDept(Request $request)
    {
        $dept= Lab_depts::create($request-> all());
       
        if($dept){
            return '{
                "success":true,
                "message":"successful"
            }' ;
        } else {
              return '{
                "success":false,
                "message":"Failed"
            }';
        }
    }

    public function deleteLabDept(Request $request)
    {
        $id=$request[0];

        $deletec=DB::table('lab_depts')->where('id', $id)->delete();
        if($deletec){
            return '{
                "success":true,
                "message":"successful"
            }' ;
        } else {
            return '{
                "success":false,
                "message":"Failed"
            }';
        }
    
    }

    public function updateLabDept(Request $request)
    {
        $id=$request->id;
        $name= $request->lab_name;
        $descrip= $request->description;
        $department_id= $request->department_id;
        $status= $request->status;

        $update = DB::table('lab_depts')->where('lab_depts.id','=',$id)
        ->update([
            'lab_name'=> $name,
            'description' => $descrip,
            'department_id' => $department_id,
            'status' => $status
        ]);
        if($update){
            return '{
                "success":true,
                "message":"successful"
            }' ;
        } else {
            return '{
                "success":false,
                "message":"Failed"
            }';
        }
    }

    //Set Lab Test Types

    public function createLabTestType(Request $request)
    {
        $dept= Lab_test_types::create($request-> all());
       
        if($dept){
            return '{
                "success":true,
                "message":"successful"
            }' ;
        } else {
              return '{
                "success":false,
                "message":"Failed"
            }';
        }
    }

    public function deleteLabTestType(Request $request)
    {
        $id=$request[0];

        $deletec=DB::table('lab_test_types')->where('id', $id)->delete();
        if($deletec){
            return '{
                "success":true,
                "message":"successful"
            }' ;
        } else {
            return '{
                "success":false,
                "message":"Failed"
            }';
        }
    
    }

    public function updateLabTestType(Request $request)
    {
        $id=$request->id;
        $name= $request->test_name;
        $descrip= $request->test_description;
        $lab_dept_id= $request->lab_dept_id;
        // $status= $request->status;

        $update = DB::table('lab_test_types')->where('lab_test_types.id','=',$id)
        ->update([
            'test_name'=> $name,
            'test_description' => $descrip,
            'lab_dept_id' => $lab_dept_id,
            // 'status' => $status
        ]);
        if($update){
            return '{
                "success":true,
                "message":"successful"
            }' ;
        } else {
            return '{
                "success":false,
                "message":"Failed"
            }';
        }
    }

     //add to stock 

    public function addToStock(Request $request)
    {
        $userId= Auth()->user()->id;

        $item = $request->item;
        $val = $request->quantity;

        $check = DB::table('purchases')->where('item_detail_id', '=', $item)->where('status', '=', 'saved')->get();
        
        if (empty($check[0])) {
            $bitem=DB::table('branch_main')
            ->where('item_detail_id','=', $item)
            ->get();
            $remain = $bitem[0]->total_remain;
            $newstock =  $bitem[0]->total_remain + $val;

            $dt = Carbon::now();
            $item_date = $dt->toFormattedDateString();
            $item_time = $dt->format('h:i:s A');
            $log = DB::table('purchases')->insert([
                'quantity' => $val,
                'item_detail_id' => $item,
                'p_date' => $item_date,
                'p_time' => $item_time,
                'instock'=>$remain,
                'newstock'=>$newstock,
                'staff_id'=>$userId,
                'branch_id'=>  Auth()->user()->branch_id

        ]);
            return '{
                "success":true,
                "message":"successful"
            }' ;
        } 
        else {
            return '{
                "success":false,
                "message":"Failed"
            }';
        }

    }

    //tranfer to stock 

    public function transferToStock(Request $request)
    {
        $userId= Auth()->user()->id;

        $item = $request->item2;
        $from = $request->from;
        $to = $request->to;
        $val = $request->quantity;

        $check = DB::table('transfers')->where('item_detail_id', '=', $item)->where('status', '=', 'open')->get();
        
        if (empty($check[0])) {
            
            $bitem=DB::table($from)
            ->where('item_detail_id','=', $item)
            ->get();

            $total_from = $bitem[0]->total_remain;            

           // to
            $trans=DB::table($to)
             ->where('item_detail_id','=', $item)
             ->get();
             $total_to = $trans[0]->total_remain; 
            $newStk= $total_to + $val;

             // transfer
        
                $dt = Carbon::now();
                $item_date = $dt->toFormattedDateString();
                $item_time = $dt->format('h:i:s A');
                $trans2=DB::table('transfers')->insert([
                    'quantity_from'=>$from,
                    'quantity_to'=>$to,
                    'remain_from'=>$total_from,
                    'remain_to'=>$total_to,
                    'total_quantity' => $val,
                    'item_detail_id' => $item,
                    't_date' => $item_date,
                    't_time' => $item_time,
                    'newstock'=>$newStk,
                    'staff_id'=>$userId
    
            ]);
        } 
        else {
            return '{
                "success":false,
                "message":"Failed"
            }';
        }

    
    }

    // Variance

    public function varianceStock(Request $request)
    {
        $userId= Auth()->user()->id;

        $item = $request->item3;
        $from = $request->from;
        $val = $request->quantity;
        $purpose = $request->purpose;
        $detail = $request->detail;

        $check = DB::table('variances')->where('item_detail_id', '=', $item)->where('status', '=', 'open')->get();
        
        if (empty($check[0])) {
            
            $bitem=DB::table($from)
            ->where('item_detail_id','=', $item)
            ->get();

            $total_from = $bitem[0]->total_remain;            
        
                $dt = Carbon::now();
                $item_date = $dt->toFormattedDateString();
                $item_time = $dt->format('h:i:s A');
                $trans2=DB::table('variances')->insert([
                    'branch_id'=>$from,                    
                    'instock'=>$total_from,
                    'quantity' => $val,
                    'newstock'=>$total_from - $val,
                    'item_detail_id' => $item,
                    'purpose'=>$purpose,
                    'detail'=>$detail,
                    'v_date' => $item_date,
                    'v_time' => $item_time,
                    'user_id'=>$userId
    
            ]);
        } 
        else {
            return '{
                "success":false,
                "message":"Failed"
            }';
        }

    
    }

    public function submitReturn(Request $request){
        return $request->all();
    }
    // Inventory

    public function saveAdd()
    {
        $dt = Carbon::now();
        $today = $dt->toFormattedDateString();
        $all_item= DB::table('purchases')->select('purchases.item_detail_id', 'purchases.quantity', 'purchases.p_date')->where('status', '=', 'saved')->get();        
              
        foreach($all_item as $row){
            
            $item = $row->item_detail_id;
            $val = $row->quantity;
            $p_date= $row->p_date;
            
            $bitem2=DB::table('branch_main')
            ->where('item_detail_id','=', $item)
            ->where('c_date','=', $p_date)
            ->get();
            $receive = $bitem2[0]->receive + $val;
            $balance2 = $bitem2[0]->transfer + $bitem2[0]->sales;
            $remain2 =  $bitem2[0]->open_stock + $receive - $balance2;
            $physical2 = $remain2 - $bitem2[0]->variance;
            $add=DB::table('branch_main')
             ->where('item_detail_id','=', $item)
             ->where('c_date','=', $p_date)
             ->update([
                'receive' => $receive,
                'balance' => $balance2,
                'total_remain' => $remain2,
                'physical_balance' => $physical2,
                'add_status' => 'added'
            ]);
            
             if($add){
                $saved1 = DB::table("purchases")
                        ->where('status', '=', 'saved')
                        ->update(['status' => 'added']);
             }    
        }
        return '{
            "success":true,
            "message":"successful"
        }' ;
    }

    public function saveTransfer()
    {
        $all_item= DB::table('transfers')->select('transfers.item_detail_id', 'transfers.total_quantity', 'transfers.quantity_from', 'transfers.quantity_to', 'transfers.t_date')->where('status', '=', 'open')->get();        
              
        foreach($all_item as $row){
            
            $item = $row->item_detail_id;
            $val = $row->total_quantity;
            $from = $row->quantity_from;
            $to = $row->quantity_to;
            $p_date= $row->t_date;            

            $bitem=DB::table($from)
            ->where('item_detail_id','=', $item)
            ->where('c_date','=', $p_date)
            ->get();
            $transfer = $bitem[0]->transfer + $val;
            $balance = $bitem[0]->sales + $transfer;
            $remain =  $bitem[0]->open_stock + $bitem[0]->receive - $balance;
            $physical = $remain - $bitem[0]->variance;
            $transf=DB::table($from)
             ->where('item_detail_id','=', $item)
             ->where('c_date','=', $p_date)
             ->update([
                'transfer' => $transfer,
                'balance' => $balance,
                'total_remain' => $remain,
                'physical_balance' => $physical,
                'add_status' => 'transfer'
            ]);

            $bitem2=DB::table($to)
            ->where('item_detail_id','=', $item)
            ->where('c_date','=', $p_date)
            ->get();
            $receive = $bitem2[0]->receive + $val;
            $balance2 = $bitem2[0]->balance;
            $remain2 =  $bitem2[0]->open_stock + $receive - $balance2;
            $physical2 = $remain2 - $bitem2[0]->variance;
            $add=DB::table($to)
             ->where('item_detail_id','=', $item)
             ->where('c_date','=', $p_date)
             ->update([
                'receive' => $receive,
                'total_remain' => $remain2,
                'physical_balance' => $physical2,
                'add_status' => 'added'
            ]);
             if($add){
                $saved1 = DB::table("transfers")
                        ->where('status', '=', 'open')
                        ->update(['status' => 'close']);
             }    
        }
        return '{
            "success":true,
            "message":"successful"
        }' ;
    }

    public function saveVariance()
    {
        $all_item= DB::table('variances')->select('variances.item_detail_id', 'variances.quantity', 'variances.branch_id', 'variances.v_date')->where('status', '=', 'open')->get();        
              
        foreach($all_item as $row){
            
            $item = $row->item_detail_id;
            $val = $row->quantity;
            $banch = $row->branch_id;
            $p_date= $row->v_date; 

            $bitem2=DB::table($banch)
            ->where('item_detail_id','=', $item)
            ->where('c_date','=', $p_date)
            ->get();
            $variance = $bitem2[0]->variance + $val;
            $remain2 =  $bitem2[0]->total_remain;
            $physical2 = $remain2 - $variance;
            $add=DB::table($banch)
             ->where('item_detail_id','=', $item)
             ->where('c_date','=', $p_date)
             ->update([
                'variance' => $variance,
                'physical_balance' => $physical2,
                'add_status' => 'variance'
            ]);
            
             if($add){
                $saved1 = DB::table("variances")
                        ->where('status', '=', 'open')
                        ->update(['status' => 'close']);
             }    
        }
        return '{
            "success":true,
            "message":"successful"
        }' ;
    }

    public function editAdd($id)
    {
        return DB::table('purchases')
                ->select('purchases.quantity', 'item_details.generic_name')
                ->join ('item_details','purchases.item_detail_id','=','item_details.id')
                ->where('purchases.id', '=', $id)
                ->get();
    }


    public function deleteAdd(Request $request)
    {
        $id = $request[0];
        $del = DB::table('purchases')->where('id', $id)->delete();

         if($del){
            return '{
                "success":true,
                "message":"successful"
            }' ;
        } else {
              return '{
                "success":false,
                "message":"Failed"
            }';
        }
    }

    public function updateAddItem(Request $request)
    {
        $dt = Carbon::now();
        $cDate = $dt->toFormattedDateString();

        $pid=$request->id;
        // $item= $request->addName;
        $aQty= $request->addQuantity;

        $itemId = DB::table('purchases')->select('purchases.item_detail_id')->where('id', $pid)->get();
        $item= $itemId[0]->item_detail_id;
        $select=DB::table('branch_main')->select('branch_main.total_remain')->where(['item_detail_id' => $item, 'branch_main.c_date' => $cDate])->get();
        $nstock = $select[0]->total_remain + $aQty;

        $add=DB::table('purchases')
         ->where('id','=', $pid)    
         ->update([
            'quantity' => $aQty,
            'newstock' => $nstock,
        ]);

        if($add){
            return '{
                "success":true,
                "message":"successful"
            }' ;
        } else {
              return '{
                "success":false,
                "message":"Failed"
            }';
        }
    }

    public function updatetransferItem(Request $request)
    {
        $dt = Carbon::now();
        $cDate = $dt->toFormattedDateString();

        $pid=$request->id;
        $aQty= $request->transQuantity;
        $brFrom= $request->transFrom;
        $brTo= $request->transToo;

        $itemId = DB::table('transfers')->select('transfers.item_detail_id')->where('id', $pid)->get();
        $item= $itemId[0]->item_detail_id;
        $select=DB::table($brTo)->select($brTo.'.total_remain')->where(['item_detail_id' => $item, $brTo.'.c_date' => $cDate])->get();
        $nstock = $select[0]->total_remain + $aQty;

        $add=DB::table('transfers')
         ->where('id','=', $pid)    
         ->update([
            'total_quantity' => $aQty,
            'newstock' => $nstock,
        ]);

        if($add){
            return '{
                "success":true,
                "message":"successful"
            }' ;
        } else {
              return '{
                "success":false,
                "message":"Failed"
            }';
        }
    }

    public function editTrans($id)
    {
       return DB::table('transfers')
              ->select('transfers.*', 'item_details.generic_name')
              ->join ('item_details','transfers.item_detail_id','=','item_details.id')
              ->where('transfers.id', $id)
              ->get();
    }

    public function deleteTrans(Request $request)
    {
        $id = $request[0];
        $del = DB::table('transfers')->where('id', $id)->delete();

         if($del){
            return '{
                "success":true,
                "message":"successful"
            }' ;
        } else {
              return '{
                "success":false,
                "message":"Failed"
            }';
        }
        
    }

    public function editVariance($id)
    {
       return DB::table('variances')
              ->select('variances.*', 'item_details.generic_name')
              ->join ('item_details','variances.item_detail_id','=','item_details.id')
              ->where('variances.id', $id)
              ->get();
    }

    public function deleteVariance(Request $request)
    {
        $id = $request[0];
        $del = DB::table('variances')->where('id', $id)->delete();

         if($del){
            return '{
                "success":true,
                "message":"successful"
            }' ;
        } else {
              return '{
                "success":false,
                "message":"Failed"
            }';
        }
        
    }

    public function updateVarianceItem(Request $request)
    {
        $dt = Carbon::now();
        $cDate = $dt->toFormattedDateString();

        $branchId= Auth()->user()->branch_id;
        $detail = $request->varDetails;
        $qty = $request->varQuantity;
        $vid = $request->id;

        $itemId = DB::table('variances')->select('variances.item_detail_id')->where('id', $vid)->get();
        $item= $itemId[0]->item_detail_id;

        $branch = DB::table("branches")->select('branches.br_name')->where('id', $branchId)->first(); 

        $vitem=DB::table($branch->br_name)
            ->where(['item_detail_id' => $item, $branch->br_name.'.c_date' => $cDate])
            ->get();

            $total_from = $vitem[0]->total_remain;            
        
            $vari=DB::table('variances')->where('id','=', $vid)   
            ->update([
                'quantity' => $qty,
                'newstock' => $total_from - $qty,
                'detail' => $detail
        ]);

        if($vari){
            return '{
                "success":true,
                "message":"successful"
            }' ;
        } else {
              return '{
                "success":false,
                "message":"Failed"
            }';
        }
    }
    // Pharmacy Prescription 

    public function pharmPriscription(Request $request)
    {

        // return $request->all();
        $dt = Carbon::now();
        $cDate = $dt->toFormattedDateString();
        $cTime = $dt->format('h:i:s A');

        $checkAppointment= Appointments::orderBy('id')->select('appointments.hmo_id')
                                                    ->where('appointments.id', $request->appointment_id)
                                                    ->first();         

        $hmoNo= Hmo::find($checkAppointment->hmo_id);

        // return $request->all();

        if ($request->care_type == 'primary') {
            $percentage= $hmoNo->discount_1;
        }
        if ($request->care_type == 'secondary') {
            $percentage= $hmoNo->discount_2;
        }
        if ($request->care_type == 'others') {
            $percentage= $hmoNo->discount_3;
        }       

        $total_amount = $percentage * $request->amount_paid / 100;
        $discount_amount = $request->amount_paid - $total_amount;

        
        $pharmacistId= Auth()->user()->id;
        $branchId= Auth()->user()->branch_id;

        $request->merge(["p_date" => $cDate]);
        $request->merge(["p_time" => $cTime]);
        $request->merge(["percentage" => $percentage]);
        $request->merge(["discount_amount" => $discount_amount]);
        $request->merge(["price_list" => $request->price_list]);
        
        //dispense
       
        $request->merge(["dispense" => '1']);
        $request->merge(["refill_status" => 'non-refillable']);
      
        $request->merge(["status" => 'save']);
        
        $request->merge(["pharmacist_id" => $pharmacistId]);
        $request->merge(["branch_id" => $branchId]);
        // $request->merge(["voucher_id" => $request->voucher_id]);

        $pharmP= Doctor_prescriptions::create($request-> all());
       
        if($pharmP){
            return '{
                "success":true,
                "message":"successful"
            }' ;
        } else {
              return '{
                "success":false,
                "message":"Failed"
            }';
        }
    }

    public function saveRefill(Request $request)
    {
        
        $id = $request->rId;
        $getPres = DB::table('doctor_prescriptions')->where('doctor_prescriptions.id', '=', $id)->first();
        
        $refill_input = $request->refil;       

        $updatePrescription = DB::table('doctor_prescriptions')
        ->where('doctor_prescriptions.id', '=', $id)
        ->update([            
            'refill_input' => $refill_input,
            'refill_voucher_status' => 'saved'
        ]);

        if($updatePrescription){

            checkRefill($id);

            return '{
                "success":true,
                "message":"successful"
            }' ;
        } else {
              return '{
                "success":false,
                "message":"Failed"
            }';
        }
    }

    public function checkRefill($id)
    {
       
        $get = DB::table('doctor_prescriptions')->where('doctor_prescriptions.voucher_id', '=', $id)->where('doctor_prescriptions.refill_voucher_status', '=', 'saved')->get();
    
        // $remain += $getPres->remain;
        // $amount_paid += $getPres->amount_paid;

        foreach($get as $getPres){
            $quantity = $getPres->refill_range * $getPres->refill_input;
            $refill = $getPres->refill - $getPres->refill_input;
            $remain = $getPres->remain - $quantity;
            $amount_paid = $getPres->amount * $quantity;

            $quantity += $getPres->quantity;

            if($refill == 0){
                $refill_status = 'non-refillable';
                $refill_voucher_status = 'checkout';
            } else if($refill > 0){
                $refill_status = 'refillable';
                $refill_voucher_status = 'checkout';
            }
    
            $updatePrescription = DB::table('doctor_prescriptions')
            ->where('doctor_prescriptions.voucher_id', '=', $id)
            ->where('doctor_prescriptions.refill_voucher_status', '=', 'saved')
            ->update([
                'quantity' => $quantity,
                'remain' => $remain,
                'refill' => $refill,
                'amount_paid' => $amount_paid,
                'refill_status' => $refill_status,
                'refill_voucher_status' => $refill_voucher_status
            ]);
    
        };

        if($updatePrescription){
            return '{
                "success":true,
                "message":"successful"
            }' ;
        } else {
              return '{
                "success":false,
                "message":"Failed"
            }';
        }
    }

    public function saveTovoucher($cid, Request $request)
    {
        $dt = Carbon::now();
        $cDate = $dt->toFormattedDateString();
        $cTime = $dt->format('h:i:s A');
        
        $pharmacistId= auth()->user()->id;
        $branchId= auth()->user()->branch_id;
        $quantity = 0;
        $amount = 0;
        $refill = 0;
        $remain = 0;
        $itemSelected = $request->prescription;
        $amount = $request->amount;

        // GET DISCOUT VALUE;
        
        $discoutValue = DB::table('appointments')
                        ->join('customers','appointments.customer_id','=','customers.id')
                        ->join('customer_category','customers.cust_category_id','=','customer_category.id')
                        ->where('appointments.id', '=', $cid)
                        ->select('customer_category.*')
                        ->get();
        $discout_value= $discoutValue[0]->pacentage_value;

        // Get Charges Value
        $chargeSum= Hospital_charges::orderBy('id')
                    ->join('departments','hospital_charges.dept_id','=','departments.id')
                    ->where('hospital_charges.dept_id', '=' ,'1')
                    ->where('hospital_charges.status', '=' ,'active')
                    ->select('hospital_charges.*')               
                    ->sum('selling_price');

        $customeId= Appointments::orderBy('id')->where('id','=',$cid)->select('appointments.customer_id')->get();
                    $cId= $customeId[0]->customer_id;                   
        $cust_cat=  Customers::join('customer_category', 'customers.cust_category_id', '=', 'customer_category.id')
                            ->select('customer_category.price_list_column')
                            ->where('customers.id','=',$cId)          
                            ->first();      
                       

        // FROM DOCTOR PRESCRIPTION        
        $v_qty = DB::table('doctor_prescriptions')->where('doctor_prescriptions.appointment_id', '=', $cid)->where('doctor_prescriptions.status', '=', 'save')->where('doctor_prescriptions.branch_id', '=', $branchId)->sum('quantity');
        $r_amount = DB::table('doctor_prescriptions')->where('doctor_prescriptions.appointment_id', '=', $cid)->where('doctor_prescriptions.status', '=', 'save')->where('doctor_prescriptions.branch_id', '=', $branchId)->sum('amount');
        $v_amount = DB::table('doctor_prescriptions')->where('doctor_prescriptions.appointment_id', '=', $cid)->where('doctor_prescriptions.status', '=', 'save')->where('doctor_prescriptions.branch_id', '=', $branchId)->sum('amount_paid');
        $refill_qty = DB::table('doctor_prescriptions')->where('doctor_prescriptions.appointment_id', '=', $cid)->where('doctor_prescriptions.status', '=', 'save')->where('doctor_prescriptions.branch_id', '=', $branchId)->sum('refill_input');
        $refill_amount = DB::table('doctor_prescriptions')->where('doctor_prescriptions.appointment_id', '=', $cid)->where('doctor_prescriptions.status', '=', 'save')->where('doctor_prescriptions.branch_id', '=', $branchId)->sum('refill_amount');
        $r_status = DB::table('doctor_prescriptions')->where('doctor_prescriptions.appointment_id', '=', $cid)->where('doctor_prescriptions.status', '=', 'save')->where('doctor_prescriptions.branch_id', '=', $branchId)->first();

        //GET DISCOUNT AMOUNT VALUE;
            $getDv= 100 - $discout_value;
            $discountAmount= (100 - $getDv) / 100 * $v_amount;

        // GET AMOUNT PAID;

        if ( $cust_cat->price_list_column == 'price_1') {
            $amountPaid= $discountAmount + $chargeSum;
        } else {
            $amountPaid= $discountAmount;
            $chargeSum= '0';
        } 
        

        // CREATE VOUCHER
        $create_voucher= Vouchers::insertGetId(
            [
                'quantity' => $v_qty,
                'amount' => $amount,
                'discount_id'=> $getDv,
                'discount_amount'=>  $discountAmount,
                'charges'=>  $chargeSum,
                'paid' => $amount,
                'balance' => 0,
                'refill_qty' => $refill_qty,
                'refill_amount' => $refill_amount,
                'price_list'=> $discoutValue[0]->price_list_column,
                'delivery_status' => 'delivered',
                'refill_status' => $r_status->refill_status,
                'appointment_id' =>  $cid,
                'staff_id' => $pharmacistId,
                'branch_id' => $branchId,
                'v_date' => $cDate,
                'v_time' => $cTime,
                'module_id' => '4'
            ]);    
        $get =  Doctor_prescriptions::orderBy('id') 
                        ->join ('item_details','doctor_prescriptions.item_id','=','item_details.id')
                        ->join ('item_categories','item_details.item_category_id','=','item_categories.id')
                        ->join ('manufacturer_details','item_details.manufacturer_id','=','manufacturer_details.id')
                        ->select('doctor_prescriptions.*', 'item_details.selling_price', 'item_details.generic_name', 'item_details.item_img', 'item_categories.cat_name', 'item_details.selling_price', 'manufacturer_details.name')
                        ->where('doctor_prescriptions.status', '=', 'save')
                        ->where('doctor_prescriptions.appointment_id', '=', $cid)
                        ->get();
       

        //  return $get;
        foreach($get as $row2){
            foreach($itemSelected as $itemSelect){
                if($row2->id == $itemSelect) {
                    $getId = $row2->id;
                    $update = DB::table('doctor_prescriptions')->where('doctor_prescriptions.id', '=', $getId)
                    ->update([
                        'status' => 'checkout',
                        'branch_id' => $branchId,
                        'voucher_id' => $create_voucher,
                    ]);
                }
            }
        }
        $updateAppointment = DB::table('appointments')
                                    ->where('appointments.id', '=', $cid)
                                    // ->where('appointments.pharm_id','=', $branchId)
                                    ->update([                                       
                                        'status' => 'checkout',
                                    ]);

        if ($updateAppointment) {
            return '{
                "success":true,
                "message":"successful"
            }' ;
        } else {
            return '{
                "success":false,
                "message":"failed"
            }' ;
        }
        
       
    }

    public function payService(Request $request) 
    {
        
         //GET DATE AND TIME
        $dt = Carbon::now();
        $cDate = $dt->toFormattedDateString();
        $cTime = $dt->format('h:i:s A');

        //GET PHARMACIST AND BRANCH ID THROUGH AUTH
        $staffID= auth()->user()->id;
        $branchId= auth()->user()->branch_id;

        $appointment_id = $request->appointment_id;
        $voucher_id = $request->voucher_id;
        $patient_id = $request->patient_id;  
        
        $amount = $request->subtotal;
        $amount_topay = $request->total;
        $paid = $request->total;
        $balance = $request->total - $request->total;
        $discount_amount = $request->discountamt;


        $charges = Service_charges::orderBy('id')
            ->join('departments', 'service_charges.dept_id', '=', 'departments.id')
            ->join('appointments', 'service_charges.appointment_id', '=', 'appointments.id')
            ->join('hospital_charges', 'service_charges.service_charge_id', '=', 'hospital_charges.id')
            ->join('scheme_hmo', 'appointments.hmo_id', '=', 'scheme_hmo.id')
            ->join('price_list_column', 'scheme_hmo.price_list_column', '=', 'price_list_column.id')
            ->select('service_charges.*', 'departments.name as department', 'appointments.insurance_status', 'hospital_charges.care_type', 'scheme_hmo.discount_1','scheme_hmo.discount_2','scheme_hmo.discount_3','scheme_hmo.price_list_column')
            ->where('service_charges.appointment_id', '=', $appointment_id)
            ->where('service_charges.voucher_id', '=', $voucher_id)
            ->get();
        $patient = DB::table('customers')->where('customers.id', '=', $patient_id)
            ->join ('customer_category', 'customers.cust_category_id', '=', 'customer_category.id')
            ->select('customers.*', 'customer_category.category_name', 'customer_category.pacentage_value', 'customer_category.price_list_column')
            ->first();

            foreach($charges as $row){
                if($row->discount_1 != 0 && $row->care_type == 'primary' && $row->insurance_status != 'enabled') {
                    $discount_percent = $row->discount_1;
                    $discount_amount = $row->amount * $row->discount_1 / 100;
                    $total_amount = $row->amount;
                }
                if($row->discount_2 != 0 && $row->care_type == 'secondary' && $row->insurance_status != 'enabled') {
                    $discount_percent = $row->discount_2;
                    $discount_amount = $row->amount * $row->discount_2 / 100;
                    $total_amount = $row->amount;
                }
                if($row->discount_3 != 0 && $row->care_type == 'others' && $row->insurance_status != 'enabled') {
                    $discount_percent = $row->discount_3;
                    $discount_amount = $row->amount * $row->discount_3 / 100;
                    $total_amount = $row->amount;
                }
                
                if($row->discount_1 != 0 && $row->care_type == 'primary' && $row->insurance_status == 'enabled') {
                    $discount_percent = $row->discount_1;
                    $discount_amount = $row->amount_2 * $row->discount_1 / 100;
                    $total_amount = $row->amount_2;
                }
                if($row->discount_2 != 0 && $row->care_type == 'secondary' && $row->insurance_status == 'enabled') {
                    $discount_percent = $row->discount_2;
                    $discount_amount = $row->amount_2 * $row->discount_2 / 100;
                    $total_amount = $row->amount_2;
                }
                if($row->discount_3 != 0 && $row->care_type == 'others' && $row->insurance_status == 'enabled') {
                    $discount_percent = $row->discount_3;
                    $discount_amount = $row->amount_2 * $row->discount_3 / 100;
                    $total_amount = $row->amount_2;
                }
                if($row->discount_1 == 0) {
                    $discount_percent = 0;
                    $total_amount = $row->total_amount;
                }
                $updateServiceCharges = DB::table('service_charges')->where('service_charges.id', '=', $row->id)
                    ->update([
                        'nhis_no' => $row->nhis_no,
                        'hmo_no' => $row->hmo_no,
                        'discount_percentage' => $discount_percent,
                        'discount_amount' => $discount_amount,
                        'total_amount' => $total_amount,
                        'status' => 'paid',
                    ]);
            }
            
            $insertInvoice = DB::table('invoices')->insertGetId([
                'amount' => $amount,
                'amount_topay' => $amount_topay,
                'paid' => $paid,
                'balance' => $balance,
                'discount_amount' => $discount_amount,
                'status' => 'paid',
                'delivery_status' => 'delivered',
                'i_date' => $cDate,
                'i_time' => $cTime,
                'graph_date' => date("Y-m"),
                'branch_id' => $branchId,
                'staff_id' => $staffID,
                'voucher_id' => $voucher_id,    
            ]);
            
             //UPDATE VOUCHER AND ADD THE INVOICE ID OF THE OBJECT TO THE RETURNED INVOICE ID ABOVE
             $updateVoucher = DB::table('vouchers')->where('id', $voucher_id)
             ->update([
                 'paid_status' => 'paid',
                 'invoice_id' => $insertInvoice,
                 'balance' => $balance,
                 'revenue_branch_id' => $branchId,
             ]);

            if($updateVoucher) {
                return '{
                    "success":true,
                    "message":"successful"
                }' ;
            } else {
                return '{
                    "success":false,
                    "message":"failed"
                }' ;
            }
    }

    public function saveToInvoice(Request $request)
    {
        $substituteItemFromCenter = true;
        $keepLogAfterSubstitution = true;

        $vid= $request->voucherID;
        $v_method= $request->method;
        $service_charge = $request->charge_amt;
        // $discount = $request->discount;
        $amount_topay = $request->topay;
        $paying = $request->topay;
        $tobalance = $request->bal;
        //GET DATE AND TIME
        $dt = Carbon::now();
        $cDate = $dt->toFormattedDateString();
        $cTime = $dt->format('h:i:s A');
        //GET PHARMACIST AND BRANCH ID THROUGH AUTH
        $pharmacistId= auth()->user()->id;
        $branchId= auth()->user()->branch_id;

        $getV = DB::table('vouchers')->select('vouchers.amount', 'vouchers.branch_id', 'vouchers.refill_status', 'vouchers.appointment_id')->where('id', '=', $vid)->first();
return $getV;
        $insertInvoice = DB::table('invoices')->insertGetId([
            'amount' => $getV->amount,
            'ampunt_topay' => $amount_topay,
            'paid' => $paying,
            'balance' => $tobalance,
            // 'discount' => $discount,
            'service_charge' => $service_charge,
            'other_charges' => 0,
            'status' => 'paid',
            'delivery_status' => 'delivered',
            'pharm_branch_id' => $getV->branch_id,
            'branch_id' => $branchId,
            'staff_id' => $pharmacistId,
            'voucher_id' => $vid,
            'i_date' => $cDate,
            'i_time' => $cTime,
            'graph_date' => date("Y-m"),
            'payment_method' => $v_method,
        ]); 

        return $request->all();

        //GET THE PAID PRESCRIPTIONS 
        $all_item =  Doctor_prescriptions::orderBy('id') ->where('doctor_prescriptions.status', '=', 'close')
        ->where('doctor_prescriptions.voucher_id', '=', $vid)
        ->where('doctor_prescriptions.status', '=', 'save')
        // ->where('doctor_prescriptions.branch_id', '=', $branchId)
        ->get();    

// <----------UPDATE THE BRANCH SLAES WITH THE QUANTITY OUTPUT START ---------->
        if($v_method == 'cash') {
            if($all_item && $substituteItemFromCenter){
                // Begin Transaction
                DB::beginTransaction();

                foreach($all_item as $row){
                    $item = $row->item_id;
                    $val = $row->quantity;
                    $p_date = $row->p_date;
                    $branchToRemoveItemId = $row->branch_id;
                    $amountToPaid = $row->amount_paid;
        
                    $getBranch = Branches::select('branches.br_name')->where('id', '=', $branchToRemoveItemId)->first();  
                    $branchName = $getBranch->br_name;
        
                    $bitem=DB::table($branchName)
                    ->select($branchName.'.*', 'item_details.generic_name')
                    ->join('item_details',$branchName.'.item_detail_id','=','item_details.id')
                    ->where('item_detail_id','=', $item)
                    ->where('c_date','=', $cDate)
                    ->first();
                    $sales = $bitem->sales + $val;
                    $balance = $bitem->transfer + $sales;
                    $remain =  $bitem->open_stock + $bitem->receive - $balance;
                    $physical = $remain - $bitem->variance;
                    $amount_v = $bitem->amount + $amountToPaid;
                    
                    $checkQuotation = $bitem->total_remain - $val;
                    if($checkQuotation < 0){
                        return '{
                            "success":false,
                            "message":'.$bitem->generic_name.'" Insufficient item quantity"
                        }' ;    
                    } else {
                        $updateItemInCenter=DB::table($branchName)
                            ->where([
                                'item_detail_id' => $item,
                                'c_date' => $cDate,
                                ])
                        
                            ->update([
                            'sales' => $sales,
                            'total_remain' => $remain,
                            'balance' => $balance,
                            'physical_balance' => $physical,
                            'amount'=> $amount_v,
                            ]);    
                        }
                    }
                // Commit Transaction
                DB::commit();
                $substituteItemFromCenter = false;
            } else if($substituteItemFromCenter) {
                // Rollback Transaction ON ANY ERROR
                DB::rollBack();
                return '{
                    "success":false,
                    "message":"An error ocuur please try again!"
                }' ;
            }
// <----------UPDTE THE BRANCH SALES WITH THE QUANTITY OUTPUT END ---------->


// <----------KEEP LOG OF TRANSACTION AND UPDATE NECCESARY TABLE THE TRNSCT INVOLVED IN START---------->
            if(!$substituteItemFromCenter && $keepLogAfterSubstitution){
                // Begin Transaction
                DB::beginTransaction();

                //GET VOUCHER DATA OF THE PATIENT AND GENERATE INVOICE FROM IT WITH THE PAYLOADS GET FROM REQUEST HEADER
                $getV = DB::table('vouchers')->select('vouchers.amount', 'vouchers.branch_id', 'vouchers.refill_status', 'vouchers.appointment_id')->where('id', '=', $vid)->first();
                $refill= $getV->refill_status;
                if($refill == 'refillable'){
                    $success = 'refill';
                } else {
                    $success = 'success';
                }
                if($v_method == 'cash') {
                    $insertInvoice = DB::table('invoices')->insertGetId([
                        'amount' => $getV->amount,
                        'ampunt_topay' => $amount_topay,
                        'paid' => $paying,
                        'balance' => $tobalance,
                        // 'discount' => $discount,
                        'service_charge' => $service_charge,
                        'other_charges' => 0,
                        'status' => 'paid',
                        'delivery_status' => 'delivered',
                        'pharm_branch_id' => $getV->branch_id,
                        'branch_id' => $branchId,
                        'staff_id' => $pharmacistId,
                        'voucher_id' => $vid,
                        'i_date' => $cDate,
                        'i_time' => $cTime,
                        'graph_date' => date("Y-m"),
                        'payment_method' => $v_method,
                    ]);   
                    
                    //UPDATE VOUCHER AND ADD THE INVOICE ID OF THE OBJECT TO THE RETURNED INVOICE ID ABOVE
                    $updateVoucher = DB::table('vouchers')->where('id', $vid)
                    ->update([
                        'paid_status' => 'paid',
                        'invoice_id' => $insertInvoice,
                        'balance' => $tobalance,
                        'revenue_branch_id' => $branchId,
                    ]);
                    
                    //GET PRESCRIPTIONS DATA AND UPDATE THEM 
                    $get =  Doctor_prescriptions::orderBy('id') ->where('doctor_prescriptions.status', '=', 'close')
                            ->where('doctor_prescriptions.voucher_id', '=', $vid)
                            // ->where('doctor_prescriptions.branch_id', '=', $branchId)
                            ->get();
                            foreach($get as $row){
                                $getId = $row->id;
                                $updateDoctorPrescription = DB::table('doctor_prescriptions')->where('doctor_prescriptions.id', '=', $getId)
                                ->update([
                                    'status' => 'paid',
                                ]);
                            }

                            //GET BACK THE PATIENT ID FROM THE PRESCRIPTIONS TABLE UPDATE THE APPOINTMENT TABLE OF THAT PATIENT AND CHANGE IT INVOICE TO PAID
                            $voucherPaid = DB::table('vouchers')->where('appointment_id', $getV->appointment_id)->where('paid_status', '=', 'open')->count();

                            if ($voucherPaid == 0) {
                                
                                $getPres = DB::table('doctor_prescriptions')->select('doctor_prescriptions.customer_id')->where('voucher_id', $vid)->first();
                                $updateAppointment = DB::table('appointments')->where('appointments.customer_id', $getPres->customer_id)
                                            ->where('appointments.id', '=', $getV->appointment_id)
                                            ->update([                                           
                                                'pharm_status' => 'full-payment',
                                            ]);
                            } else {
                                $getPres = DB::table('doctor_prescriptions')->select('doctor_prescriptions.customer_id')->where('voucher_id', $vid)->first();
                                $updateAppointment = DB::table('appointments')->where('appointments.customer_id', $getPres->customer_id)
                                        ->where('appointments.id', '=', $getV->appointment_id)
                                        ->update([                                           
                                            'pharm_status' => 'part-payment',
                                        ]);
                            }                       

                    
                    // Commit Transaction
                    DB::commit();
                    return '{
                        "success":true,
                        "message":"successful"
                    }' ;
                    $keepLogAfterSubstitution = false;
                } else if($keepLogAfterSubstitution) {
                    // Rollback Transaction
                    DB::rollBack();
                    return '{
                        "success":false,
                        "message":"An error ocuur please try again!"
                    }' ;
                }
            }
        }
         else {
            // Rollback Transaction
            DB::rollBack();
            return '{
                "success":false,
                "message":"This payment method is unavailable"
            }' ;
        }
//<----------KEEP LOG OF TRANSACTION AND UPDATE NECCESARY TABLE THE TRNSCT INVOLVED IN END---------->
    }

    public function closeAppointment($pid,$vid)
    {
        $branchId= auth()->user()->branch_id;
        $updateAppointment = DB::table('appointments')->where('appointments.customer_id', $pid)
                                    ->where('appointments.branch_id', $branchId)
                                    ->where('appointments.prescription', '=', 'success')
                                    ->where('appointments.invoice', '=', 'paid')
                                    ->where('appointments.voucher_id', '=', $vid)
                                    ->update([
                                        'status' => 'close',                                       
                                    ]); 
        if($updateAppointment){
             return '{
                "success":true,
                "message":"successful"
            }' ;
        }
    }

    public function terminateAppointment($vid)
    {
        // return $vid; 
        $branchId= auth()->user()->branch_id;
        $updateAppointment = DB::table('appointments')->where('appointments.customer_id', $pid)
                                    ->where('appointments.branch_id', $branchId)
                                    ->where('appointments.prescription', '=', 'Checked')
                                    ->where('appointments.invoice', '=', 'paid')
                                    ->update([
                                        'prescription' => 'close',
                                        'invoice' => 'close',
                                        'voucher' => 'close',
                                        'status' => 'terminated', 
                            ]);
        
        $updateVoucher = DB::table('vouchers')->where('id', $vid)
                            ->update([
                                'paid_status' => 'terminate',
                                'delivery_status' => 'terminate',
                            ]);

        //GET PRESCRIPTIONS DATA
        $get =  Doctor_prescriptions::orderBy('id') ->where('doctor_prescriptions.status', '=', 'paid')
                    ->where('doctor_prescriptions.voucher_id', '=', $vid)
                    ->where('doctor_prescriptions.branch_id', '=', $branchId)
                    ->get();

        //LOOP THROUGH THE PRESCRIPTIONS RETURNED AND UPDATE THEIR STATUS TO PAID
        foreach($get as $row){
            $getId = $row->id;
            $update = DB::table('doctor_prescriptions')->where('doctor_prescriptions.id', '=', $getId)
            ->update([
                'status' => 'close',
            ]);
        }
    }

    public function addProcessProperties(Request $request)
    {
        $created_by= Auth()->user()->id;
        $request->property = strtoupper( $request->property);
        $create_process = DB::table('process_tb')->insertGetId([
                'position_id' => $request->position_id,
                'property' => $request->property,
                'status' => $request->status,
                'created_by' => $created_by
            ]);
        if ($create_process) {
            return '{
                "success":true,
                "message":"successful"
            }' ;
        } else {
            return '{
                "success":false,
                "message":"failed"
            }' ;
        }
    }

    public function addProcessAttributes(Request $request)
    {
        $created_by= Auth()->user()->id;
        $request->attribute = strtoupper($request->attribute); 
        $create_process_attribute = DB::table('process_attribute_tb')->insertGetId(
            [
                'process_id' => $request->process_id,
                'attribute' => $request->attribute,
                'description' => $request->description,
                'status' => $request->status,
                'created_by' => $created_by
            ]); 
        if ($create_process_attribute) {
            return '{
                "success":true,
                "message":"successful"
            }' ;
        } else {
            return '{
                "success":false,
                "message":"failed"
            }' ;
        } 
    }

    public function addProcessValues(Request $request)
    {
        $created_by= Auth()->user()->id;
        $request->value = strtoupper($request->value); 
        $create_process_value = DB::table('process_value_tb')->insertGetId(
            [
                'process_attribute_id' => $request->process_attribute_id,
                'description' => $request->description,
                'value' => $request->value,
                'status' => $request->status,
                'created_by' => $created_by
            ]); 

        if ($create_process_value) {
            return '{
                "success":true,
                "message":"successful"
            }' ;
        } else {
            return '{
                "success":false,
                "message":"failed"
            }' ;
        } 
    }

    public function addValues(Request $request)
    {
        // return $request->form['options'];
        $created_by= Auth()->user()->id;
        if ($request->form['value_type'] == 'number') {
            $create_process_value = DB::table('process_value_tb')->Where('id',$request->id)->update(
                [
                    'suggestion' =>$request->form['sugestion'],
                    'value_type' =>$request->form['value_type'],
                    'normal_range' => $request->form['normal_range'],
                    'unit' => $request->form['unit'],
                    'value_option' => $request->form['value_option'],
                    'updated_by' => $created_by
                ]); 
        }
        if ($request->form['value_type'] == 'text' ||$request->form['value_type'] == 'textarea') {
            $create_process_value = DB::table('process_value_tb')->Where('id',$request->id)->update(
                [
                    'suggestion' =>$request->form['sugestion'],
                    'value_type' =>$request->form['value_type'],
                    'value_option' => $request->form['value_option'],
                    'updated_by' => $created_by
                ]); 
        }
           if ($request->form['value_type'] == 'radio' || $request->form['value_type'] == 'checkbox') {                                
               $create_process_value = DB::table('process_value_tb')->Where('id',$request->id)->update(
                   [
                       'value_type' =>$request->form['value_type'],
                       'value_options' => $request->form['value_options'],
                       'comment' => $request->form['comment'],
                       'options' => $request->form['options'],
                       'suggestion' =>$request->form['sugestion'],
                       'updated_by' => $created_by
                   ]); 
           }
           if ($request->form['value_type'] == 'table') {                                
            $create_process_value = DB::table('process_value_tb')->Where('id',$request->id)->update(
                [
                    'value_type' =>$request->form['value_type'],
                    'options' => $request->form['options'],
                    'suggestion' =>$request->form['sugestion'],
                    'updated_by' => $created_by
                ]); 
        }

        if ($create_process_value) {
            return '{
                "success":true,
                "message":"successful"
            }' ;
        } else {
            return '{
                "success":false,
                "message":"failed"  
            }' ;
        } 
    }

    public function submitProcessVals(Request $request)
    {
        $forms = $request->form;
        $form_data = array();
    //    return  $forms =$forms;
        foreach ($forms as  $form) {
        $ans = DB::table('process_value_tb')->where('value',$form[0])->select('unit')->get();
        if ($ans->count()>=1) {
            array_push($form,$ans[0]->unit);
            array_push($form_data,$form);
        }
        else{
            array_push($form_data,$form);
        }
        
        }
        $user_id = Auth()->user()->id;
        $user_possintion_id = Auth()->user()->position_id;
            DB::table('form_process')->insert([
                'user_id'   =>$user_id,
                'position_id'=>$user_possintion_id,
                'appointment_id' =>$request->appointment_id,
                'value_option'=> json_encode($form_data),
                'process_attribute_id' =>$request->process_attribute_id,
            ]);
            
       

    }
    public function onSubmitTable(Request $request)
    {
        $dt = Carbon::now();
        $cDate = $dt->toFormattedDateString();
        $cTime = $dt->format('h:i:s A');
        $user_id = Auth()->user()->id;
        $pos_id = Auth()->user()->position_id;
        $user_fname = Auth()->user()->firstname;
        $user_lname = Auth()->user()->lastname;
        $form_data = array();
        $form_data = $request->form;
        // foreach ($request->form as $value) {
        //     array_push($value,$cDate,$cTime);
        //     array_push($form_data,$value);
        // } 
        array_unshift( $form_data,['DATE',$cDate],['TIME',$cTime]);
        array_push( $form_data,['STAFF',$user_fname.' '.$user_lname,$user_id]);

        // return  $form_data;
         $ans = DB::table('form_process')->where('appointment_id',$request->appoint__id)
                                        ->where('process_value_id',$request->id)
                                        ->where('user_id',$user_id)
                                         ->select('value_option')->get();

  if ($ans->count()>0) {
    $as = json_decode($ans[0]->value_option);
        array_push($as,$form_data);
      $resp =   DB::table('form_process')->where('appointment_id',$request->appoint__id)
        ->where('process_value_id',$request->id)
        ->where('user_id',$user_id)->update([
            'value_option' =>  json_encode($as)
        ]);
}                         
 else{

    $resp =    DB::table('form_process')->insert([
            'user_id'   =>$user_id,
            'position_id'=>$pos_id,
            'appointment_id' =>$request->appoint__id,
            'value_option'=> json_encode(array($form_data)),
            'process_value_id' =>$request->id,
            'process_attribute_id' =>  $request->process_attribute_id
        ]);

 }
 if($resp){
    return '{
        "success":true,
        "message":"successful"
    }' ;
} else {
    return '{
        "success":false,
        "message":"Failed"
    }';
}      
       

    }

    public function updateProperty(Request $request)
    {
        $update = DB::table('process_tb')->where('id','=',$request->id)
        ->update([
            'property' => $request->propertyName
        ]);
        if($update){
            return '{
                "success":true,
                "message":"successful"
            }' ;
        } else {
            return '{
                "success":false,
                "message":"Failed"
            }';
        }
    } 
    
    
    public function updateAttribute(Request $request)
    {
        $update = DB::table('process_attribute_tb')->where('id','=',$request->id)
        ->update([
            'attribute' => $request->attributeName,
            'description' =>  $request->attributeDesc
        ]);
        if($update){
            return '{
                "success":true,
                "message":"successful"
            }' ;
        } else {
            return '{
                "success":false,
                "message":"Failed"
            }';
        }
    } 
    public function updateProcessValue(Request $request)
    {
        $update = DB::table('process_value_tb')->where('id','=',$request->id)
        ->update([
            'value' =>  $request->process_valueName,
            'description' => $request->process_valueDesc
        ]);
        if($update){
            return '{
                "success":true,
                "message":"successful"
            }' ;
        } else {
            return '{
                "success":false,
                "message":"Failed"
            }';
        }
    }

    public function deleteProp($id)
    {
        $deletec=DB::table('process_tb')->where('id', $id)->update([
            'status' => 'suspended'
        ]);
        if($deletec){
            return '{
                "success":true,
                "message":"successful"
            }' ;
        } else {
            return '{
                "success":false,
                "message":"Failed"
            }';
        }
    }

    public function deleteAttr($id)
    {

        $deletec=DB::table('process_attribute_tb')->where('id', $id)->update([
            'status' => 'suspended'
        ]);
        if($deletec){
            return '{
                "success":true,
                "message":"successful"
            }' ;
        } else {
            return '{
                "success":false,
                "message":"Failed"
            }';
        }
    
    }

    public function deletePropVal($id)
    {
        $deletec=DB::table('process_value_tb')->where('id', $id)->update([
            'status' => 'suspended'
        ]);
        if($deletec){
            return '{
                "success":true,
                "message":"successful"
            }' ;
        } else {
            return '{
                "success":false,
                "message":"Failed"
            }';
        }
    
    }

    public function CenterTypes(Request $request)
    {
        $created_by= Auth()->user()->id;
        $request->merge(["created_by" => $created_by]);
        $request->merge(["updated_by" => $created_by]);
        $center_type = DB::table('center_type')->insert($request->all());

        if ($center_type) {
            return '{
                "success":true,
                "message":"successful"
            }' ;
        } else {
            return '{
                "success":false,
                "message":"failed"
            }' ;
        } 
    }
    public function editCenterType(Request $request)
    {
        // return $request;
        $created_by= Auth()->user()->id;
        $center_type = DB::table('center_type')->where('id',$request->id)->update([
            'name' => $request->form['name'],
            'description' => $request->form['description'],
            'dept_id' =>  $request->form['dept_id'],
            'updated_by' => $created_by
        ]);

        if ($center_type) {
            return '{
                "success":true,
                "message":"successful"
            }' ;
        } else {
            return '{
                "success":false,
                "message":"failed"
            }' ;
        } 
    }
    public function deleteCenterType(Request $request)
    {
        // return $request;
        $created_by= Auth()->user()->id;
        $center_type = DB::table('center_type')->where('id',$request[0])->update([
            'status' => "suspend"
        ]);

        if ($center_type) {
            return '{
                "success":true,
                "message":"successful"
            }' ;
        } else {
            return '{
                "success":false,
                "message":"failed"
            }' ;
        } 
    }

    public function editCentertypes(Request $request)
    {
     return $center_type = DB::table('center_type')->join('departments','center_type.dept_id','=','departments.id')->select('center_type.*','departments.name AS deptname')->where('center_type.id',$request[0])->get();
    } 

    public function AddWardType(Request $request)
    {
        $dt = Carbon::now();
        $cDate = $dt->toFormattedDateString();
        $cTime = $dt->format('h:i:s A');
        $created_by= Auth()->user()->id;
        $request->merge(["created_by" => $created_by]);
        $request->merge(["updated_by" => $created_by]);
        $request->merge(["c_date" => $cDate]);
        $request->merge(["c_time" => $cTime]);
        $center_type = DB::table('ward_type')->insert($request->all());

        if ($center_type) {
            return '{
                "success":true,
                "message":"successful"
            }' ;
        } else {
            return '{
                "success":false,
                "message":"failed"
            }' ;
        } 
    }

    public function AddWard(Request $request)
    {
        $dt = Carbon::now();
        $cDate = $dt->toFormattedDateString();
        $cTime = $dt->format('h:i:s A');
        $created_by= Auth()->user()->id;
        $request->merge(["created_by" => $created_by]);
        $request->merge(["updated_by" => $created_by]);
        $request->merge(["c_date" => $cDate]);
        $request->merge(["c_time" => $cTime]);
        $center_type = DB::table('ward_tb')->insert($request->all());

        if ($center_type) {
            return '{
                "success":true,
                "message":"successful"
            }' ;
        } else {
            return '{
                "success":false,
                "message":"failed"
            }' ;
        } 
    }

    public function AddRank(Request $request)
    {
        $created_by= Auth()->user()->id;
        $request->merge(["created_by" => $created_by]);
        $request->merge(["updated_by" => $created_by]);
        $center_type = DB::table('rank_tb')->insert($request->all());

        if ($center_type) {
            return '{
                "success":true,
                "message":"successful"
            }' ;
        } else {
            return '{
                "success":false,
                "message":"failed"
            }' ;
        } 
    }
    public function editingRank(Request $request)
    {
     return $center_type = DB::table('rank_tb')->join('departments','rank_tb.dept_id','=','departments.id')->select('rank_tb.*','departments.name AS deptname')->where('rank_tb.id',$request[0])->get();
    }


    public function editRank(Request $request)
    {
        // return $request;
        $created_by= Auth()->user()->id;
        $editRank = DB::table('rank_tb')->where('id',$request->id)->update([
            'name' => $request->form['rank_name'],
            'description' => $request->form['description'],
            'dept_id' =>  $request->form['dept_id'],
            'updated_by' => $created_by
        ]);

        if ($editRank) {
            return '{
                "success":true,
                "message":"successful"
            }' ;
        } else {
            return '{
                "success":false,
                "message":"failed"
            }' ;
        } 
    }
    public function deleteRank(Request $request)
    {
        // return $request;
        $created_by= Auth()->user()->id;
        $center_type = DB::table('rank_tb')->where('id',$request[0])->update([
            'status' => "suspend"
        ]);

        if ($center_type) {
            return '{
                "success":true,
                "message":"successful"
            }' ;
        } else {
            return '{
                "success":false,
                "message":"failed"
            }' ;
        } 
    }

    public function AddTeam(Request $request)
    {
        $created_by= Auth()->user()->id;
        $request->merge(["created_by" => $created_by]);
        $request->merge(["updated_by" => $created_by]);
        $insert_team = DB::table('team_tb')->insert($request->all());

        if ($insert_team) {
            return '{
                "success":true,
                "message":"successful"
            }' ;
        } else {
            return '{
                "success":false,
                "message":"failed"
            }' ;
        } 
    }
    public function editingTeam(Request $request)
    {
     return $center_type = DB::table('team_tb')->join('branches','team_tb.center_tb_id','=','branches.id')->select('team_tb.*','branches.name AS centerName', 'branches.id AS center_id')->where('team_tb.id',$request[0])->get();
    }


    public function editTeam(Request $request)
    {
        // return $request;
        $created_by= Auth()->user()->id;
        $editRank = DB::table('team_tb')->where('id',$request->id)->update([
            'team_name' => $request->form['team_name'],
            'description' => $request->form['description'],
            'center_tb_id' =>  $request->form['center_tb_id'],
            'updated_by' => $created_by
        ]);

        if ($editRank) {
            return '{
                "success":true,
                "message":"successful"
            }' ;
        } else {
            return '{
                "success":false,
                "message":"failed"
            }' ;
        } 
    }
    public function deleteTeam(Request $request)
    {
        // return $request;
        $created_by= Auth()->user()->id;
        $center_type = DB::table('team_tb')->where('id',$request[0])->update([
            'status' => "suspend"
        ]);

        if ($center_type) {
            return '{
                "success":true,
                "message":"successful"
            }' ;
        } else {
            return '{
                "success":false,
                "message":"failed"
            }' ;
        } 
    }
}

