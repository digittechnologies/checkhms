<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Customers extends Model
{
    protected $fillable = [
        'name', 'othername', 'email', 'gender', 'mobile_number', 'address', 'city', 'state', 'country', 'd_o_b', 'about','allergy', 'n_h_i_s', 'card_number', 'status'
    ];
}
