document.addEventListener("DOMContentLoaded", function () {
    // Seleciona todos os elementos das cartas
    const cartas = document.querySelectorAll('.carta');
    const modal = document.getElementById('modal');
    const closeModal = document.getElementById('close-btn');

    // Abre o modal ao clicar na carta
    cartas.forEach(carta => {
        carta.addEventListener('click', function () {
            // Pega os dados da carta
            const nome = carta.getAttribute('data-nome');
            const mensagem = carta.getAttribute('data-mensagem');
            const dataEnvio = carta.getAttribute('data-data');
            const assunto = carta.getAttribute('data-assunto');

            // Preenche o modal com os dados
            document.getElementById('modal-nome').textContent = nome;
            document.getElementById('modal-mensagem').innerHTML = mensagem; // Usando innerHTML para exibir HTML
            document.getElementById('modal-assunto').textContent = assunto;
            document.getElementById('modal-data').textContent = dataEnvio;

            // Adiciona a animação fadeIn ao modal
            modal.style.display = "block";
            modal.querySelector('.modal-content').classList.remove('animate__fadeOut'); // Remove a animação de saída, se houver
            modal.querySelector('.modal-content').classList.add('animate__fadeIn');  // Adiciona a animação de entrada
        });
    });

    // Fecha o modal
    closeModal.addEventListener('click', function () {
        modal.querySelector('.modal-content').classList.remove('animate__fadeIn'); // Remove a animação de entrada
        modal.querySelector('.modal-content').classList.add('animate__fadeOut');  // Adiciona a animação de saída
        setTimeout(function () {
            modal.style.display = "none";
        }, 500); // Atraso para garantir que a animação de saída ocorra antes de esconder o modal
    });

    // Fecha o modal se clicar fora dele
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.querySelector('.modal-content').classList.remove('animate__fadeIn');
            modal.querySelector('.modal-content').classList.add('animate__fadeOut');
            setTimeout(function () {
                modal.style.display = "none";
            }, 500);
        }
    });
});

