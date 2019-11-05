<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Content extends Model
{
    protected $fillable = [
        'header', 'content','c_image','list','title_id'
    ];
}
