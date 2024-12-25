### 📊 **Fluxo de Cadastro e Login de Usuário**  

---

## 🔄 **Fluxo Geral**  

### 1. Acesso Inicial  
1. **Página Inicial**  
   - O usuário chega à página inicial.
   - Existem botões claros e visíveis: "**Entrar**" e "**Cadastrar**".

---

## 🔐 **Etapas de Autenticação**

### 2. **Login**  
- O usuário clica em **"Entrar"** e é redirecionado para a página de login.
  
1. **Formulario de Login**
   - Campos:  
     - **Email/Usuário**
     - **Senha**  
   - Botão "**Entrar**".  
   - **Esqueceu Senha?** (Link adicional).

2. **Validação das Credenciais**
   - O sistema verifica se o email/usuário e senha correspondem ao banco de dados.
   - Caso correto:
     - Usuário é autenticado e redirecionado ao **Dashboard Pessoal**.
   - Caso incorreto:
     - Mensagem de erro "**Usuário ou senha inválidos**".

---

### 3. **Cadastro de Novo Usuário**  
Caso o usuário não possua conta e clique em **"Cadastrar"**.

1. **Formulário de Cadastro**  
- Campos essenciais:  
    - Nome completo  
    - Email  
    - Data de Nascimento  
    - Senha  
    - Confirme Senha  
    - Foto (opcional)

2. **Validação**  
   - Checar se o email já existe no sistema.
   - Garantir que senhas correspondam corretamente e são seguras.

3. **Armazenamento no Banco de Dados**  
   - Dados do usuário são armazenados de forma segura e criptografada.

4. **Perfil do Usuário**  
   - O sistema cria automaticamente o **Perfil de Usuário**, visível no dashboard:
     - Nome e Foto.
     - Resumo das cartas já escritas e progresso.

---

## 🖼️ **Dashboard Principal**  

1. **Menu de Navegação**  
- Acesso rápido às principais áreas:
  - **Escrever Carta**
  - **Minhas Cartas**
  - **Perfil**
  - **Comunhão**
  - **Configurações**
  - **Sair**

2. **Resumo Motivacional**  
- Destaques:
  - Número de cartas escritas.
  - Mensagens inspiradoras do dia.
  - Progresso e destaques do usuário.

---

## 🔒 **Segurança**  
- Uso de **Criptografia** no armazenamento das senhas.
- Garantia de acesso apenas ao **usuário autenticado**.
- Opção **"Modo Privado"**, onde apenas o autor pode visualizar as cartas.

---

### 🔁 **Recuperação da Conta**  
- Caso o usuário esqueça a senha:
  - Opção "**Esqueci Minha Senha**" na tela de login.
  - Sistema envia um link de recuperação ao **email**.
  - Instruções simples e rápidas de redefinição.

