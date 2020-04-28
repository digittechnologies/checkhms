<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Centers extends Model
{
    protected $table= 'centers';
    protected $fillable = [
        'name','address','status','created_at','created_by','updated_at','updated_by'
    ];
}
