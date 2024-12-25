<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Boletim Escolar Interativo</title>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</head>
<body>
    <div class="container">
        <h1>Boletim Escolar Interativo</h1>
        <form id="boletimForm" method="POST" action="index.php">
            <table>
                <thead>
                    <tr>
                        <th>Disciplinas</th>
                        <th>Professor(a)</th>
                        <th title="Nota obtida no 1º Trimestre">Nota 1</th>
                        <th title="Nota obtida no 2º Trimestre">Nota 2</th>
                        <th title="Nota obtida no 3º Trimestre">Nota 3</th>
                        <th>Total Geral</th>
                        <th>Falta para 3º TRI</th>
                        <th>Situação</th>
                    </tr>
                </thead>
                <tbody>
                    <?php
                    $disciplinas = [
                        ["Portugues", "Solange", 6.2, 4.6, 4.5],
                        ["Espanhol", "Rogerio", 7.4, 8.6, 9.5],
                        ["Educação Física", "Leonardo", 6.7, 9.2, 8.0],
                        ["Física", "Fausto", 3.8, 6.7, 5.8],
                        ["Química", "Rafael", 3.3, 5.8, 1.0],
                        ["Biologia", "Renata", 6.3, 6.2, 3.0],
                        ["Matemática", "Iron\"tchan\"", 6.7, 6.95, 6.25],
                        ["História", "Cardoso", 8.0, 6.5, 9.0],
                        ["Metodologia Científica", "Issac", 7.0, 7.12, null],
                        ["Desenvolvimento Web", "Lucas", 7.4, 9.8, null],
                        ["Sociologia", "Lucas", 6.0, 8.5, 3.5],
                        ["Filosofia", "Lorena", 6.5, 7.4, 3.5],
                        ["Geografia", "Wagner", 6.6, 8.9, 10.0],
                        ["Redes de Computadores", "Rangel", 4.84, 8.0, null]
                    ];
                    foreach ($disciplinas as $key => $disciplina) {
                        $nota1 = $disciplina[2];
                        $nota2 = $disciplina[3];
                        $nota3 = $disciplina[4] ?? 0;
                        $total = $nota1 + $nota2 + $nota3;
                        $faltando = max(0, 18 - $total);
                        $situacao = $faltando > 0 ? "Recuperação" : "Aprovado";

                        echo "<tr>
                            <td>{$disciplina[0]}</td>
                            <td>{$disciplina[1]}</td>
                            <td><input type='number' step='0.01' name='nota1_$key' value='{$nota1}'></td>
                            <td><input type='number' step='0.01' name='nota2_$key' value='{$nota2}'></td>
                            <td><input type='number' step='0.01' name='nota3_$key' value='{$nota3}'></td>
                            <td class='total'>{$total}</td>
                            <td class='faltando'>{$faltando}</td>
                            <td class='situacao " . strtolower($situacao) . "'>{$situacao}</td>
                        </tr>";
                    }
                    ?>
                </tbody>
            </table>
            <div class="form-footer">
                <button type="button" onclick="resetForm()">Resetar</button>
                <button type="button" onclick="recalcular()">Recalcular</button>
            </div>
        </form>
        <canvas id="graficoDesempenho" width="400" height="200"></canvas>
    </div>
    <script src="script.js"></script>
</body>
</html>
