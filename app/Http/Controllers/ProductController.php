<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Product;


class ProductController extends Controller
{

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'price' => 'required|numeric|min:0',
        ]);

        Product::create($request->all());
        return redirect()->back();

    }

    public function destroy(Product $product)
    {
        $product->delete();
        return redirect()->back();
    }
}
