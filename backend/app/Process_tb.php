<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Process_tb extends Model
{
    protected $fillable = [
        'department_id', 'process_module_id', 'property'
    ];
}
