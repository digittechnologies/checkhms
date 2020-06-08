<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Process_module_tb extends Model
{
    protected $fillable = [
        'module_name', 'description', 'status'
    ];
}
