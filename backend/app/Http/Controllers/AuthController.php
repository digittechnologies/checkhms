<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use App\Http\Requests\SignUpRequest;
use Illuminate\Http\Request;
use App\User;
use Image;
use App\Role;
use Mail;

class AuthController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 'signup','updateprofile', 'editPriviledges']]);
    }

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
   
    public function login(Request $request)
    {
        $credentials = request(['email', 'password', 'status']);
        $email=$request->email;
        $psw=$request->password;
        
        if (! $token = auth()->attempt($credentials)) {
            return response()->json(['error' => 'Email or password did not Exist'], 401);
        }

        $usr = User::orderBy('id')->join('departments','users.dept_id','=','departments.id')
                    ->select('users.*','departments.name')    
                    ->where('email','=',$email)   
                    ->where('password','=',$psw)         
                    ->get();   
        return response()->json(
            [
                'details' =>User::orderBy('id')->join('departments','users.dept_id','=','departments.id')
                ->select('users.*','departments.name', 'departments.position_id')    
                ->where('email','=',$email)   
                // ->where('password','=',$psw)         
                ->get(),
                'token' =>  $this->respondWithToken($token)

            ]);
    }

    public function signup(SignUpRequest $request)
    {   
        $word = "aztm".date('sdmy');
        $cot= str_shuffle(substr($word, 0, 8));
        $request->merge(['password' => $cot]);

        $GLOBALS['email']=$request->email;
        $data = array('email'=>$GLOBALS['email'], 'password'=>$cot);
        $sendMail = Mail::send('password', $data, function($message) {
        $message->to($GLOBALS['email'], 'new user')->subject('New account created on Check HMS');
        $message->from('ayoade0369@gmail.com','noreply');
        });
        $user= User::create($request->all());
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
        // return $this->login($request);
    }
    
    public function me(Request $request)
    {
        $a = auth()->user();
        $e = auth()->user()->email;
        $p = auth()->user()->password;
        $GLOBALS['loginBranch']=auth()->user()->branch_id;
        return response()->json(
            [
                'aut'=> auth()->user(),
                'det'=>User::orderBy('id')->join('departments','users.dept_id','=','departments.id')
                ->join('branches','users.branch_id','=','branches.id')
                ->select('users.*','departments.name', 'departments.position_id', 'branches.br_name')    
                ->where('email','=',$e)   
                // ->where('password','=',$psw)         
                ->get()
            ]
        );
    }


    
    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        auth()->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        return $this->respondWithToken(auth()->refresh());
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            // 'expires_in' => auth()->factory()->getTTL() * 60,
            'user' => auth()->user()  
        ]);
    }

    public function setPasswordAttribute($value){
        $this->attributes['password']=bcsqrt($value);
    }

    public function editPriviledges(Request $request)
    {
        $input = collect(request()->all())->filter()->all();
        $id=$request->id;
        $update = User::where('id', $id)->update($input);
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

    public function updateprofile(Request $request)
    {
       $user= auth()->user();
	   $currentfile= $user->image;
	   $datas=$request->formdata;
      
        if ($request->image != $currentfile){
            $file=$request->image;
            $filename=time().'.' . explode('/', explode(':', substr($file, 0, strpos($file,';')))[1])[1];
           // $filename= time().'.'.$file->getClientOriginalExtension();
            Image::make($file)->resize(300, 300)->save(public_path('/upload/uploads/'.$filename));
           //$user=auth()->user();
            // $datas->merge(['image'=>$filename]);
            $user->image = $filename;
            //$user->save(); 'familybackground'
        }
        // $user = new user;
        $user->firstname = $datas['firstname'];
        $user->lastname = $datas['lastname'];
        $user->middlename = $datas['middlename'];
     	$user->email =  $datas['email'];
     	$user->town =  $datas['town'];
	    $user->address =  $datas['address'];
	    $user->phone =  $datas['phone'];
	    $user->gender =  $datas['gender'];
	    $user->family =  $datas['family'];
	    $user->familybackground =  $datas['familybackground'];
    	$user->save();
        // $user->update($request->all());
        
        return $user;
       //return response()->json(['success' => 'You have successfully uploaded an image'], 200);
        }
} 