<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\User;

class ChangePasswordController extends Controller
{
    public function process(Request $request)
    {
    	$token = DB::table('password_resets')
    	->where(['email' => $request->email, 'token' => $request->token])->first();
    	if(!empty($token)){
    		$pawd = '';
    		$update = DB::table('users')->where('email', '=', $request->email)
    		->update([
	            'password'=> bcrypt($request->password)
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
    	 if(empty($token)){
    	 	return '{
                "success":false,
                "message":"Failed"
            }';
    	 }
	}
	
	public function changePassword(Request $request)
	 {
		 return $request->all();
		$id= Auth()->user()->id;
		$get = DB::table('users')->select('users.password')
		->where('id', $id)-first();
		return $get;
		// bcrypt($data['password']),
		
	}

}
