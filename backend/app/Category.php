<?php

namespace App;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $fillable = [
        'catname', 'description','activity_id'
    ];
}
