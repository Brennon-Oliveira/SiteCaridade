<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <title>Serviço de E-mail</title>
</head>
<body>
    <form method="post">
        <div class="container">
            <div class="row">
            <div class="col-md-12">
                <h1 class="d-flex justify-content-center mt-5">Formulário de E-mail</h1>
                <div class="row">
                    <?php if (isset($alert) && !empty($alert)): ?>
                    <div class="col-md-12">
                        <div class="alert alert-dismissible alert-<?= $alert['type']; ?>">
                            <?php echo $alert['msg']; ?>
                            <button class="close" type="button" data-dismiss="alert">x</button>
                        </div>
                    </div>
                    <?php endif; ?>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="name">Nome:</label>
                            <input type="text" id="nome" name="name" class="form-control" placeholder="Digite seu nome" required>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="email">E-mail:</label>
                            <input type="email" id="email" name="email" class="form-control" placeholder="Digite seu e-mail" required>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="form-group">
                            <label for="message">Messagem:</label>
                            <textarea name="message" id="message" class="form-control" cols="30" rows="10" required></textarea>
                        </div>
                    </div>
                    <div class="col-md-12 d-flex flex-row-reverse">
                        <button type="submit" class="btn btn-success">Enviar</button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </form>
    <!--formulário -->
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
</body>
</html>