// const cartoes = document.querySelectorAll('.cartao');
// let cartãoExpandido = null;

// cartoes.forEach(cartao => {
//     cartao.addEventListener('click', () => {
//         // Se já houver um cartão expandido, retornar ao tamanho normal
//         if (cartãoExpandido && cartãoExpandido !== cartao) {
//             cartãoExpandido.classList.remove('expanded');
//             document.body.classList.remove('expanded');
//         }

//         // Alterna o estado do cartão clicado
//         cartao.classList.toggle('expanded');

//         // Se o cartão foi expandido, adiciona o fundo escuro
//         if (cartao.classList.contains('expanded')) {
//             document.body.classList.add('expanded');
//             cartãoExpandido = cartao;
//         } else {
//             document.body.classList.remove('expanded');
//             cartãoExpandido = null;
//         }
//     });
// });




// Funções para carregar os detalhes de cada tênis
function loadBlue() {
    document.body.style.backgroundColor = "#09AFFF"; // Cor Azul
    document.getElementById("content").innerHTML = `
        <section class="product cartao azul" id="azul">
            <div class="details">
                <h1>Marca: Nike</h1>
                <p><strong>Modelo:</strong> Air Jordan 1 Mid</p>
                <p><strong>Cor:</strong> Azul</p>
                <p><strong>Material do cabedal:</strong> Couro de alta qualidade</p>
                <p><strong>Solado:</strong> Borracha com excelente tração e resistência</p>
                <p><strong>Detalhes:</strong> Logo Nike "Swoosh" em preto</p>
                <p><strong>Categoria:</strong> Lifestyle/Casual e Basquete</p>
                <h2 class="price">R$39,90</h2>
                <button class="icon-button" onclick="loadHome()">
                    <i class="fas fa-arrow-left"></i> Voltar
                </button>
            </div>            
            <div class="image">
                <img src="1.png" alt="Air Jordan 1 Mid Azul">
            </div>
        
            </section>
    `;
}

function loadPurple() {
    document.body.style.backgroundColor = "#5911F2"; // Cor Roxa
    document.getElementById("content").innerHTML = `
        <section class="product cartao roxo" id="roxo">
            <div class="details">
                <h1>Marca: Nike</h1>
                <p><strong>Modelo:</strong> Air Jordan 1 Mid</p>
                <p><strong>Cor:</strong> Roxo</p>
                <p><strong>Material do cabedal:</strong> Couro de alta qualidade</p>
                <p><strong>Solado:</strong> Borracha com excelente tração e resistência</p>
                <p><strong>Detalhes:</strong> Logo Nike "Swoosh" em preto</p>
                <p><strong>Categoria:</strong> Lifestyle/Casual e Basquete</p>
                <h2 class="price">R$39,90</h2>
                <button class="icon-button" onclick="loadHome()">
                    <i class="fas fa-arrow-left"></i> Voltar
                </button>
            </div>            
            <div class="image">
                <img src="2.png" alt="Air Jordan 1 Mid Roxo">
            </div>
        
            </section>
    `;
}

function loadRed() {
    document.body.style.backgroundColor = "#FF4141"; // Cor Vermelha
    document.getElementById("content").innerHTML = `
        <section class="product cartao vermelho" id="vermelho">
            <div class="details">
                <h1>Marca: Nike</h1>
                <p><strong>Modelo:</strong> Air Jordan 1 Mid</p>
                <p><strong>Cor:</strong> Vermelho</p>
                <p><strong>Material do cabedal:</strong> Couro de alta qualidade</p>
                <p><strong>Solado:</strong> Borracha com excelente tração e resistência</p>
                <p><strong>Detalhes:</strong> Logo Nike "Swoosh" em preto</p>
                <p><strong>Categoria:</strong> Lifestyle/Casual e Basquete</p>
                <h2 class="price">R$39,90</h2>
                <button class="icon-button" onclick="loadHome()">
                    <i class="fas fa-arrow-left"></i> Voltar
                </button>
            </div>            
            <div class="image">
                <img src="3.png" alt="Air Jordan 1 Mid Vermelho">
            </div>
        
            </section>
    `;
}

function loadGreen() {
    document.body.style.backgroundColor = "#32CD32"; // Cor Verde
    document.getElementById("content").innerHTML = `
        <section class="product cartao verde" id="verde">
            <div class="details">
                <h1>Marca: Nike</h1>
                <p><strong>Modelo:</strong> Air Jordan 1 Mid</p>
                <p><strong>Cor:</strong> Verde</p>
                <p><strong>Material do cabedal:</strong> Couro de alta qualidade</p>
                <p><strong>Solado:</strong> Borracha com excelente tração e resistência</p>
                <p><strong>Detalhes:</strong> Logo Nike "Swoosh" em preto</p>
                <p><strong>Categoria:</strong> Lifestyle/Casual e Basquete</p>
                <h2 class="price">R$39,90</h2>
                <button class="icon-button" onclick="loadHome()">
                    <i class="fas fa-arrow-left"></i> Voltar
                </button>
            </div>            
            <div class="image">
                <img src="4.png" alt="Air Jordan 1 Mid Verde">
            </div>
        
            </section>
    `;
}


// Função para carregar a página de detalhes do produto
function loadProductDetails() {
    document.body.style.backgroundColor = "#1a1a1a"; // Nova cor de fundo
    document.getElementById("content").innerHTML = `
        <section class="product">
            <div class="details">
                <h1>Detalhes do Produto</h1>
                <p>Este é o lendário Air Jordan 1 Mid, amado por atletas e fãs de estilo casual.</p>
                <p><strong>Benefícios:</strong> Conforto, estilo e durabilidade incomparáveis.</p>
                <p><strong>Preço:</strong> R$39,90</p>
                <button class="icon-button" onclick="loadHome()">
                    <i class="fas fa-arrow-left"></i> Voltar
                </button>
            </div>
        </section>
    `;
}

