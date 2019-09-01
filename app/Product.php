<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Product extends Model
{
    protected $table = 'products';

    public function category() {
        return $this->belongsTo('App\Category');
    }

    public function ratings() {
        return $this->hasMany('App\ProductRatings');
    }

    public static function getProductListByCategory($category) {
        return self::where([
            ['category_id', $category],
            ['active', 1]
        ])->get();
    }

}
