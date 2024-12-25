<link rel="stylesheet" href="./css/login.css">
<h2>Redefinição de Senha</h2>

<form method="post" action="../code/processa.php">
    <input type="hidden" name="token" value="<?php echo $_GET['token']; ?>">

    <label for="nova_senha">Nova Senha</label>
    <input id="nova_senha" name="nova_senha" type="password" placeholder="Nova Senha" required>

    <label for="confirmar_senha">Confirmar Senha</label>
    <input id="confirmar_senha" name="confirmar_senha" type="password" placeholder="Confirme a Senha" required>

    <input type="hidden" name="action" value="redefinir_senha">
    <input type="submit" value="Redefinir">
</form>

