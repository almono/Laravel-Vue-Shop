<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

use App\Product;

class ProductController extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function viewProduct($id) {
        $product = Product::find($id);

        if ($product && $product->active == 1) {
            return response($product, 200);
        } else {
            return response('No product found', 204);
        }
    }

    public function getProductListByCategory() {

    }

    public function addToCart() {

    }
}
