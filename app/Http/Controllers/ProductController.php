<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Product;


class ProductController extends Controller
{

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'price' => 'required|numeric|min:0',
            'image' => 'nullable|image|max:2048',
        ]);
        
        if ($request->hasFile('image')) {
        $validated['image'] = $request->file('image')->store('products', 'public');
        }


        Product::create($validated);
        return redirect()->back();

    }

    public function destroy(Product $product)
    {
        $product->delete();
        return redirect()->back();
    }

    public function update(Request $request, Product $product)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'price' => 'required|numeric|min:0',
            'image' => 'nullable|image|max:2048',
        ]);

        $product->update($request->all());

        return redirect()->back();
    }
}
