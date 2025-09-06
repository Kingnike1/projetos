Aqui está a tradução do texto para o português:

---

# Portfólio V5
Olá a todos!  
Eu sou Eki Zulfar Rachman, e nesta oportunidade, gostaria de compartilhar o projeto do meu site de portfólio que desenvolvi.

**Tecnologias utilizadas:**
- ReactJS
- Tailwind CSS
- AOS
- Firebase
- Framer Motion
- Lucide
- Material UI
- SweetAlert2

**Link do Site:**  
[https://www.eki.my.id/](https://www.eki.my.id/)

Ficaremos gratos se você quiser utilizar este projeto, por favor, inclua nosso crédito no seu uso. Obrigado! 🙏

---

# Tutorial para Rodar o Projeto

Aqui está um guia simples para rodar este projeto.

## Preparação

Certifique-se de ter instalado:

- **Node.js**

## Passos para Rodar o Projeto

1. **Baixe este projeto:**

   ```bash
   git clone https://github.com/Kingnike1/Portofolio_V5.git
   ```

2. **Instale todas as dependências:**

   ```bash
   npm install
   ```
   ou, caso necessário, utilize:

   ```bash
   npm install --legacy-peer-deps
   ```

3. **Execute o projeto:**

   ```bash
   npm run dev
   ```

4. **Abra no navegador:**

   Acesse o aplicativo no seu navegador através do link que aparecerá no terminal.

## Criando a Versão de Produção

Para criar a versão de produção (build):

1. Execute o comando de build:

   ```bash
   npm run build
   ```

2. O arquivo gerado ficará na pasta `dist`. Você pode fazer o upload dessa pasta para o seu servidor de hospedagem.

## Notas

Se houver problemas ao rodar o projeto, verifique:

- O Node.js está instalado corretamente.
- Você está na pasta correta do projeto.
- Todas as dependências foram instaladas sem erros.

## Configuração do Firebase

Para configurar o Firebase neste projeto, siga os seguintes passos:

1. **Adicione o Firebase ao Projeto:**
   - Abra o [Console do Firebase](https://console.firebase.google.com/).
   - Crie um novo projeto ou utilize um projeto existente.

2. **Escolha Firestore Database**
   - Crie um banco de dados.

3. **Vá para as Configurações do Projeto**
    - Clique na seção de configurações do projeto:  
    ![Screenshot 2024-12-30 214204](https://github.com/user-attachments/assets/43243cad-b414-4dd9-8793-d15c401c82fe)  
    - Copie o conteúdo do seu Firebase Config:  
    ![image](https://github.com/user-attachments/assets/6d0e158c-1ae0-40c1-8b41-9e53a1c4ccbb)

4. **Vá para Regras (Rules)**
   - Altere as regras para `true`.

5. Ajuste a Estrutura da Coleção conforme a imagem abaixo:  
  ![Screenshot 2025-01-03 001341](https://github.com/user-attachments/assets/38580122-08a4-4499-a8fd-0f253652a239)  
  ![Screenshot 2025-01-03 001410](https://github.com/user-attachments/assets/d563d7ad-f1ab-46ff-8185-640dcebd0363)

6. **Abra os arquivos firebase.js e firebase-comment.js**
   - Substitua o conteúdo de `firebaseConfig` com o seu próprio config do Firebase.

---

Se precisar de mais alguma coisa, estou à disposição!