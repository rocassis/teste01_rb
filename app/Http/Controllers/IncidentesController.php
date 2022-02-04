<?php

namespace App\Http\Controllers;

use App\Models\Incidentes;
use Illuminate\Http\Request;

class IncidentesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Incidentes::select('id','titulo','criticidade','tipo','status')->get();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'titulo' => 'required|string',
            'descricao' => 'required|string',
            'criticidade' => 'required|integer',
            'tipo' => 'required|integer',
            'status' => 'required|integer'
        ]);

        try {
            // Incidentes::create($request->all());
            $incidentes = new Incidentes();
            $incidentes->fill($request->all());
            $incidentes->save();
            return response()->json(['message' => 'Incidente cadastrado com sucesso!']);
        } catch (\Exception $ex) {
            return response()->json(['message' => 'Ocorreu um erro ao cadastrar o incidente. Contacte o administrador.'], 500);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Incidentes  $incidentes
     * @return \Illuminate\Http\Response
     */
    public function show(Incidentes $incidentes)
    {
        return response()->json(['incidente' => $incidentes]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Incidentes  $incidentes
     * @return \Illuminate\Http\Response
     */
    public function edit(Incidentes $incidentes)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Incidentes  $incidentes
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Incidentes $incidentes)
    {
        $request->validate([
            'titulo' => 'required|string',
            'descricao' => 'required|string',
            'criticidade' => 'required|integer',
            // 'tipo' => 'required|integer',
            // 'status' => 'required|integer'
        ]);

        try {
            $incidentes->fill($request->all());
            $incidentes->update();
            return response()->json(['message' => 'Incidente atualizado com sucesso!']);
        } catch (\Exception $ex) {
            return response()->json(['message' => 'Ocorreu um erro ao atualizar o incidente. Contacte o administrador.'], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Incidentes  $incidentes
     * @return \Illuminate\Http\Response
     */
    public function destroy(Incidentes $incidentes)
    {
        try {
            $incidentes->delete();
            return response()->json(['message' => 'Incidente excluido com sucesso!']);
        } catch (\Exception $ex) {
            return response()->json(['message' => 'Ocorreu um erro ao excluir o incidente. Contacte o administrador.'], 500);
        }
    }
}
