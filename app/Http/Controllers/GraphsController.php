<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class GraphsController extends Controller
{
    public function index()
    {
        return Inertia::render('graphs/index', []);
    }
}
