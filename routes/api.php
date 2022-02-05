<?php

use App\Http\Controllers\IncidentesController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

// Route::resource('incidentes', IncidentesController::class);

Route::get('incidentes/', [IncidentesController::class, 'index']);
Route::post('incidente/', [IncidentesController::class, 'store']);
Route::get('incidente/{incidentes}', [IncidentesController::class, 'show']);
Route::put('incidente/{incidentes}', [IncidentesController::class, 'update']);
Route::delete('incidente/{incidentes}', [IncidentesController::class, 'destroy']);