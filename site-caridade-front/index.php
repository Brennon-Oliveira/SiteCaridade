<?php
    include('config.php');
    $url = isset($_GET['url']) ? $_GET['url'] : 'home';
    # verifica se a url foi alterada e salva na variavel url
?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=7">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="description" content="">
    <meta name="keywords" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" type="text/css" href="assets/css/colors.css">
    <link rel="stylesheet" type="text/css" href="assets/css/icons.css">
    <link rel="stylesheet" type="text/css" href="assets/css/fonts.css">
    <link rel="stylesheet" type="text/css" href="assets/css/global.css">
    <?php
        switch ($url) {
            case 'home':
                echo '<link rel="stylesheet" type="text/css" href="assets/css/index.css">';
            break;
            case 'cadastrar':
                echo '<link rel="stylesheet" type="text/css" href="assets/css/register.css">';
            break;
            case 'login':
                echo '<link rel="stylesheet" type="text/css" href="assets/css/register.css">';
            break;
            case 'usuario':
                echo '<link rel="stylesheet" type="text/css" href="assets/css/user.css">';
            break;
            case 'posts':
                echo '<link rel="stylesheet" type="text/css" href="assets/css/posts.css">';
            break;
        }
    ?>
    <title>Site Caridade</title>
</head>
<body>


    <?php
        switch ($url) {
            case 'sobre':
                echo '<target target="sobre">';
            break;
            case 'servicos':
                echo '<target target="servicos">';
            break;
            case 'contato':
                echo '<target target="contato">';
            break;
            # verifica se a url é um elemento inPage, se for, criar uma tag 'target' com um atributo 'target'
            # essa tag serve para criar uma comunicação fácil entre php e javascript sem json
            # assim o java script ve a informção e da scroll automático no site 
        }
    ?>

    <?php
        if($url != 'cadastrar' && $url != 'login' && $url != 'home'){
            include('pages/header.html');
        }
    ?>

    <?php
        # verifica se existe um arquivo com o nome passado na url na pasta pages
        if(file_exists('pages/'.$url.'.html')){
            include('pages/'.$url.'.html');
            # caso aja, inclui esse arquivo
        } else {
            # caso não aja, detecta se é algum paramentro inPage 
            if($url != 'sobre' && $url != 'servicos' && $url != 'contato' && $url != ''){
                # se não for, ativa a variável $pagina404 e inclui a página de erro404;
                $pagina404 = true;
                // include('pages/404.php');
            } else {
                # se for, inclui a home do site
                include('pages/home.html');
            }
        }
    ?>
    
    <?php
        if($url != 'cadastrar' && $url != 'login'){
            include('pages/footer.html');
        }
    ?>
    

    <script src="assets/js/jquery.min.js"></script>
    <script src="assets/js/menuMobile.js"></script>
</body>
</html>