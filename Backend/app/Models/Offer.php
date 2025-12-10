<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Offer extends Model
{
    use HasFactory;

    protected $fillable = [
        'product_id',
        'store_id',
        'price',
        'source_type',
        'link',
        'valid_from',
        'valid_until',
    ];

    /**
     * Relación: una oferta pertenece a un producto.
     */
    public function product()
    {
        return $this->belongsTo(Product::class);
    }

    /**
     * Relación: una oferta pertenece a una tienda.
     */
    public function store()
    {
        return $this->belongsTo(Store::class);
    }
}
