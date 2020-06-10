<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
use App\Medical_metadata;

class MedicalMetaDataController extends Controller
{
    // this.Jarwis.login(this.form).subscribe(
    //     data => {
    //       this.response = data
    //       this.warhead = this.response
    //       console.log(this.warhead)
    //       console.log(typeof(this.warhead))
    //       console.log(this.warhead[0].metadata_body)
    //       console.log(typeof(this.warhead[0].metadata_body))
    //       this.warhead[0].metadata_body
    //       let parse = JSON.parse(this.warhead[0].metadata_body)
    //       console.log(typeof(parse))
    //       console.log(parse.bio)
    //       // console.log(this.warhead[0].metadata_body.bio)
    //       // console.log(typeof(this.warhead[0].metadata_body.bio))
    //     },
    //     );


    public function saveGeneralMedicalMetaData()
    {
        $update = Medical_metadata::append('metadata_body')->toArray()->where('id', 6);
        return $update;
        
        // $insert = DB::table('medical_metadata')->insert([
        //     'metadata_body' => json_encode([
        //         'bio' => [
        //         'processor' => 'processor',
        //         'sensor_type' => 'sensor_type'
        //         ],
        //     ])
        // ]);
        // return $insert;

        // $get = DB::table('medical_metadata')->where('metadata_body->bio->processor', 'processor')->where('id', 7)->select('metadata_body')
        // ->get();
        // return $get;
        
        // $update = DB::table('medical_metadata')->where('metadata_body->bio->processor', 'processor')->where('id', 7)
        // ->update([
        //     'metadata_body' => json_encode([
        //                 'bio' => [
        //                 'processor' => 'intel core i9',
        //                 'sensor_type' => 'confidential'
        //                 ],
        //             ])
        // ]);

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
}
