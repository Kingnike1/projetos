// Seleciona o botão de alternância e o body
const toggleButton = document.getElementById('toggleButton');
const body = document.body;

// Adiciona um evento de clique ao botão
toggleButton.addEventListener('click', () => {
    // Alterna a classe 'dark-mode' no body
    body.classList.toggle('dark-mode');
    
    // Altera o texto do botão com base no tema
    if (body.classList.contains('dark-mode')) {
        toggleButton.innerText = 'Alternar para Claro';
    } else {
        toggleButton.innerText = 'Alternar para Escuro';
    }
});
