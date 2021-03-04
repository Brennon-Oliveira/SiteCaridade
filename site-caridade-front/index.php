<?php
    include('config.php');
    $url = isset($_GET['url']) ? $_GET['url'] : 'home';
    # verifica se a url foi alterada e salva na variavel url

    if(file_exists('pages/'.$url.'.php')){
    } else {
        # caso não aja, detecta se é algum paramentro inPage 
        if($url != 'sobre' && $url != 'servicos' && $url != 'contato' && $url != ''){
            # se não for, ativa a variável $pagina404 e inclui a página de erro404;
            $pagina404 = true;
            $url = '404';
        } else {
            # se for, inclui a home do site
            $url = 'home';
        }
    }
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
    if($url == 'home' || $url == 'sobre' || $url =='contato'){
        echo '<link rel="stylesheet" type="text/css" href="assets/css/index.css">';
    } else if($url == 'cadastrar' || $url =='login'){
        echo '<link rel="stylesheet" type="text/css" href="assets/css/register.css">';
    }else if($url == 'usuario'){
        echo '<link rel="stylesheet" type="text/css" href="assets/css/user.css">';
    }else if($url == 'posts'){
        echo '<link rel="stylesheet" type="text/css" href="assets/css/posts.css">';
    } else if($url == '404') {
        echo '<link rel="stylesheet" href="assets/css/404.css">';
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
        if($url != 'cadastrar' && $url != 'login' && $url != 'home' && $url!='sobre' && $url!='contato'){
            include('pages/header.php');
        }
    ?>

    <?php
        # verifica se existe um arquivo com o nome passado na url na pasta pages
        if(file_exists('pages/'.$url.'.php')){
            include('pages/'.$url.'.php');
            # caso aja, inclui esse arquivo
        } else {
            include('pages/404.php');
        }
    ?>
    
    <?php
        if($url != 'cadastrar' && $url != 'login'){
            include('pages/footer.php');
        }
    ?>
    

    <script src="assets/js/jquery.min.js"></script>
    <script src="https://kit.fontawesome.com/893c7682a5.js" crossorigin="anonymous"></script>
    <script src="assets/js/menuMobile.js"></script>
</body>
</html>