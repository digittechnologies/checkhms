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
use App\Shelves;
use App\Branches;
use App\Item_details;

class DisplayController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    
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
