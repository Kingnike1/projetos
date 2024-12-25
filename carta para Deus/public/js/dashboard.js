// Simula os dados dinâmicos do dashboard
document.addEventListener('DOMContentLoaded', () => {
    const numCartas = 120; // Número de cartas escritas pelo usuário
    const mensagensInspiradoras = [
        "Cada carta é um caminho para o futuro.",
        "Escreva sua história com propósito.",
        "Cada palavra tem o poder de mudar o destino."
    ];

    document.getElementById('num-cartas').innerText = numCartas;

    // Seleciona uma mensagem inspiradora aleatória
    const mensagemAleatoria = mensagensInspiradoras[Math.floor(Math.random() * mensagensInspiradoras.length)];
    document.getElementById('mensagem-inspiradora').innerText = mensagemAleatoria;
});
