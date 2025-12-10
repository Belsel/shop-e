<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Store extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'logo',
        'website',
    ];

    /**
     * Relación: una tienda puede tener muchas ofertas.
     */
    public function offers()
    {
        return $this->hasMany(Offer::class);
    }
}
