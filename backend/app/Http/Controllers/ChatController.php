<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class ChatController extends Controller
{
public function users(){
    $users =  DB::table("users")->get();
    $array = array(); 
    foreach($users as $row){
        $itemFromBranch =DB::table("private_chat")->count('status', '=', 'unread')->where([$branch.'.item_detail_id'=> $row->id, $branch.'.c_date' => $cDate])->sum($branch.'.total_remain');
        array_push($array, (int)$itemFromBranch);
    }
    return response()->json([
        "users" =>  DB::table("users")->get(),
        // "count_chats" =>  DB::table("private_chat")->count('status', '=', 'unread'),
    ]);
}
}
