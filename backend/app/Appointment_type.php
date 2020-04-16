<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Appointment_type extends Model
{
    protected $table= 'appontment_type';
    protected $fillable = [
        'name','table_name','description','status','key_access'
    ];
}
