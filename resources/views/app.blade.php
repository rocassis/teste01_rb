<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="initial-scale=1, width=device-width"/>
        <title>Incidentes SPA</title>
        <link rel="stylesheet" href="{{ asset('css/app.css')}}">
    </head>
    
    <body>
        <input type="hidden" id="config_inicidentes" value="{{ $config_incidentes ?? '' }}">
        <div id="app"></div>       
        <script src="{{asset('js/app.js')}}"></script>
    </body>

</html>