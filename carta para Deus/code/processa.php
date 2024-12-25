<?php
ob_start(); // Inicia o buffer de saída
require_once 'conexao.php';
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $action = $_POST['action'];
    if ($action == "0") {
        // **Login**
        $email = $_POST['email_login'];
        $senha = $_POST['senha_login'];

        $query_login = "SELECT * FROM usuarios WHERE email = '$email'";
        $resultado_login = mysqli_query($conexao, $query_login);

        if ($resultado_login && $usuario = mysqli_fetch_assoc($resultado_login)) {
            if (password_verify($senha, $usuario['senha'])) {
                echo "Login bem-sucedido! Bem-vindo, " . $usuario['nome'];
                header('Location: ../public/dashboard.php');
            } else {
                echo "Erro ao fazer login! Verifique o e-mail e a senha.";
            }
        } else {
            echo "Erro ao fazer login! Usuário não encontrado.";
        }

    }
    else {
        // **Cadastro**
        $nome = $_POST['nome'];
        $email = $_POST['email'];
        $senha = $_POST['senha'];
        
        $confirmar_senha = $_POST['confirmar_senha'];

        // Verificar se as senhas correspondem
        if ($senha !== $confirmar_senha) {
            echo "As senhas não correspondem!";
            exit();
        }

        // Checar se o email já existe no banco de dados
        $query_email = "SELECT * FROM usuarios WHERE email = '$email'";
        $resultado_email = mysqli_query($conexao, $query_email);

        if (mysqli_num_rows($resultado_email) > 0) {
            echo "Erro: Email já cadastrado!";

            exit();
        }

        // Hash das senhas para maior segurança
        $senha_hash = password_hash($senha, PASSWORD_DEFAULT);

        // Processar a foto (opcional)
        $foto = '';
        if (isset($_FILES['foto']) && $_FILES['foto']['name'] != '') {
            $diretorio = "uploads/";
            if (!file_exists($diretorio)) {
                mkdir($diretorio, 0777, true);
            }
            $nome_foto = time() . $_FILES['foto']['name'];
            $caminho = $diretorio . $nome_foto;

            if (move_uploaded_file($_FILES['foto']['tmp_name'], $caminho)) {
                $foto = $caminho;
            }
        }

        // Inserir os dados no banco de dados
        $query_cadastro = "INSERT INTO usuarios (nome, email, senha, foto) VALUES ('$nome', '$email', '$senha_hash', '$foto')";

        if (mysqli_query($conexao, $query_cadastro)) {
            echo "Cadastro realizado com sucesso!";
            header('Location: ../public/dashboard.php');
        } else {
            echo "Erro ao cadastrar: " . mysqli_error($conexao);
        }
    }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $action = $_POST['action'];

    if ($action == "esqueci_senha") {
        $email = $_POST['email'];
        
        // Verifica se o email existe no banco de dados
        $query_usuario = "SELECT * FROM usuarios WHERE email = '$email'";
        $resultado = mysqli_query($conexao, $query_usuario);

        if ($resultado && $usuario = mysqli_fetch_assoc($resultado)) {
            // Gera um token de recuperação único
            $token = bin2hex(random_bytes(50));
            $data_expiracao = date("Y-m-d H:i:s", strtotime('+1 hour'));

            // Armazena o token e a data de expiração no banco de dados
            $update_token = "UPDATE usuarios SET recovery_token = '$token', recovery_token_expiration = '$data_expiracao' WHERE email = '$email'";

            if (mysqli_query($conexao, $update_token)) {
                $link = "http://example.com/redefinicao_senha.php?token=$token";

                // Envia email ao usuário
                $assunto = "Recuperação da Conta";
                $mensagem = "Clique no link para redefinir sua senha: $link";
                $headers = "From: no-reply@example.com";

                if (mail($email, $assunto, $mensagem, $headers)) {
                    echo "Link de recuperação enviado ao seu email!";
                } else {
                    echo "Erro ao enviar email. Tente novamente.";
                }
            }
        } else {
            echo "Email não encontrado no sistema.";
        }
    }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
if ($action == "redefinir_senha") {
    $nova_senha = $_POST['nova_senha'];
    $confirmar_senha = $_POST['confirmar_senha'];
    $token = $_POST['token'];

    if ($nova_senha === $confirmar_senha) {
        $nova_senha_hash = password_hash($nova_senha, PASSWORD_DEFAULT);

        $update_senha = "UPDATE usuarios SET senha = '$nova_senha_hash', recovery_token = NULL, recovery_token_expiration = NULL WHERE recovery_token = '$token'";

        if (mysqli_query($conexao, $update_senha)) {
            echo "Senha redefinida com sucesso!";
            header("Location: ../public/dashboard.php");
        } else {
            echo "Erro ao redefinir a senha. Tente novamente.";
        }
    } else {
        echo "As senhas não correspondem.";
    }
}
ob_end_flush(); // Finaliza o buffer e envia todo o conteúdo ao navegador
?>
