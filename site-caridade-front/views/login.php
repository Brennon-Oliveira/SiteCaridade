<?php $this->layout('template/layout', 
                    [
                        'css_page' => 'register',
                        'title'=>'Projeto Caridade – Entrar'
                    ]) 
?>

<?php $this->unshift('styles') ?>
<?php $this->end() ?>
<?php $this->start('page') ?>

<div class="register">
    <form>
        <h2>Entrar</h2>
        <label for="name" class="input-container">
            <input id="name" type="name" placeholder="Nome..." required>
        </label>
        <label for="email" class="input-container">
            <input id="email" type="email" placeholder="Email..." required>
        </label>
        <label for="password" class="input-container">
            <input id="password" type="password" placeholder="Senha..." required>
        </label>
        <label for="evniar" class="input-submit-container">
            <input id="evniar" type="submit" value="Entrar!">
        </label>
        <a href="/register">Ainda não tem uma conta?</a>
    </form>
</div>

<?php $this->stop() ?>
<?php $this->push('scripts') ?>
<?php $this->end() ?>