<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'photo',
    ];

    /**
     * Relación: un producto puede pertenecer a muchas categorías.
     */
    public function categories()
    {
        return $this->belongsToMany(Category::class, 'category_product')
            ->withTimestamps();
    }

    /**
     * Relación: un producto puede aparecer en muchos gastos
     * mediante la tabla intermedia expense_items.
     */
    public function expenses()
    {
        return $this->belongsToMany(Expense::class, 'expense_items')
            ->withPivot('quantity', 'price')
            ->withTimestamps();
    }

    /**
     * Relación: un producto puede tener muchas ofertas.
     */
    public function offers()
    {
        return $this->hasMany(Offer::class);
    }
}
