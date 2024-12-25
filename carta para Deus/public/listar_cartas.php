<?php
require_once 'conexao.php';

// Consulta para pegar todas as cartas com prepared statements
// Consulta para pegar todas as cartas com prepared statements
$sql = "SELECT id, nome, mensagem, assunto, anonimo, data_envio FROM cartas";
$stmt = $conexao->prepare($sql);
$stmt->execute();
$resultado = $stmt->get_result();

// Função para exibir as cartas
// Função para exibir as cartas
function exibirCarta($id, $nome, $mensagem, $assunto, $data_envio)
{
    $nomeExibido = ($nome == '1') ? 'Anônimo' : htmlspecialchars($nome);
    $dataFormatada = date('d/m/Y H:i', strtotime($data_envio));
    $mensagemExibida = nl2br(htmlspecialchars($mensagem));

    // Gerar o HTML da carta
    echo "<div class='carta' data-id='$id' data-nome='$nomeExibido' data-mensagem='$mensagemExibida' data-assunto='$assunto' data-data='$dataFormatada'>";
    echo "<div class='carta-header'>";
    echo "<p><strong>Nome:</strong> $nomeExibido</p>";
    echo "<p class='assunto'><strong>Assunto:</strong> $assunto</p>"; // Exibe o assunto
    echo "<p><small><strong>Enviada em:</strong> $dataFormatada</small></p>";
    echo "</div>";
    echo "<div class='carta-body'>";
    echo "<p><strong>Mensagem:</strong></p>";
    echo "<p>$mensagemExibida</p>";
    echo "</div>";
    echo "</div>";
}

?>

<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cartas para Deus - Listagem</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../public/css/carta.css">
</head>

<body>
    <header class="bg-primary text-white text-center py-4 mb-4">
        <h1>Cartas para Deus</h1>
        <nav>
            <a href="../public/formulario.php" class="btn btn-light">Voltar para a página inicial</a>
        </nav>
    </header>
    <main>
        <h2>Cartas Enviadas</h2>
        <div class="cartas-lista">
            <?php
            // Exibir todas as cartas
            if ($resultado->num_rows > 0) {
                while ($linha = $resultado->fetch_assoc()) {
                    exibirCarta($linha['id'], $linha['nome'], $linha['mensagem'], $linha['assunto'], $linha['data_envio']);
                }
            } else {
                echo "<p>Nenhuma carta foi enviada até o momento. Que tal enviar a sua?</p>";
            }
            ?>
        </div>
    </main>

    <!-- Modal (Pop-up) -->
    <div id="modal" class="modal">
        <div class="modal-content animate__animated">
            <span class="close" id="close-btn">&times;</span>
            <h2>Carta Detalhada</h2>
            <p><strong>Nome:</strong> <span id="modal-nome"></span></p>
            <p><strong>Assunto:</strong> <span id="modal-assunto"></span></p>
            <p><strong>Mensagem:</strong></p>
            <p id="modal-mensagem"></p>
            <p><small><strong>Enviada em:</strong> <span id="modal-data"></span></small></p>
        </div>
    </div>

    <script src="./js/script.js">
    </script>
</body>

</html>