<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Doctor_encounter extends Model
{
    protected $table= 'doctor_encounter';
    protected $fillable = [
        'appointment_id','user_id','clinic_type','center_id','read_status','write_status','team_status','status','created_by','created_at','updated_by','updated_at','created_time'
    ];
}
