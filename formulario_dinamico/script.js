// Obtendo os elementos
const displaySelect = document.getElementById('display-select');
const dynamicForm = document.getElementById('dynamic-form');

// Função para alterar o display do formulário conforme a seleção
displaySelect.addEventListener('change', function () {
  // Pega o valor selecionado no <select>
  const selectedDisplay = displaySelect.value;

  // Aplica o valor de display ao formulário
  dynamicForm.style.display = selectedDisplay;
});
document.addEventListener("DOMContentLoaded", () => {
    // Selecionando os inputs para margin e o formulário
    const marginTopInput = document.getElementById("margin-top");
    const marginRightInput = document.getElementById("margin-right");
    const marginBottomInput = document.getElementById("margin-bottom");
    const marginLeftInput = document.getElementById("margin-left");
    const form = document.getElementById("myForm");

    // Função para atualizar a margem do formulário
    function updateMargins() {
        const topMargin = marginTopInput.value ? `${marginTopInput.value}px` : "0px";
        const rightMargin = marginRightInput.value ? `${marginRightInput.value}px` : "0px";
        const bottomMargin = marginBottomInput.value ? `${marginBottomInput.value}px` : "0px";
        const leftMargin = marginLeftInput.value ? `${marginLeftInput.value}px` : "0px";

        form.style.margin = `${topMargin} ${rightMargin} ${bottomMargin} ${leftMargin}`;
    }

    // Adicionando event listeners para cada input de margem
    marginTopInput.addEventListener("input", updateMargins);
    marginRightInput.addEventListener("input", updateMargins);
    marginBottomInput.addEventListener("input", updateMargins);
    marginLeftInput.addEventListener("input", updateMargins);
});
