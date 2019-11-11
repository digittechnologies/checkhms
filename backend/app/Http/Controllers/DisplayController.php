<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Positions;
use App\Departments;
use App\User;
use App\Item_units;
use App\Item_types;
use App\Item_categories;
use App\Manufacturer_details;

class DisplayController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function displayDepartments()
    {
        return Departments::orderBy('id')->join('positions','departments.position_id','=','positions.id')
                    ->select('departments.*','positions.position_name')               
                    ->get();
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

    //Depertment
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

    public function gettitles($id)
    {
        return response()->json([
          
               'title'=> title::orderBy('id','desc')->join('categories','titles.category_id','=','categories.id')
                ->join('users','titles.user_id','=','users.id')
            ->select('titles.*','categories.catname','categories.destription','categories.activity_id','users.firstname','users.lastname','users.middlename')
            ->where('activity_id','=',$id)
            ->where('titles.status','=','Y')
            // ->inRandomOrder()->take(4) 
               ->get(),
            'acti' =>Activities::where('id','=', $id)->get(),
            'cat' =>Category::where('activity_id','=', $id)->get()
        
        ]);
    }
    public function gettitlesforadmin($id)
    {
        return response()->json([
          
               'title'=> title::orderBy('id','desc')->join('categories','titles.category_id','=','categories.id')
                ->join('users','titles.user_id','=','users.id')
            ->select('titles.*','categories.catname','categories.destription','categories.activity_id','users.firstname','users.lastname','users.middlename')
            ->where('activity_id','=',$id)
               ->get(),
            'acti' =>Activities::where('id','=', $id)->get(),
            'cat' =>Category::where('activity_id','=', $id)->get()
        
        ]);
    }
    public function getUtitles()
    {
        $id=auth()->user()->id;
        // return $id;
        return response()->json([
          
               'title'=> title::orderBy('id','desc')->join('categories','titles.category_id','=','categories.id')
                ->join('users','titles.user_id','=','users.id')
            ->select('titles.*','categories.catname','categories.destription','categories.activity_id','users.firstname','users.lastname','users.middlename')
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
           'ucontents'=> content::orderBy('id','desc')  ->join('titles','contents.name_id','=','titles.id')
               ->join('categories','titles.category_id','=','categories.id')
                ->join('users','titles.user_id','=','users.id')
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
