<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Vouchers extends Model
{
    protected $fillable = [
        'module_id','quantity','amount','discount_id','discount_amount','charges','paid','balance','refill_qty','refill_amount','paid_status','delivery_status','refill_status','price_list','created_at','updated_at','v_date','v_time','item_detail_id','appointment_id','staff_id','branch_id','revenue_branch_id','invoice_id'
    ];    
}
