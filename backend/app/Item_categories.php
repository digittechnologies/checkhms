<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Item_categories extends Model
{
    protected $fillable = [
        'name', 'status'
    ];
}
