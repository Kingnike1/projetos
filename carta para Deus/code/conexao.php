<?php
$servidor = "db";
$usuario = "root";
$senha = "123";
$banco = "cartas";


$conexao = mysqli_connect($servidor, $usuario, $senha, $banco);
if (!$conexao) {
    die("Falha na conexão com o banco de dados: " . mysqli_connect_error());
}
