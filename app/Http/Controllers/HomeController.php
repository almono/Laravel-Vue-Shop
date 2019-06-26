<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

use App\Website;
use App\Product;

class HomeController extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function getWelcomeMessage() {
        $website = Website::pluck('welcome_msg')->first();
        return $website;
    }
    public function getHomepageProducts() {
        $products = Product::take(4)->get();
        return $products;
    }
}
