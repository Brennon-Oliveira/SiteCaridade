<?php

namespace App\Controllers;

use App\Controller;

class HomeController extends Controller
{
    public function index(): void
    {   
       $data['name'] = "Eduardo";
       $this->render('home', $data);
    }
}