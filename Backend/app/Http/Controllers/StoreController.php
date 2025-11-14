<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Store;
use Illuminate\Foundation\Console\StorageLinkCommand;
use Illuminate\Http\Request;

class StoreController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Store::all();
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string',
            'image_url' => 'nullable|url|max:255'
        ]);
        $store = Store::create($validated);
        return response()->json(null, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return Store::findOrFail($id);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $store = Store::findOrFail($id);
        $store->update($request->all());
        return response()->json($store);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Store::destroy($id);
        return response()->json(null, 204);
    }
}
