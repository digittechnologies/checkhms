<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use App\Http\Requests\SignUpRequest;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
use App\Hospital_charges;
use App\Center_record;
use App\Departments;
use App\Branches;
use App\Appointment_type;
use App\Appointments;
use App\Centers;
use App\Customers;

class RecordModuleController extends Controller
{
    public function displayRecordCharges()
    {
        return Hospital_charges::orderBy('id')->join('users','hospital_charges.staff_id','=','users.id')
                ->join('appontment_type','hospital_charges.appointment_type','=','appontment_type.id')
                ->join('departments','hospital_charges.dept_id','=','departments.id')
                ->select('hospital_charges.*','users.firstname', 'users.lastname', 'departments.name as dept_name', 'appontment_type.name as appoint_name')               
                ->get();
    }

    public function addHospitalCharge(Request $request)
    {
        $staffId= Auth()->user()->id;
        $carbon = Carbon::now();
        $date = $carbon->toFormattedDateString();
        $time = $carbon->format('h:i:s A');
        $request->merge(['created_date' => $date]);
        $request->merge(['created_time' => $time]);
        $request->merge(['staff_id' => $staffId]);

        $charge= Hospital_charges::create($request-> all());
       
        if($charge){
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

    public function editCharge($id)
    {
        return response()->json(
            Hospital_charges::orderBy('id')
            ->select('hospital_charges.*')     
            ->where('id','=',$id)          
            ->get() 
        );
    }

    public function displayUser()
    {
        $id= auth('api')->user()->branch_id;
        
        return response()->json([          
           'branch'=> Branches::orderBy('id')
            ->select('branches.*')     
            ->where('id','=',$id)          
            ->get(),

            'appointment_type'=> Appointment_type::orderBy('id')
            ->select('appontment_type.*')     
            ->get(),

            'branches'=> Centers::orderBy('id')
            ->select('centers.*')     
            ->get()
         ]);
    }

    public function displayAppointmentType()
    {
        $id= auth('api')->user()->branch_id;
        
        return response()->json([          
           
            'appointment_type'=> Appointment_type::orderBy('id')
            ->select('appontment_type.*')     
            ->get(),

         ]);
    }

    public function updateCharge(Request $request)
    {   
        $carbon = Carbon::now();
        $name = $request->charge_name;
        $amount = $request->charge_amount;
        $status = $request->status;
        $id = $request->id;   
        $update = DB::table('hospital_charges')->where('id','=',$id)
            ->update([
                'charge_name'=> $name,
                'charge_amount'=> $amount,
                'status'=> $status,
                'updated_at'=> $carbon
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

    public function deleteCharge(Request $request)
    {
        $id=$request[0];

        $delete=DB::table('hospital_charges')->where('id', $id)->delete();
       
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

    //APointment Types
    public function addApptType(Request $request)
    {
        // $staffId= Auth()->user()->id;
        // $carbon = Carbon::now();
        // $date = $carbon->toFormattedDateString();
        // $time = $carbon->format('h:i:s A');
        // $request->merge(['created_date' => $date]);
        $request->merge(['table_name' => 'null']);
        $request->merge(['key_access' => 'null']);

        $aptType= DB::table('appontment_type')->insertGetId($request-> all());
       
        if($aptType){
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
    // public function 

    public function displayApptType(){
        return DB::table("appontment_type")->get();
    }

    public function deleteApptType(Request $request)
    {
        $id=$request[0];

        $delete=DB::table('appontment_type')->where('id', $id)->delete();
       
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

    public function updateApptType(Request $request)
    {   
        $name = $request->name;
        $description = $request->description;
        $status = $request->status;
        $id = $request->id;   
        $update = DB::table('appontment_type')->where('id','=',$id)
            ->update([
                'name'=> $name,
                'description'=> $description,
                'status'=> $status,
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
    
    public function editApptType($id)
    {
        return response()->json(
            DB::table('appontment_type')->orderBy('id')
            ->select('appontment_type.*')     
            ->where('id','=',$id)          
            ->get() 
        );
    }

    public function councelVoucher($cId){
         
        $deletec=DB::table('doctor_prescriptions')->where('voucher_id', $cId)->delete();
        if($deletec){

            $update = DB::table('vouchers')->where('id','=',$cId)->update([
                'paid_status'=> 'terminate',   
                'delivery_status'=> 'terminate',
                'refill_status'=> 'terminate'                  
            ]);

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
        $dt = Carbon::now();
        $date = $dt->toFormattedDateString();
        $time = $dt->format('h:i:s A');

        $staff_id= auth()->user()->id;
        $bid= Auth()->user()->branch_id;

        $checkAppointment= Appointments::orderBy('id')->select('appointments.id')->where([
            'appointments.customer_id' => $request->customer_id,
            'appointments.status' =>'open'
            // 'appointments.date' => $date
            ])->get();

        if (count($checkAppointment) == 0) {
     

            $request->merge(['created_by' => $staff_id]);
            $request->merge(['created_branch' => $bid]);
            $request->merge(['a_date' => $date]);
            $request->merge(['a_time' => $time]);


            if($request->appointment_type == "4"){
                $request->merge(['pharm_id' => $request->center_id]);
                $request->merge(['pharm_status' => 'open']);
            }

            if($request->hospital_charges != "0"){
                $request->merge(['revenue_id' => $request->charges]);
                $request->merge(['revenue_status' => 'open']);
            }

            $insert =  Appointments::create($request->all());
        
         if($insert){
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

        }else if(count($checkAppointment) > 0){

            return 'Already Loged';

        }        
    }

    public function displayRecordData(Request $request)
    {
        $branch = DB::table("branches")->where(['status' => 'active', 'branches.dept_id' => '1'])->orderBy('id')->get(); 
        $array = array();
        foreach($branch as $row){
            $getTotal = DB::table('appointments')->where('pharm_id' , $row->id)->count();
            array_push($array, array($row->name, $getTotal));
        }     
        return response()->json([
            "allAppointments" => Appointments::where('pharm_id', '!=', 0)->count(),
            'allPatients'=> Customers::count(),
            "pharmacyCenters" => $array,
            // "databaseSize" => DB::select(DB::statement(
            //     'SELECT table_schema "database", sum(data_length + index_length)/1024/1024/1024 "size in GB" FROM information_schema.TABLES WHERE table_schema="buth_pharmacy" GROUP BY table_schema'
            //     // 'SELECT table_schema "database", sum(data_length + index_length)/1024/1024 "size in MB" FROM information_schema.TABLES GROUP BY table_schema'
            //     // 'SELECT table_schema AS "database", ROUND(SUM(data_length + index_length)/1024/1024, 2) AS "size in MB" FROM information_schema.TABLES WHERE table_schema = "buth_pharmacy" GROUP BY table_schema'
            // )),
        ]);
    }   


    public function displayRecordPieData()
    {
        $aptType = DB::table("appontment_type")->orderBy('id')->get(); 
        $array = array();
        foreach($aptType as $row){
            $id = $row->id;
            $return = DB::table('appointments')->where('appointment_type', $id)->count();
            array_push($array, (int)$return);
         }
         return $array;
    }

}
