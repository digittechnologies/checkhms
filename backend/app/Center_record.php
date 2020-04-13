<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Center_record extends Model
{
    protected $table= 'center_record';
    protected $fillable = [
        'id','name','address','admin_id','status','key_access','created_by','created_at','updated_by','updated_at'
    ];
}
