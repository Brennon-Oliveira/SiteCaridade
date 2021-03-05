<?php

namespace App\Controllers;

use App\Controller;
use App\Services\Mail;

class HomeController extends Controller
{
    public function index(): void
    {   
        $this->render('home');
    }
}