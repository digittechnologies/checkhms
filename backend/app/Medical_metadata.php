<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Medical_metadata extends Model
{
    protected $appends = ['metadata_body'];
    
    protected $fillable = [
        'metadata_heading', 'metadata_body', 'status', 'meta_date', 'meta_time'
    ];
}
