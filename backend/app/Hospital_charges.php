<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Hospital_charges extends Model 
{
    protected $table= 'hospital_charges';
    protected $fillable = [        
        'charge_name', 'charge_amount', 'status', 'created_date', 'created_time', 'staff_id'
    ];
}
