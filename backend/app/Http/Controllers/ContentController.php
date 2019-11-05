<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Content;
use App\ Category;
use App\title;
use Image;
use App\User;
use App\comment_tbs;
class ContentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getcontent($id)
    {
        return response()->json(
            // Activities::where('id','=',1)->get(),
            [
        'name'=>title::orderBy('id')->join('categories','titles.category_id','=','categories.id')
        ->join('activities','categories.activity_id','=','activities.id')
        ->join('users','titles.user_id','=','users.id')
        ->select('titles.*','categories.catname','categories.destription','categories.activity_id','activities.actname','users.firstname','users.lastname','users.middlename', 'users.familybackground', 'users.image')
       ->where('titles.id','=',$id)->get(),
       'comment'=>comment_tbs::orderBy('id')->join('titles','comment_tbs.title_id','=','titles.id')
       ->join('users','comment_tbs.user_id','=','users.id')
        ->select('comment_tbs.*','titles.name_title','titles.location','titles.t_image','users.firstname','users.lastname','users.middlename','users.image','users.email')
       ->where('title_id','=',$id)
       ->get(),
       'content'=>content::orderBy('id')->join('titles','contents.name_id','=','titles.id')
        ->select('contents.*','titles.name_title','titles.location','titles.t_image')
       ->where('name_id','=',$id)
       
       ->get()
       ]
    );
    }
    public function getcontentonly($id)
    {
        return response()->json(
            // Activities::where('id','=',1)->get(),
            [
        
       'content'=>content::orderBy('id')->join('titles','contents.name_id','=','titles.id')
        ->select('contents.*','titles.name_title','titles.location','titles.t_image')
       ->where('contents.id','=',$id)
       
       ->get()
       ]
    );
    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    
    public function getactid($id)
    {
        // return $id;
        return response()->json(
        
            Category::where('activity_id','=',$id)->get()
           
        );
    }
    public function store(Request $request)
    {
        $authid=auth()->user()->id;
        
          $request->merge(['user_id'=>$authid]);
         $detcontents = $request->contents;
         if ($request->t_image ){
            $file=$request->t_image;
            $filename=time().'.' . explode('/', explode(':', substr($file, 0, strpos($file,';')))[1])[1];
         
            Image::make($file)->resize(300, 300)->save(public_path('/upload/uploads/'.$filename));
           
            $request->merge(['t_image'=>$filename]);
           
        }
        $content= title::create($request-> all());
        // return $content->id;

        $contentData=[];
        
        foreach ($detcontents as $item) {
           
            $contentData[] =[
             'header'=>$item['header'],
             'content' =>$item['content'],
           
             'name_id' => $content->id,
           
            ] ; 
        }
     
         Content::insert($contentData);
         return $contentData;
    }

 
    public function show($id)
    {
        //
    }

    
    public function edit($id)
    {
        //
    }

    
    public function update(Request $request)
    {
      
       $detcontents= $request->gcontents;
    
   
        
    foreach ($detcontents as $item) {
        $update = DB::table('contents')
                    ->where([
                        ['id','=',$item['id']]
                    ])
                    ->update(array('header' => $item['header'], 'content' => $item['content']));
    
    }
    if($update){
        return '
            "success":"true"
        ';
    }
    }

   
    public function destroy($id)
    {
        //
    }
}
