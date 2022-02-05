<?php

namespace App\Http\Controllers;

class HomeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data['config_incidentes'] = json_encode(config('incidentes'));
        
        return view('app', $data);
    }

}