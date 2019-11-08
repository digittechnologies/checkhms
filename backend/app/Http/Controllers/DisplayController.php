<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Positions;
use App\Departments;
use App\User;
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

    public function displayAllposition()
    {
        return DB::table("positions")->get();
    }








    public function deleteUser(Request $request)
    {
        $id=$request[0];

    $deletec=DB::table('users')->where('id', $id)->delete();
     return $id;
    
    }

    public function displayartifact()
    {
        return response()->json(
            [

                'event' =>Activities::where('id','=',2)->get(),
                'arti_cat'=>title::orderBy('id', 'desc')->join('categories','titles.category_id','=','categories.id')
                ->select('titles.*','categories.catname','categories.destription','categories.activity_id')
               ->where('activity_id','=',2)
               ->where('status','=','Y')
               ->inRandomOrder()->limit(4)
               ->get()
            ]
        );
    }
    public function displaybusiness()
    {
        return response()->json(
            [

                'event' =>Activities::where('id','=',3)->get(),
                
                'subevent'=>title::orderBy('id', 'desc')->join('categories','titles.category_id','=','categories.id')
                ->select('titles.*','categories.catname','categories.destription','categories.activity_id')
               ->where('activity_id','=',3)
               ->where('status','=','Y')
               ->inRandomOrder()->limit(4)
                ->get()
            ]
        );
    }
    public function displaypeople()
    {
        return response()->json(
            [
                'event' =>Activities::where('id','=',4)->get(),
                'subevent'=>title::orderBy('id', 'desc')->join('categories','titles.category_id','=','categories.id')
                ->select('titles.*','categories.catname','categories.destription','categories.activity_id')
               ->where('activity_id','=',4)
               ->where('status','=','Y')
               ->inRandomOrder()->limit(4)
              ->get()
            ]
        );
    }
    public function displaynews()
    {
        return response()->json(
            [

                'event' =>Activities::where('id','=',5)->get(),
                'subevent'=>title::orderBy('id', 'desc')->join('categories','titles.category_id','=','categories.id')
                ->join('users','titles.user_id','=','users.id')
            ->select('titles.*','categories.catname','categories.destription','categories.activity_id','users.firstname','users.lastname','users.middlename')
              ->where('activity_id','=',5)
              ->where('status','=','Y')
              ->inRandomOrder()->limit(4)
               ->get()
            ]
        );
    }

    public function getalltitle()
    {
        return response()->json(
          
                title::orderBy('id')->join('categories','titles.category_id','=','categories.id')
                ->join('users','titles.user_id','=','users.id')
            ->select('titles.*','categories.catname','categories.destription','categories.activity_id','users.firstname','users.lastname','users.middlename') 
               ->get()
        
        );
    }

    public function getalladmintitle()
    {
        return response()->json(
          
                title::orderBy('id', 'desc')->join('categories','titles.category_id','=','categories.id')
                ->join('users','titles.user_id','=','users.id')
            ->select('titles.*','categories.catname','categories.destription','categories.activity_id','users.firstname','users.lastname','users.middlename') 
            ->limit(10) 
            ->get()
        
        );
    }

    public function getalltrashtitle()
    {
        return response()->json(
          
            title::orderBy('id', 'desc')->join('categories','titles.category_id','=','categories.id')
            ->select('titles.*','categories.catname','categories.destription','categories.activity_id')
        //    ->where('activity_id','=',3)
           ->where('status','=','T')
            ->get()
    
    );
    }
   
    public function getfootertitle()
    {
        return response()->json([
            title::orderBy('id', 'desc')->join('categories','titles.category_id','=','categories.id')
            ->select('titles.*','categories.catname')
            ->where('status','=','Y')
            ->inRandomOrder()->limit(2)
               ->get()
        ]);
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
