<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Positions;
use App\Departments;
use App\User;
use Image;
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
use App\Voucher;
use Carbon\Carbon;
use App\Appointments;
use App\Lab_depts;
use App\Lab_test_types;

class AddController extends Controller
{

//Set Depertment Component

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

    public function updateDept(Request $request)
    {
        $id=$request->id;
        $name= $request->name;
        $descrip= $request->description;
        $pos= $request->position_id;

        $update = DB::table('departments')->where('id','=',$id)
        ->update([
            'name'=> $name,
            'description' => $descrip,
            'position_id' => $pos
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

    public function updateType(Request $request)
    {
        $id=$request->data['id'];
        $name= $request->data['name'];    
         $file=$request->image2;
            $filename=time().'.' . explode('/', explode(':', substr($file, 0, strpos($file,';')))[1])[1];
            Image::make($file)->resize(300, 300)->save(public_path('/upload/uploads/'.$filename));           


        $update = DB::table('item_types')->where('item_types.id','=',$id)
        ->update([
            'type_name'=> $name,
            'image' => $filename,
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
        $branch = DB::table("branches")->get();   
        $getImage = Item_types::select('image')     
        ->where('id','=',$request->item_type_id)          
        ->get();
        $dt = Carbon::now();
        $item_date = $dt->toFormattedDateString();
        $item_time = $dt->format('h:i:s A');
        $request->merge(['item_date' => $item_date]);
        $request->merge(['item_time' => $item_time]);
        $request->merge(['item_img' => $getImage[0]->image]);
        $item= Item_details::create($request-> all());
        foreach($branch as $row){
            $name = $row->br_name;
            $insert = DB::table($name)->insertGetId(
                [
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
        $id=$request->id;
        $generic_name= $request->generic_name;
        $selling_price= $request->selling_price;
        $purchasing_price= $request->purchasing_price;
        $manufacture_date = $request->manufacture_date;
        $expiring_date = $request->expiring_date;
        $status= $request->status;
        $item_unit_id= $request->item_unit_id;
        $item_category_id= $request->item_category_id;
        $item_type_id= $request->item_type_id;
        $manufacturer_id= $request->manufacturer_id;
        $tax_id= $request->tax_id;
        $discount_id= $request->discount_id;
        $staff_id= $request->staff_id;

        $update = DB::table('item_details')->where('item_details.id','=',$id)
        ->update([
            'generic_name'=>  $generic_name,
            'selling_price' => $selling_price,
            'purchasing_price' => $selling_price,
            'manufacture_date' => $manufacture_date,
            'expiring_date' => $expiring_date,
            'status' => $status,
            'item_unit_id' => $item_unit_id,
            'item_category_id' => $item_category_id,
            'item_type_id' => $item_type_id,
            'manufacturer_id' => $manufacturer_id,
            'tax_id' => $tax_id,
            'discount_id' => $discount_id,
            'staff_id' => $staff_id
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

        $delete=DB::table('item_details')->where('id', $id)->delete();
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

    //add to stock 

    public function addToStock(Request $request)
    {
       $branch = $request->br_name;
       $item = $request->item;
       $quantity = $request->quantity;
       $bitem=DB::table('branch_main')
        ->where('item_detail_id','=', $item)
        ->get();
        $receive = $bitem[0]->receive + $quantity;
        $remain =  $bitem[0]->total_remain + $quantity;
        $add=DB::table('branch_main')
         ->where('item_detail_id','=', $item)
         ->update([
            'receive' => $receive,
            'total_remain' => $remain
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

    // Branch

    public function createBranch(Request $request)
    {
        $req_name=$request->br_name;
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
            $table->timestamps();
            $table->string('item_detail_id')->index();
            $table->string('staff_id')->index()->default(0);
        });

        $itemD = DB::table("item_details")->get();   
        foreach($itemD as $rowID){
            $insert = DB::table($table_name)->insertGetId(
                [
                    'item_detail_id' => $rowID->id,
                ]
                );
        }
        $request->merge(['name' => $req_name]);
        $branch= Branches::create($request-> all());
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
    public function addCustomer(Request $request)
    {
        // $dt = Carbon::now();
        // $request->date = $dt->toFormattedDateString();
        // $request->time = $dt->format('h:i:s A');
        $customer= Customers::create($request-> all());
       
        if($customer){
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
        $id=$request->id;
        $fullname= $request->name;
        $email= $request->email;
        $mobile_number= $request->mobile_number;
        $address= $request->address;   
        $dob= $request->d_o_b;    
        $about= $request->about;
        $allergy= $request->allergy;
        $nhis= $request->n_h_i_s;
        $card_number= $request->card_number;
        $status= $request->status;
        $blood_id= $request->blood_id;
        $treatment_id= $request->treatment_id;
        $prescription_id= $request->prescription_id;

        $update = DB::table('customers')->where('customers.id','=',$id)
        ->update([
            'name'=> $fullname,
            'email' => $email,
            'mobile_number' =>$mobile_number,
            'address' => $address,
            'd_o_b' => $dob,
            'about' => $about,
            'allergy' => $allergy,  
            'n_h_i_s' => $nhis,
            'card_number' => $card_number,
            'blood_id' => $blood_id,
            'treatment_id' => $treatment_id,
            'prescription_id' => $prescription_id,
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

    //Appointment
    public function makeAppointment(Request $request)
    {
        $cust_id = $request['aid'];
        $dept_id = $request->form['dept_id'];
        $dt = Carbon::now();
        $date = $dt->toFormattedDateString();
        $time = $dt->format('h:i:s A');
        $appointment= Appointments::create(
            [
                'customer_id' => $cust_id, 
                'department_id' => $dept_id, 
                'prescription' => 'open', 
                'invoice' => 'open', 
                'voucher' => 'open',
                'treatment' => 'open', 
                'status' => 'active',
                'date' => $date,
                'time' => $time,
            ]);    
  
     if($appointment){
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

    public function deleteAppointment(Request $request)
    {
        $id=$request[0];

        $deletea=DB::table('appointments')->where('id', $id)->delete();
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
        $id=$request->id;
        $customer= $request->customer_id;
        $item= $request->item_id;
        $quantity= $request->quantity;
        $instuction= $request->instruction;   
        $daysupply= $request->day_supply;
        $days= $request->days;    
        $status= $request->status;
        $supply_quantity= $request->supply_quantity;
        $refillment_status= $request->refillment_status;
        $refillment_quantity= $request->refillment_quantity;
        $cost= $request->cost;
        $paid= $request->paid;
        $to_balance= $request->to_balance;
        $voucher= $request->voucher_id;
        $payment= $request->payment_id;
        $doctor= $request->doctor_id;
        $pharmacist= $request->pharmacist_id;
        $branch= $request->branch_id;

        $update = DB::table('doctor_prescriptions')->where('doctor_prescriptions.id','=',$id)
        ->update([
            'customer_id' => $customer,
            'item_id' => $item, 
            'quantity' => $quantity, 
            'instruction' => $instuction, 
            'day_supply' => $daysupply, 
            'days' => $days,
            'status' => $status, 
            'supply_quantity' => $supply_quantity,
            'refillment_status' => $refill_status,
            'refillment_quantity' => $refill_quanity,
            'cost' => $cost,
            'paid' => $paid, 
            'to_balance' => $to_balance, 
            'voucher_id' => $voucher,
            'payment_id' => $payment, 
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

    public function deletePrescription(Request $request)
    {
        $id=$request[0];

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
}
