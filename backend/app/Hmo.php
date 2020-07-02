<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Hmo extends Model
{
    protected $table= 'scheme_hmo';

    protected $fillable = [
        'scheme_id','hmo_no','hmo_name','about_hmo','hmo_address','hmo_email','hmo_contact','price_list_column','price_list_status','discount_1','discount_2','discount_3'
    ];
}
