<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Service_charges extends Model
{
    protected $table= 'service_charges';
    protected $fillable = [
        'appointment_id', 'voucher_id','service_charge_id','service_charge_name','dept_id','amount','balance','nhis_no','hmo_no','discount_percentage','discount_amount','total_amount','status','c_date','c_time','created_at','updated_at','created_by','updated_by'
    ];
}
