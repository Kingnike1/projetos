<?php
require_once 'conexao.php';
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../vendor/autoload.php'; 

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $action = $_POST['action'];

    if ($action == "esqueci_senha") {
        $email = mysqli_real_escape_string($conexao, $_POST['email']);

        // Verifica se o email existe no banco de dados
        $query_usuario = "SELECT * FROM usuarios WHERE email = '$email'";
        $resultado = mysqli_query($conexao, $query_usuario);

        if ($resultado && $usuario = mysqli_fetch_assoc($resultado)) {
            // Gera um token de recuperação único
            $token = bin2hex(random_bytes(50));
            $data_expiracao = date("Y-m-d H:i:s", strtotime('+1 hour'));

            $update_token = "UPDATE usuarios SET recovery_token = '$token', recovery_token_expiration = '$data_expiracao' WHERE email = '$email'";

            if (mysqli_query($conexao, $update_token)) {
                $link = "http://example.com/redefinicao_senha.php?token=$token";
                try {
                    $mail = new PHPMailer(true);
                
                    // Configuração SMTP
                    $mail->isSMTP();
                    $mail->Host       = 'smtp.gmail.com';
                    $mail->SMTPAuth   = true;
                    $mail->Username   = 'testedev19@gmail.com';
                    $mail->Password   = 'teste123!';
                    $mail->SMTPSecure = 'tls';
                    $mail->Port       = 587;
                
                    $mail->SMTPDebug = 2;  // Ativação do debug SMTP
                
                    $mail->setFrom('no-reply@example.com', 'Suporte');
                    $mail->addAddress($email);
                
                    $mail->isHTML(true);
                    $mail->Subject = "Recuperação da Conta";
                    $mail->Body    = "<p><a href='$link'>Redefina sua senha</a></p>";
                
                    if ($mail->send()) {
                        echo "Email enviado com sucesso!";
                    } else {
                        echo "Erro SMTP: {$mail->ErrorInfo}";
                    }
                } catch (Exception $e) {
                    echo "Erro: {$mail->ErrorInfo}";
                }
            }
        }
    }
}
?>
