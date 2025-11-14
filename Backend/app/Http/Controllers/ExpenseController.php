<?php

namespace App\Http\Controllers;

use App\Models\Expense;
use Illuminate\Http\Request;

class ExpenseController extends Controller
{
    public function index()
    {
        return Expense::with(['sale', 'user'])->get();
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'sale_id' => 'required|exists:sales,id',
            'user_id' => 'required|exists:users,id',
            'date' => 'required|date',
        ]);

        $expense = Expense::create($validated);

        return response()->json($expense, 201);
    }

    public function show(Expense $expense)
    {
        return $expense->load(['sale', 'user']);
    }

    public function update(Request $request, Expense $expense)
    {
        $validated = $request->validate([
            'sale_id' => 'sometimes|exists:sales,id',
            'user_id' => 'sometimes|exists:users,id',
            'date' => 'sometimes|date',
        ]);

        $expense->update($validated);

        return response()->json($expense);
    }

    public function destroy(Expense $expense)
    {
        $expense->delete();

        return response()->json(null, 204);
    }
}
