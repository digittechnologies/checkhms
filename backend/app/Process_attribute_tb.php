<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Process_attribute_tb extends Model
{
    protected $fillable = [
        'process_id', 'attribute', 'description', 'status'
    ];
}
