<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ExpenseItem extends Model
{
    use HasFactory;

    protected $table = 'expense_items'; // nombre explícito de la tabla pivot

    protected $fillable = [
        'expense_id',
        'product_id',
        'quantity',
        'price',
    ];

    /**
     * Relación: cada línea de gasto pertenece a un gasto.
     */
    public function expense()
    {
        return $this->belongsTo(Expense::class);
    }

    /**
     * Relación: cada línea de gasto corresponde a un producto.
     */
    public function product()
    {
        return $this->belongsTo(Product::class);
    }
}
