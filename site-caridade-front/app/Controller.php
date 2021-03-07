<?php

namespace App;

use League\Plates\Engine;

class Controller
{
    private $view;

    public function __construct()
    {
        $this->view = new Engine(__DIR__.'/../views', 'php');
    }
     
    public function render(string $name, array $data = []): void
    {   
        echo $this->view->render($name,$data);
    }
}