// Variáveis globais
let isStudyTime = true;
let timer;
let minutes = 25;
let seconds = 0;
let isRunning = false;

// Elementos do DOM
const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const statusDisplay = document.getElementById('status');
const toggleModeButton = document.getElementById('toggle-mode');
const progressBar = document.querySelector('.progress');

// Constantes de tempo
const totalStudyTime = 25 * 60; // 25 minutos em segundos
const totalBreakTime = 5 * 60;  // 5 minutos em segundos
let totalTime = totalStudyTime; // Tempo total atual (estudo ou pausa)

// Funções principais
function updateTimer() {
    const minutesText = minutes < 10 ? '0' + minutes : minutes;
    const secondsText = seconds < 10 ? '0' + seconds : seconds;
    timerDisplay.textContent = `${minutesText}:${secondsText}`;
}

function updateProgressBar() {
    const elapsedTime = totalTime - (minutes * 60 + seconds);
    const progressPercentage = (elapsedTime / totalTime) * 100;
    progressBar.style.width = `${progressPercentage}%`;
}

// Função para iniciar o ciclo Pomodoro
function startPomodoro() {
    isRunning = true;
    startButton.style.display = 'none';
    stopButton.style.display = 'inline-block';
    statusDisplay.textContent = isStudyTime ? 'Hora de Estudar!' : 'Hora de Pausa!';
    
    totalTime = isStudyTime ? totalStudyTime : totalBreakTime;
    changeStatusNotification(isStudyTime ? 'study' : 'break');  // Exibe a notificação visual
    playNotificationSound(isStudyTime ? 'study' : 'break');  // Toca o som apropriado

    timer = setInterval(handleTimerTick, 1000);
}

// Função para parar o ciclo Pomodoro
function stopPomodoro() {
    clearInterval(timer);
    isRunning = false;
    startButton.style.display = 'inline-block';
    stopButton.style.display = 'none';
    statusDisplay.textContent = 'Pausa ou Estudo Interrompido';
    progressBar.style.width = '0';
}

// Função para atualizar o cronômetro a cada segundo
function handleTimerTick() {
    if (seconds === 0) {
        if (minutes === 0) {
            clearInterval(timer);
            togglePomodoroMode();
            alert('Ciclo concluído! Hora de alternar.');
        } else {
            minutes--;
            seconds = 59;
        }
    } else {
        seconds--;
    }
    updateTimer();
    updateProgressBar();
}

// Função para alternar entre Estudo e Pausa
function togglePomodoroMode() {
    if (isStudyTime) {
        minutes = 5;
        totalTime = totalBreakTime;
        changeStatusNotification('break');
        playNotificationSound('break');
    } else {
        minutes = 25;
        totalTime = totalStudyTime;
        changeStatusNotification('study');
        playNotificationSound('study');
    }
    isStudyTime = !isStudyTime;
    seconds = 0;
    startPomodoro();
}

// Função para tocar notificação sonora
function playNotificationSound(type) {
    let notificationSound = new Audio();
    
    if (type === 'study') {
        notificationSound.src = 'sounds/study-start.mp3';  // Som de início de estudo
    } else if (type === 'break') {
        notificationSound.src = 'sounds/break-start.mp3';  // Som de início de pausa
    }

    notificationSound.play().catch(error => {
        console.error('Erro ao tentar reproduzir o som:', error);
    });
}



// Função para alterar a notificação visual
function changeStatusNotification(type) {
    if (type === 'study') {
        statusDisplay.textContent = 'Hora de Estudar!';
        statusDisplay.classList.add('study-time');
        statusDisplay.classList.remove('break-time');
    } else if (type === 'break') {
        statusDisplay.textContent = 'Hora de Pausa!';
        statusDisplay.classList.add('break-time');
        statusDisplay.classList.remove('study-time');
    }
}

// Listeners de eventos
toggleModeButton.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
});

startButton.addEventListener('click', startPomodoro);
stopButton.addEventListener('click', stopPomodoro);


// Elementos do Pop-up
const popup = document.getElementById('popup');
const popupMessage = document.getElementById('popupMessage');
const closePopupButton = document.getElementById('closePopup');

// Função para exibir o Pop-up
function showPopup(message) {
    popupMessage.textContent = message;
    popup.style.display = 'flex';
}

// Função para fechar o Pop-up
closePopupButton.addEventListener('click', () => {
    popup.style.display = 'none';
});

// Fechar o Pop-up ao clicar fora dele
window.addEventListener('click', (event) => {
    if (event.target === popup) {
        popup.style.display = 'none';
    }
});

// Exibir Pop-up ao iniciar o Pomodoro
function startPomodoro() {
    isRunning = true;
    startButton.style.display = 'none';
    stopButton.style.display = 'inline-block';
    statusDisplay.textContent = isStudyTime ? 'Hora de Estudar!' : 'Hora de Pausa!';
    
    totalTime = isStudyTime ? totalStudyTime : totalBreakTime;
    changeStatusNotification(isStudyTime ? 'study' : 'break');
    playNotificationSound(isStudyTime ? 'study' : 'break');

    // Exibir Pop-up com mensagem apropriada
    showPopup(isStudyTime ? 'Vamos estudar! Concentre-se agora.' : 'Hora de relaxar. Aproveite sua pausa!');

    timer = setInterval(handleTimerTick, 1000);
}

// Exibir Pop-up ao alternar entre Estudo e Pausa
function togglePomodoroMode() {
    if (isStudyTime) {
        minutes = 5;
        totalTime = totalBreakTime;
        changeStatusNotification('break');
        playNotificationSound('break');
        showPopup('Ciclo de estudo concluído! Hora de uma pausa.');
    } else {
        minutes = 25;
        totalTime = totalStudyTime;
        changeStatusNotification('study');
        playNotificationSound('study');
        showPopup('Pausa concluída! Vamos voltar aos estudos.');
    }
    isStudyTime = !isStudyTime;
    seconds = 0;
    startPomodoro();
}

// Inicialização
updateTimer();  // Atualiza o cronômetro inicial