<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard Principal</title>
    <link rel="stylesheet" href="./css/dashboard.css">
</head>
<body>

    <!-- Menu de Navegação -->
    <nav>
        <h2>Menu</h2>
        <ul>
            <li><a href="formulario.php">Escrever Carta</a></li>
            <li><a href="#">Minhas Cartas</a></li>
            <li><a href="#">Perfil</a></li>
            <li><a href="#">Comunhão</a></li>
            <li><a href="#">Configurações</a></li>
            <li><a href="#">Sair</a></li>
        </ul>
    </nav>

    <!-- Dashboard Principal -->
    <main>
        <h1>Dashboard</h1>

        <!-- Resumo Motivacional -->
        <div id="resumo">
            <h2>Resumo Motivacional</h2>
            <div id="destaques">
                <p><strong>Cartas Escritas:</strong> <span id="num-cartas">45</span></p>
                <p><strong>Mensagens Inspiradoras:</strong></p>
                <blockquote id="mensagem-inspiradora">
                    "A vida é como uma carta. Escreva sua própria história."
                </blockquote>
            </div>
        </div>
    </main>

    <script src="./js/dashboard.js"></script>
</body>
</html>
