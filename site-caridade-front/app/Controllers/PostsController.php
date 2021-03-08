<?php

namespace App\Controllers;

use App\Controller;

class PostsController extends Controller
{
    public function index(): void
    {  
        $this->render('posts');
    }
}        