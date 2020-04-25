<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Eps extends Model
{
    protected $fillable = [
        'eps_name', 
        'eps_address', 
        'phone',
        'status' 
    ];
}
