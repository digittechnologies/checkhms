<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SetupController extends Controller
{
    public function setupStatus()
    {
        // $con = DB::connection('mysql2')->table('client_config')->get();
        // return $con;

        return DB::table('general_settings')->select('status', 'short_name', 'module')->get();
    }
}
