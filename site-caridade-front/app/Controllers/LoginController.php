<?php

namespace App\Controllers;

use App\Controller;

class LoginController extends Controller
{
    public function index(): void
    {  
        $this->render('login');
    }
}        