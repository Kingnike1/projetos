document.addEventListener('DOMContentLoaded', function () {
    const inputField = document.getElementById('inputField');
    const secretMessage = document.getElementById('secretMessage');  // Definição da variável secretMessage
    const body = document.body;
    let colorInterval;
    let keySequence = []; // Para armazenar a sequência de teclas

    // Função para gerar uma cor aleatória
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Função para capturar a sequência de teclas
    function handleKeyPress(event) {
        // Adiciona a tecla pressionada à sequência
        keySequence.push(event.key);

        // Mantém apenas os últimos 5 elementos (para a sequência específica)
        if (keySequence.length > 5) {
            keySequence.shift();
        }

        // Verifica se a sequência é "seta para cima", "seta para baixo", "seta para cima", "seta para baixo", "enter"
        if (keySequence.join(',') === 'ArrowUp,ArrowDown,ArrowUp,ArrowDown,Enter') {
            // Exibe a mensagem secreta
            secretMessage.style.display = 'block'; // Torna a mensagem visível
        }

        // Verifica a sequência de "seta para cima", "seta para cima", "seta para baixo" para redirecionar
        if (keySequence.join(',') === 'ArrowUp,ArrowUp,ArrowDown') {
            window.location.href = 'https://images.hdqwalls.com/download/the-big-universe-is-here-4k-q4-1600x900.jpg'; // Altere para o link desejado
        }

        // Se detectar a sequência 'segredo', aplica a animação de fonte colorida
        if (keySequence.join(',') === 'ArrowDown,Enter') {
            body.classList.add('colorful-text'); // Aplica a classe de animação de cores no texto
        }
    }

    inputField.addEventListener('input', function() {
        const inputValue = this.value.trim().toLowerCase();

        if (inputValue === 'mudar') {
            document.body.style.backgroundColor = 'green';
            clearInterval(colorInterval); // Parar a mudança de cores, se estiver acontecendo
        } else if (inputValue === 'awesome') {
            clearInterval(colorInterval); // Parar qualquer intervalo anterior
            colorInterval = setInterval(function() {
                document.body.style.backgroundColor = getRandomColor();
            }, 500); // Troca a cor a cada 500ms
        } else {
            document.body.style.backgroundColor = 'red';
            clearInterval(colorInterval); // Parar a mudança de cores, se estiver acontecendo
        }
    });

    // Detecta a sequência de teclas
    window.addEventListener('keydown', handleKeyPress);
});
