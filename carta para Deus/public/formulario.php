<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cartas para Deus</title>
    <!-- Link para o Bootstrap -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css" rel="stylesheet">
    <!-- Link para incluir os ícones FontAwesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">

    <link rel="stylesheet" href="./css/style.css">
    <link rel="stylesheet" href="./css/checkbox.css">
</head>

<body>
    <header class="bg-primary text-white text-center py-4 mb-4">
        <h1>Cartas para Deus</h1>
        <p>Escreva seus pensamentos e orações</p>
        <a href="../public/listar_cartas.php" class="btn btn-light">Ver Cartas Enviadas</a>
    </header>

    <!-- Centralizando o iframe -->
    <div class="container mb-4">
        <iframe src="https://kingnike1.github.io/versiculobiblico/" class="w-100"></iframe>
    </div>

    <main class="container">
        <h2 class="text-center mb-4">Escreva sua Carta</h2>

        <form action="../code/banco_carta.php" method="post">
            <!-- Campo de Nome -->
            <div class="mb-3">
                <label for="name" class="form-label">
                    <i class="fas fa-user"></i> Seu Nome (opcional):
                </label>
                <input type="text" id="name" name="nome" class="form-control" placeholder="Digite seu nome">
            </div>

            <!-- Checkbox para envio anônimo -->
            <div class="mb-3 form-check">
                <input type="checkbox" id="anonimo" name="anonimo" value="1" class="form-check-input">
                <label for="anonimo" class="form-check-label">
                    <i class="fas fa-user-secret"></i> Enviar de forma anônima
                </label>
            </div>

            <!-- Campo do Assunto -->
            <div class="mb-3">
                <label for="assunto" class="form-label">
                    <i class="fas fa-bullhorn"></i> Assunto:
                </label>
                <input type="text" id="assunto" name="assunto" class="form-control" placeholder="Digite o assunto da carta">
            </div>

            <!-- Campo da Mensagem -->
            <div class="mb-3">
                <label for="message" class="form-label">
                    <i class="fas fa-envelope"></i> Sua Carta:
                </label>
                <textarea id="message" name="mensagem" class="form-control" rows="5" placeholder="Escreva sua mensagem para Deus...
Não precisa ser perfeita, mas que seja sincera de coração e alma. Uma dica: ouça uma música que ajude a refletir e encontrar suas palavras."></textarea>
            </div>

            <button type="submit" class="btn btn-primary">
                <i class="bi bi-envelope"></i> Enviar Carta
            </button>
        </form>
    </main>
    <footer>
        <p>✨ Que sua mensagem alcance as estrelas! ✨</p>
        <p>
            Feito com 💙 por <a href="https://github.com/Kingnike1/" target="_blank">Um filho Deus</a><br>
            Inspirado no Filme Cartas para Deus
        </p>
        <p>&copy; 2024 Todos os direitos reservados.</p>
    </footer>

    <!-- Inclusão do script do Bootstrap -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>

</html>