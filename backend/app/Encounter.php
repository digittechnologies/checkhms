<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Encounter extends Model
{
    protected $table= 'encounter_tb';

    protected $fillable = [
        'appointment_id','encounter_tittle_id','preable','subject','object','assessment','presumption_d','diffrential_d','investigation','theater','definitive_d','pharmacy','ipd','status','created_by','created_at','created_time','updated_by','updated_at'
        
    ];
}
