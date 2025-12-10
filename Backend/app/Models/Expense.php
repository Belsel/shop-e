<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Expense extends Model
{
    use HasFactory;

    /**
     * Los atributos que se pueden asignar masivamente.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'user_id',
        'purchase_date',
    ];

    /**
     * Relación: un gasto pertenece a un usuario.
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Relación: un gasto contiene muchos productos
     * mediante la tabla intermedia expense_items.
     */
    public function products()
    {
        return $this->belongsToMany(Product::class, 'expense_items')
            ->withPivot('quantity', 'price')
            ->withTimestamps();
    }
}
