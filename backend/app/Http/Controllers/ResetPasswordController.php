<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\Mail;
use App\Mail\ResetPasswordMail;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class ResetPasswordController extends Controller
{
    public function sendEmail(Request $request)
    {
        if($this->valiadateEmail($request->email) == 'valid'){
        	$token = DB::table('password_resets')->where('email', $request->email)->first();

        	if($token){
        		$token = $token->token;
        	}
        	else{
	        	$token = str_random(60);
	        	$saveToken = DB::table('password_resets')
	        	->insert([
	        		'email' => $request->email,
	        		'token' => $token,
	        		'created_at' => Carbon::now()
	        	]);
	        }
	        
        	$sendMail = Mail::to($request->email)->send(new ResetPasswordMail($token));
        	if($sendMail){
	        		return '{
	                "success":true,
	                "message":"successful"
	            }' ;
        	}
        }

        else{
        	return '{
                "success":false,
                "message":"Failed"
            }';
        }

    }

    public function valiadateEmail($email)
    {
    	$getUser = User::where('email', '=', $email)->get();
    	 if(count($getUser) != 0){
    	 	return 'valid';
    	 }
    	 if(count($getUser) == 0){
    	 	return 'invalid';
    	 }
    }
}
