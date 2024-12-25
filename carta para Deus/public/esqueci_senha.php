<link rel="stylesheet" href="./css/login.css">
<!-- Tela Esqueci Minha Senha -->
<h2>Esqueci Minha Senha</h2>

<form method="post" action="../code/recuperar.php">
    <label for="email">Digite seu email</label>
    <input id="email" name="email" type="email" placeholder="Email" required />

    <input type="hidden" name="action" value="esqueci_senha">
    <input type="submit" value="Enviar Link de Recuperação">
</form>
