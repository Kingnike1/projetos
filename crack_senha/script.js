document.addEventListener('DOMContentLoaded', function() {
    const startButton = document.getElementById('startButton');
    
    if (startButton) {
        startButton.addEventListener('click', function() {
            const password = document.getElementById('passwordInput').value;
            if (!password) {
                alert("Por favor, insira uma senha.");
                return;
            }

            // Validação do comprimento da senha
            if (!validatePassword(password)) {
                return;
            }

            // Exibir o spinner enquanto o ataque está em andamento
            document.getElementById('loadingSpinner').style.display = 'inline';

            startPasswordAttack(password);
        });
    }
});

function startPasswordAttack(password) {
    // Conjunto de caracteres selecionados pelo usuário
    const keys = getSelectedKeys();
    
    // Inicia a variável de tentativa e o contador de tentativas
    let attempt = "";
    let attempts = 0;
    let progressBar = document.getElementById('progressBar');
    const status = document.getElementById('status');
    const attemptsDisplay = document.getElementById('attempts');
    const timeDisplay = document.getElementById('timeSpent'); // Novo elemento para exibir o tempo

    progressBar.style.width = "0%";
    status.innerHTML = "Iniciando ataque...";
    attemptsDisplay.innerHTML = `Tentativas: ${attempts}`;

    // Variável para armazenar o tempo de início
    const startTime = Date.now(); 

    // Número máximo de tentativas com base no tamanho da senha e no conjunto de caracteres
    let maxAttempts = Math.pow(keys.length, password.length); 
    let interval = setInterval(function() {
        attempt = "";
        for (let i = 0; i < password.length; i++) {
            attempt += keys[Math.floor(Math.random() * keys.length)];
        }

        attempts++;
        attemptsDisplay.innerHTML = `Tentativas: ${attempts}`;
        status.innerHTML = `Tentativa: ${attempt}`;

        // Calcula o progresso, mas limita a largura da barra a 100%
        let progress = Math.min((attempts / maxAttempts) * 100, 100);
        progressBar.style.width = `${progress}%`;

        // Altera a cor da barra de progresso conforme o progresso
        if (progress <= 33) {
            progressBar.style.backgroundColor = "#4caf50"; // verde
        } else if (progress <= 66) {
            progressBar.style.backgroundColor = "#ff9800"; // laranja
        } else {
            progressBar.style.backgroundColor = "#f44336"; // vermelho
        }

        // Calcula o tempo gasto e exibe
        let timeSpent = Date.now() - startTime; // Tempo em milissegundos
        timeDisplay.innerHTML = `Tempo gasto: ${formatTime(timeSpent)}`;

        // Verifica se a senha foi encontrada
        if (attempt === password) {
            clearInterval(interval);
            status.innerHTML = `Senha encontrada: ${attempt}`;
            document.getElementById('loadingSpinner').style.display = 'none'; // Oculta o spinner
        }

    }, 50); // Intervalo reduzido para melhorar a responsividade

    // Limite de tentativas após um certo número, caso a senha não seja encontrada
    setTimeout(function() {
        clearInterval(interval);
        status.innerHTML = `Falha! Senha não encontrada após ${attempts} tentativas.`;
        document.getElementById('loadingSpinner').style.display = 'none'; // Oculta o spinner após o tempo limite
    }, getMaxAttemptsLimit()); // Tempo limite ajustado conforme o número máximo de tentativas
}

function validatePassword(password) {
    const minLength = 1; // Ajustado para o mínimo de 1 caractere
    if (password.length < minLength) {
        alert(`A senha deve ter pelo menos ${minLength} caractere.`);
        return false;
    }
    return true;
}

function getSelectedKeys() {
    // Coleta as opções selecionadas pelo usuário
    const selectedKeys = [];
    
    if (document.getElementById('includeNumbers').checked) {
        selectedKeys.push(..."0123456789".split(''));
    }
    if (document.getElementById('includeLowercase').checked) {
        selectedKeys.push(..."abcdefghijklmnopqrstuvwxyz".split(''));
    }
    if (document.getElementById('includeUppercase').checked) {
        selectedKeys.push(..."ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(''));
    }
    if (document.getElementById('includeSpecial').checked) {
        selectedKeys.push(..."!@#$%^&*()_+={}[]|:;'<>,.?/~`".split(''));
    }

    if (selectedKeys.length === 0) {
        alert("Por favor, selecione pelo menos um conjunto de caracteres.");
        return [];
    }

    return selectedKeys;
}

function getMaxAttemptsLimit() {
    // Obtém o número máximo de tentativas do input do usuário
    const maxAttempts = parseInt(document.getElementById('maxAttempts').value);
    return isNaN(maxAttempts) ? 30000 : maxAttempts * 1000; // Default é 30 segundos
}

// Função para formatar o tempo em segundos, minutos e segundos
function formatTime(milliseconds) {
    let seconds = Math.floor(milliseconds / 1000);
    let minutes = Math.floor(seconds / 60);
    seconds = seconds % 60;
    return `${minutes}m ${seconds}s`;
}
