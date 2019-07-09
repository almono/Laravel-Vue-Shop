<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $table = 'products';

    public function category() {
        return $this->belongsTo('App\Category');
    }

    public function ratings() {
        return $this->hasMany('App\ProductRatings');
    }

}
