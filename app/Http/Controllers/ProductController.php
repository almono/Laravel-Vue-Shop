<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

use Illuminate\Http\Request;

use App\Product;

class ProductController extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function viewProduct($id) {
        $product = Product::with('category','ratings.user')->find($id);
        $all_ratings = $product->ratings->sum('rating');
        if($all_ratings > 0)
        {
            $average_rating = floor($all_ratings / $product->ratings->count() );
        } else {
            $average_rating = 0;
        }


        $product->average_rating = $average_rating;

        if ($product && $product->active == 1) {
            return response($product, 200);
        } else {
            return response('No product found', 204);
        }
    }

    public function getProductListByCategory() {

    }

    public function addToCart(Request $request) {
        $params = $request->all();
        $product = Product::where('active','1')->find($params['productId']);
        if($product) {
            if($product->stock > 1) {
                // add it
                jsonOutput('Product added to cart', ['productId' => $product->id, 'quantity' => $params['quantity']], 'productAddedToCart');
            } else {
                return response('You tried to add too many of this product', 204);
            }
        } else {
            return response('Could not find this product', 204);
        }
    }
}
