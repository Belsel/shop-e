<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Product;


class ProductController extends Controller
{

    public function create()
    {
        return Inertia::render('products/create', []);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'price' => 'required|numeric|min:0',
        ]);

        Product::create($request->all());
        return redirect()->back();

    }
}
