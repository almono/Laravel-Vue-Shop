<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ProductRatings extends Model
{
    protected $table = 'product_ratings';

    public function user() {
        return $this->belongsTo('App\User');
    }

}
