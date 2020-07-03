<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class price_list extends Model
{

    protected $table= 'price_list_column';
    protected $fillable = [
        'id','column_name','price_list_name','status','updated_by','updated_at'
    ];
    
}
