<?php
require_once 'conexao.php';

$nome = isset($_POST['nome']) ? $_POST['nome'] : ''; // Se o nome for deixado em branco, não será registrado
$mensagem = $_POST['mensagem'];
$assunto = $_POST['assunto']; // Captura o assunto
$anonimo = isset($_POST['anonimo']) ? 1 : 0; // Se o checkbox for marcado, será 1 (anônimo)

if ($anonimo == 1) {
    $nome = 'Anônimo'; // Se for anônimo, define o nome como "Anônimo"
}

// Preparar a query de inserção
$sql = "INSERT INTO cartas (nome, mensagem, assunto, anonimo, data_envio) 
        VALUES ('$nome', '$mensagem', '$assunto', '$anonimo', NOW())";

// Executar a query
if (mysqli_query($conexao, $sql)) {
    header("Location: ../public/confirmacao.php");
    exit();
} else {
    echo "Erro ao enviar a carta.";
}
?>
