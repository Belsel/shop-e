<?php

namespace App\Http\Controllers;

use App\Models\Sale;
use Illuminate\Http\Request;

class SaleController extends Controller
{
    public function index()
    {
        return Sale::with(['product', 'store'])->get();
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'product_id' => 'required|exists:products,id',
            'store_id' => 'required|exists:stores,id',
            'price' => 'required|numeric|min:0',
            'link' => 'nullable|url|max:255',
        ]);

        $sale = Sale::create($validated);

        return response()->json($sale, 201);
    }

    public function show(Sale $sale)
    {
        return $sale->load(['product', 'store']);
    }

    public function update(Request $request, Sale $sale)
    {
        $validated = $request->validate([
            'product_id' => 'sometimes|exists:products,id',
            'store_id' => 'sometimes|exists:stores,id',
            'price' => 'sometimes|numeric|min:0',
            'link' => 'nullable|url|max:255',
        ]);

        $sale->update($validated);

        return response()->json($sale);
    }

    public function destroy(Sale $sale)
    {
        $sale->delete();

        return response()->json(null, 204);
    }
}
