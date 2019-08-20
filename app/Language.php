<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Language extends Model
{
    protected $table = 'languages';

    public static function getLanguageIdByCode($langCode) {
        return self::where('code', $langCode)->first()->value('id');
    }
}
