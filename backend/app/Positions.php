<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Positions extends Model
{
    protected $table= 'positions';
    protected $fillable = [
        'position_name','dept_id','description','created_by','updated_by'
    ];
}
