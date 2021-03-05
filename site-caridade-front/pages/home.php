<header id='header-home'>
    <div class="container">
        <header>
            <div class="logo">
                <h2><a href="<?php echo INCLUDE_PATH ?>home">Projeto Caridade</a></h2>
            </div>
            <nav aria-label="Menu no esitlo de desktop" class="desktop">
                <ul>
                    <li><a href="<?php echo INCLUDE_PATH ?>home">Home</a></li>
                    <li><a href="<?php echo INCLUDE_PATH ?>sobre">Sobre</a></li>
                    <li><a href="<?php echo INCLUDE_PATH ?>contato">Contato</a></li>
                    <li><a href="<?php echo INCLUDE_PATH ?>posts">Posts</a></li>
                    <li><a href="<?php echo INCLUDE_PATH ?>">Doar</a></li>
                    <li><a href="<?php echo INCLUDE_PATH ?>login">Entrar</a></li>
                </ul>
            </nav>

            <nav aria-label="Menu no esitlo de celular" class="mobile">
                <i class='menuMobileBtn fas fa-bars'></i>
                <ul class="menuMobileContent">
                    <li><a href="<?php echo INCLUDE_PATH ?>home">Home</a></li>
                    <li><a href="<?php echo INCLUDE_PATH ?>sobre">Sobre</a></li>
                    <li><a href="<?php echo INCLUDE_PATH ?>contato">Contato</a></li>
                    <li><a href="<?php echo INCLUDE_PATH ?>posts">Posts</a></li>
                    <li><a href="<?php echo INCLUDE_PATH ?>">Doar</a></li>
                    <li><a href="<?php echo INCLUDE_PATH ?>login">Entrar</a></li>
                </ul>
            </nav>
        </header>
        <div class="bannerMessage">
            <h2>Uma organização focada no futuro<br/>das crianças e adolecentes</h2>
        </div>
    </div>
</header>

<section id="sobre">
    <div class="container-min">
        <h2 class="titulo">Sobre</h2>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultrices eget metus ut ultricies. Vestibulum convallis aliquam tellus ac suscipit. Maecenas luctus, ex in rhoncus scelerisque, massa lacus maximus massa, non imperdiet risus turpis id magna. Proin rhoncus eget eros quis eleifend. Donec tempus mattis dui, vitae vestibulum nisi lacinia at. Nam nec sapien pellentesque, porta massa et, vestibulum elit. Curabitur a facilisis libero. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
        <p>Fusce rhoncus sed ex et maximus. In hac habitasse platea dictumst. Vivamus aliquet ante eu dui scelerisque, eu ultricies nibh volutpat. Aenean fringilla risus nunc, imperdiet ornare arcu euismod vel. Nam luctus ac elit et congue. Vestibulum augue leo, sollicitudin at tellus at, tincidunt cursus tortor. Nam viverra est vel iaculis vestibulum.</p>
    </div>
</section>

<section id="como-nos-ajudar">
    <div class="container-min">
        <h2 class="titulo">Como nos ajudar</h2>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultrices eget metus ut ultricies. Vestibulum convallis aliquam tellus ac suscipit. Maecenas luctus, ex in rhoncus scelerisque, massa lacus maximus massa, non imperdiet risus turpis id magna. Proin rhoncus eget eros quis eleifend. Donec tempus mattis dui, vitae vestibulum nisi lacinia at. Nam nec sapien pellentesque, porta massa et, vestibulum elit. Curabitur a facilisis libero. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
        
        <p>Morbi ullamcorper, mi at dignissim faucibus, orci erat hendrerit nulla, et feugiat lacus massa quis libero. Curabitur ante dolor, vulputate et accumsan ac, rhoncus id arcu. Proin eu ipsum porttitor, porttitor ex et, aliquam sem. Sed eget cursus elit. Proin elit libero, semper pretium congue et, ullamcorper vel sem. Duis pulvinar accumsan condimentum. Donec id risus vel velit commodo sagittis. Aenean ac dolor mauris.</p>
        
        <div><a aria-label="Doação" href="">Doar</a></div>
    </div>
</section>

<section id="entre-em-contato">
    <div class="container-min">
        <form id="msform" method="post">
            <fieldset class="titulo">
                <legend class='titulo'>Entre em contato</legend>
                <label for="name"><input type="text" name="email" placeholder="Nome..." required /></label>
                <label for="email"><input type="email" name="pass" placeholder="Email..." required /></label>
                <label for="number"><input type="tel" name="cpass" placeholder="Telefone..." /></label>
                <label for="message"><textarea name="message" id="message" placeholder="Mensagem..."></textarea></label>
                <input type="submit" name="enviar" class="action-button" value="Enviar" />
            </fieldset>
          </form>
    </div>
</section>