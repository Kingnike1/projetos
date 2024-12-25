<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulário de Login e Cadastro</title>
    <link rel="stylesheet" type="text/css" href="./css/login.css" />
</head>

<body>

    <div class="container">
        <a class="links" id="paracadastro"></a>
        <a class="links" id="paralogin"></a>

        <div class="content">

            <!-- FORMULÁRIO DE LOGIN -->
            <div id="login">
                <form method="post" action="../code/processa.php">
                    <h1>Login</h1>
                    <p><label for="nome_login">Seu email</label>
                        <input id="nome_login" name="email_login" required type="text" placeholder="ex. contato@htmlecsspro.com" />
                    </p>

                    <p><label for="email_login">Sua senha</label>
                        <input id="email_login" name="senha_login" type="password" placeholder="Senha" />
                    </p>

                    <!-- Input hidden -->
                    <input type="hidden" id="action" name="action" value="0">
                    <p><input type="submit" value="Logar" /></p>

                    <p class="link">Ainda não tem conta?
                        <a href="#paracadastro">Cadastre-se</a>
                    </p>
                    <p class="link2">
                        <a href="../public/esqueci_senha.php">Esqueci Minha Senha</a>
                    </p>
                </form>
            </div>

            <!-- FORMULÁRIO DE CADASTRO -->
            <div id="cadastro">
                <form id="form-cadastro" method="post" action="../code/processa.php">
                    <h1>Cadastro</h1>

                    <p><label for="nome_cad">Seu nome</label>
                        <input id="nome_cad" name="nome" required type="text" placeholder="Nome" />
                    </p>

                    <p><label for="email_cad">Seu e-mail</label>
                        <input id="email_cad" name="email" type="email" placeholder="contato@htmlecsspro.com" />
                    </p>

                    <p><label for="senha_cad">Senha</label>
                        <input id="senha_cad" name="senha" type="password" placeholder="Senha" />
                    </p>

                    <p><label for="confirmar_senha">Confirmar Senha</label>
                        <input id="confirmar_senha" name="confirmar_senha" type="password" placeholder="Confirme a senha" />
                    </p>

                    <p id="mensagemErro" style="color: red;"></p>

                    <!-- Input hidden -->
                    <input type="hidden" id="action" name="action" value="1">
                    <p><input type="submit" value="Cadastrar" /></p>

                    <p class="link">Já tem conta?
                        <a href="#paralogin">Entrar-se</a>
                    </p>
                </form>
            </div>

        </div>
    </div>

    <script>
        document.getElementById('form-cadastro').addEventListener('submit', function(event) {
            var senha = document.getElementById('senha_cad').value;
            var confirmarSenha = document.getElementById('confirmar_senha').value;
            var mensagemErro = document.getElementById('mensagemErro');

            if (senha !== confirmarSenha) {
                mensagemErro.textContent = "As senhas não correspondem!";
                event.preventDefault(); // Impede o envio do formulário
                return false;
            }

            mensagemErro.textContent = "";
            return true;
        });
    </script>

</body>

</html>