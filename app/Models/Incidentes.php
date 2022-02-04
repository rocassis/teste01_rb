<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Incidentes extends Model
{
    use HasFactory;

    protected $filable = ['titulo','descricao','criticidade','tipo','status'];   
}
