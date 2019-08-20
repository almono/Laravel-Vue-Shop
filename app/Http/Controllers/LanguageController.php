<?php

namespace App\Http\Controllers;

use Illuminate\Routing\Controller as BaseController;

use App\Language;

class LanguageController extends BaseController
{
    public function getLanguageList() {

    }

    public function getLanguageTranslations($language = 'EN') {
        $langId = Language::getLanguageIdByCode($language);
        dd($langId);
    }
}
