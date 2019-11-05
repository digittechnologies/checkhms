<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use App\Http\Requests\SignUpRequest;
use Illuminate\Http\Request;
use App\User;
use Image;
use App\Role;
class AuthController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 'signup','adminLogin','updateprofile']]);
    }

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
   
    public function login()
    {
        $credentials = request(['email', 'password']);

        if (! $token = auth()->attempt($credentials)) {
            return response()->json(['error' => 'Email or password did not Exist'], 401);
        }

        return $this->respondWithToken($token);
    }

    public function adminLogin()
    {
        $credentials = request(['email', 'password','role_id']);

        if (! $token = auth()->attempt($credentials)) {
            return response()->json(['error' => 'Email or password did not Exist'], 401);
        }

        return $this->respondWithToken($token);
    }

    public function signup(SignUpRequest $request){
        // $userReg = new User;
        // $resp = array();
        //     $userReg -> lname = $request -> input('lname');
        //     $userReg -> fname = $request -> input('fname');
        //     $userReg -> email = $request -> input('email');
        //     $userReg -> address = $request -> input('address');
        //     $userReg -> town = $request -> input('town');
        //     $userReg -> image = $request -> input('img');
        //     $userReg -> password = $request -> input('password');
    
    
        //             $userReg ->save();
        //             if($userReg->save()){
        //                 $resp[] = $userReg;
        //                 return json_encode($resp);                    
        //             }

            $user= User::create($request-> all());
            return $this->login($request);
            // $insert_id = DB::table('users_tb')->insertGetId(
            //     [
            //         'title' => $request->title,
            //          'password' => bcrypt("password"),
            //         'first_name' => $request->first_name,
            //         'middle_name' => $request->middle_name,
            //         'last_name' => $request->last_name,
            //         'gender' => $request->gender,
            //         'address'=>$request->address

            //     ]
            // );
       }

    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function me()
    {
        return response()->json(auth()->user());
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
    public function updateprofile(Request $request)
    {
       $user= auth()->user();
    $currentfile= $user->image;
     $datas=$request->formdata;
    // return  $datas['email'];
      
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