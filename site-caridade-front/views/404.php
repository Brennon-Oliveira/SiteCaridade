<?php $this->layout('template/layout', 
                    [
                        'css_page' => '404',
                        'title'=>'Projeto Caridade – Erro 404'
                    ]) 
?>

<?php $this->unshift('styles') ?>
<?php $this->end() ?>
<?php $this->start('page') ?>

<div class="container">
    <div class="grid-container">
        <div class="404">
            <h1>ERRO 404</h1>
            <h2>PÁGINA NÃO ENCONTRADA</h2>
            <p>A página que você procurou não existe, por favor, retorne à página inicial. Caso acredite ser um erro do site, por favor, reporte na sessão de reporte!</p>
        </div>
        <div class="return">
            <a aria-label="Retornar à página inicial" href="<?=BASE_URL?>/">Retornar à página inicial</a>
        </div>
        <div class="report">
            <a aria-label="Reportar o erro" href="<?=BASE_URL?>/report">Reportar o erro</a>
        </div>
    </div>
</div>

<?php $this->stop() ?>  
<?php $this->push('scripts') ?>
<?php $this->end() ?>