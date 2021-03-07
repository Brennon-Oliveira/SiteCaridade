<?php

/**
 * https://github.com/erandirjunior/plug-route/blob/master/doc/defining-routes.md
 */

use \PlugRoute\PlugRoute;
use \PlugRoute\RouteContainer;
use \PlugRoute\Http\RequestCreator;

$route = new PlugRoute(new RouteContainer(), RequestCreator::create());

$route->notFound(function() 
{
   header('Location:/404');
});

$route->namespace('\\App\\Controllers', function($route) 
{
    $route->get('/', '\\HomeController@index'); 
    $route->get('/404', '\\NotFoundController@index');
});

$route->namespace('\\App\\Controllers', function($route) 
{
    $route->post('/', '\\HomeController@create'); 
});

$route->on();