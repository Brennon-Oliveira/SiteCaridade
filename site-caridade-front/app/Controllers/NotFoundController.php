<?php

namespace App\Controllers;

use App\Controller;

class NotFoundController extends Controller
{
    public function index(): void
    {  
        $this->render('404');
    }
}        