<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $table = 'categories';

    public static function getCategoryByName($name) {
        return self::where('name', $name)->value('id');
    }
}
