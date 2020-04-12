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
use App\Branches;
use App\Appointment_type;

class RecordModuleController extends Controller
{
    public function displayRecordCharges()
    {
        return Hospital_charges::orderBy('id')->join('users','hospital_charges.staff_id','=','users.id')
                ->select('hospital_charges.*','users.firstname', 'users.lastname')               
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
            ->select('appointment_type.*')     
            ->get()
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
}
