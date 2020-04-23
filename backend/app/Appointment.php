<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Appointment extends Model
{
    protected $table= 'appointment';

    protected $fillable = [
        
        'customer_id', 
        'appointment_type',
        'clinic_id',
        'clinic_status',
        'pharm_id',
        'pharm_status',
        'revenue_id',	
        'revenue_status',
        'lab_id',
        'lab_status',
        'radio_id',
        'radio_status',
        'theater_id',
        'theater_status',
        'ward_id',
        'ward_status',
        'nurse_status',
        'status',
        'note',
        'created_by',
        'created_branch',
        'created_at',
        'a_date',
        'a_time',
        'updated_by	',
    ];
}
