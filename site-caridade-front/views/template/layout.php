<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=7">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="description" content="">
    <meta name="keywords"    content="">
    <meta name="viewport"    content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="/assets/css/colors.css">
    <link rel="stylesheet" type="text/css" href="/assets/css/icons.css">
    <link rel="stylesheet" type="text/css" href="/assets/css/fonts.css">
    <link rel="stylesheet" type="text/css" href="/assets/css/global.css">
    <link rel="stylesheet" type="text/css" href="/assets/css/<?=$this->e($css_page)?>.css">
    <?=$this->section('styles')?>
<title><?=$this->e($title)?></title>
</head>

<body>
    <header id="header">
        <div class="container">
            <div class="logo">
                <h2><a href="/home">Projeto Caridade</a></h2>
            </div>
            <nav aria-label="Menu no esitlo de desktop" class="desktop">
                <ul>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/sobre">Sobre</a></li>
                    <li><a href="/contato">Contato</a></li>
                    <li><a href="/posts">Posts</a></li>
                    <li><a href="/">Doar</a></li>
                    <li><a href="/login">Entrar</a></li>
                </ul>
            </nav>

            <nav aria-label="Menu no esitlo de celular" class="mobile">
                <i class='menuMobileBtn fas fa-bars'></i>
                <ul class="menuMobileContent">
                    <li><a href="/home">Home</a></li>
                    <li><a href="/sobre">Sobre</a></li>
                    <li><a href="/contato">Contato</a></li>
                    <li><a href="/posts">Posts</a></li>
                    <li><a href="/">Doar</a></li>
                    <li><a href="/login">Entrar</a></li>
                </ul>
            </nav>
        </div>
    </header>
    <!--header-->
    <?=$this->section('page')?>

    <script src="assets/js/jquery.min.js"></script>
    <script src="https://kit.fontawesome.com/893c7682a5.js" crossorigin="anonymous"></script>
    <script src="assets/js/menuMobile.js"></script>
    <?=$this->section('scripts')?>
    
    <section id="top-footer">
        <div class="container">
            <div class="mapa-do-site">
                <h3>Mapa do site</h3>
                <div class="grupos-de-mapa">
                    <div class="lista-1">
                        <ul>
                            <li><a href="/>home">Home</a></li>
                            <li><a href="/>sobre">Sobre</a></li>
                            <li><a href="/>posts">Posts</a></li>
                        </ul>
                    </div>
                    <div class="lista-2">
                        <ul>
                            <li><a href="/>home">Entrar</a></li>
                            <li><a href="/>sobre">Contato</a></li>
                            <li><a href="/>posts">Doar</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="redes-sociais">
                <h3>Redes sociais</h3>
                <ul>
                    <li><a aria-label="Youtube" href=""><i class="fab fa-youtube"></i></a></li>
                    <li><a aria-label="WhatsApp" href=""><i class="fab fa-whatsapp"></i></a></li>
                    <li><a aria-label="Twitter" href=""><i class="fab fa-twitter"></i></a></li><br/>
                    <li><a aria-label="Facebook" href=""><i class="fab fa-facebook-f"></i></a></li>
                    <li><a aria-label="Linkedin" href=""><i class="fab fa-linkedin"></i></i></a></li>
                    <li><a aria-label="Instagram" href=""><i class="fab fa-instagram"></i></a></li>
                </ul>
            </div>
            <div class="endereco">
                <h3>Endereço</h3>
                <p>Rodovia BR 376 - Km 502</p>
                <p>Ponta Grossa/PR</p>
                <p>CEP 84043-450</p>
            </div>
        </div>
    </section>

    <footer id="footer">
        <div class="container">
            <p>© 2016-<?php echo date('Y'); ?> Site de Caridade</p>
            <p><a aria-label="Lista de desenvolvedores" href="https://github.com/Brennon-Oliveira/SiteCaridade/graphs/contributors">Conheça os desenvolvedores</a></p>
        </div>
    </footer>
</body>
</html>
