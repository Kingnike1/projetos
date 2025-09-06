function recalcular() {
    document.querySelectorAll('tbody tr').forEach(row => {
        const nota1 = parseFloat(row.querySelector('input[name^="nota1_"]').value) || 0;
        const nota2 = parseFloat(row.querySelector('input[name^="nota2_"]').value) || 0;
        const nota3 = parseFloat(row.querySelector('input[name^="nota3_"]').value) || 0;
        const total = nota1 + nota2 + nota3;
        const faltando = Math.max(0, 18 - total);
        const situacao = faltando > 0 ? "Recuperação" : "Aprovado";

        row.querySelector('.total').textContent = total.toFixed(2);
        row.querySelector('.faltando').textContent = faltando.toFixed(2);
        const situacaoCell = row.querySelector('.situacao');
        situacaoCell.textContent = situacao;
        situacaoCell.className = `situacao ${situacao.toLowerCase()}`;
    });

    gerarGrafico();
}

function resetForm() {
    document.getElementById('boletimForm').reset();
    recalcular();
}

function gerarGrafico() {
    const labels = [];
    const data = [];
    document.querySelectorAll('tbody tr').forEach(row => {
        labels.push(row.querySelector('td').textContent);
        const total = parseFloat(row.querySelector('.total').textContent);
        data.push(total);
    });

    new Chart(document.getElementById('graficoDesempenho'), {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Total Geral',
                data: data,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: { beginAtZero: true }
            }
        }
    });
}

document.addEventListener('DOMContentLoaded', gerarGrafico);

