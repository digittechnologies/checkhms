<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Item_details extends Model
{
    protected $fillable = [
        'generic_name', 'selling_price', 'purchasing_price', 'status', 'item_unit_id', 'item_category_id', 'item_type_id', 'manufacturer_id', 'tax_id', 'discount_id', 'staff_id'	
    ];
}
