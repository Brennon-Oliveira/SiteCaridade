<?php $this->layout('template/layout', 
                    [
                        'css_page' => 'posts',
                        'title'=>'Projeto Caridade – Posts'
                    ]) 
?>

<?php $this->unshift('styles') ?>
<?php $this->end() ?>
<?php $this->start('page') ?>

<div class="container">
  <div class="grid-container">

    <div class="search">
      <div class="search-box">
        <h2>Pesquisar:</h2>
        <form method="GET">
          <div class="fontawesome">
            <label for="Pesquisar">
              <input type="text" name="Pesquisar" id="Pesquisar" required>
              <button type="submit">
                <i class="fa fa-search"></i>
              </button>
            </label>
          </div>
        </form>
      </div>

      <div class="classify">
        <h2>Classificar por:</h2>
        <form>
          <label for="Classificar"><input class="classificar" type="text" placeholder="Classificar por likes" /></label>
          <button>Filtrar!</button>
        </form>
      </div>
    </div>

    <div class="posts">
      <div class="post-single">
        <img alt="avatar" src="assets/images/no-profile-img.jpg" />
        <div class="text-post">

          <h2>Cotao Jacarezão Perdoa n</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum turpis elit, dictum a velit sed, accumsan bibendum ex. Nunc risus arcu, dictum id rhoncus eget, accumsan nec orci. Praesent acLorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum turpis elit, dictum a velit sed, accumsan bibendum ex. Nunc risus arcu, dictum id rhoncus eget, accumsan nec orci. Praesent ac..</p>
        </div>
      </div>
      <div class="post-single">
        <img alt="avatar" src="assets/images/no-profile-img.jpg" />
        <div class="text-post">

          <h2>Cotao Jacarezão Perdoa n</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum turpis elit, dictum a velit sed, accumsan bibendum ex. Nunc risus arcu, dictum id rhoncus eget, accumsan nec orci. Praesent acLorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum turpis elit, dictum a velit sed, accumsan bibendum ex. Nunc risus arcu, dictum id rhoncus eget, accumsan nec orci. Praesent ac..</p>
        </div>
      </div>
      <div class="post-single">
        <img alt="avatar" src="assets/images/no-profile-img.jpg" />
        <div class="text-post">

          <h2>Cotao Jacarezão Perdoa n</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum turpis elit, dictum a velit sed, accumsan bibendum ex. Nunc risus arcu, dictum id rhoncus eget, accumsan nec orci. Praesent acLorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum turpis elit, dictum a velit sed, accumsan bibendum ex. Nunc risus arcu, dictum id rhoncus eget, accumsan nec orci. Praesent ac..</p>
        </div>
      </div>
    </div>
  </div>
</div>

<?php $this->stop() ?>
<?php $this->push('scripts') ?>
<?php $this->end() ?>