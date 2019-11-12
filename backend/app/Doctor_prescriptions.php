<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Doctor_prescriptions extends Model
{
    protected $fillable = [
        'customer_id', 'item_id', 'quantity', 'instruction', 'day_supply', 'days','status', 'supply_quantity', 'refillment_status','refillment_quantity', 'cost', 'paid', 'to_balance', 'date', 'voucher_id', 'payment_id', 'doctor_id', 'pharmacist_id', 'branch_id'
    ];
}
