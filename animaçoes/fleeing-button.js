const simButton = document.getElementById('simButton');
const naoButton = document.getElementById('naoButton');

simButton.addEventListener('click', () => {
    alert('Uhuul! Fico muito feliz! ❤️');
});

naoButton.addEventListener('click', () => {
    alert('Tudo bem! Vamos ser amigos! 😊');
});

// Faz o botão "Não" fugir do mouse
naoButton.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - naoButton.offsetWidth);
    const y = Math.random() * (window.innerHeight - naoButton.offsetHeight);
    
    naoButton.style.position = 'absolute'; // Muda a posição para absoluta
    naoButton.style.left = `${x}px`;
    naoButton.style.top = `${y}px`;
});
