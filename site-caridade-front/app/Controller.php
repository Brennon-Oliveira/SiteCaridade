<?php

namespace App;

class Controller
{
    public function render(string $name, array $data = []): void
    {   
        extract($data);
        require_once '../views/'.$name.'.php';
    }
}