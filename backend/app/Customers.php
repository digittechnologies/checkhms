<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Customers extends Model
{
    protected $fillable = [
        'name', 'email', 'mobile_number', 'address', 'd_o_b', 'about','allergy', 'n_h_i_s', 'card_number','status', 'blood_id', 'treatment_id', 'prescription_id'
    ];
}
