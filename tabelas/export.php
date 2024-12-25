<?php
require './vendor/autoload.php';

use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Criação da planilha
    $spreadsheet = new Spreadsheet();
    $sheet = $spreadsheet->getActiveSheet();

    // Definir cabeçalhos
    $sheet->setCellValue('A1', 'Disciplinas');
    $sheet->setCellValue('B1', 'Professor(a)');
    $sheet->setCellValue('C1', 'Nota 1');
    $sheet->setCellValue('D1', 'Nota 2');
    $sheet->setCellValue('E1', 'Nota 3');
    $sheet->setCellValue('F1', 'Total Geral');
    $sheet->setCellValue('G1', 'Falta para 3º TRI');
    $sheet->setCellValue('H1', 'Situação');

    // Adicionando dados do formulário
    $row = 2; // Começar na segunda linha
    foreach ($_POST as $key => $value) {
        if (preg_match('/nota(\d+)_(\d+)/', $key, $matches)) {
            $colIndex = (int)$matches[1]; // Coluna Nota1, Nota2, Nota3
            $disciplinaIndex = (int)$matches[2];

            // Adicionando valores nas colunas corretas
            if ($colIndex === 1) {
                $sheet->setCellValue("A{$row}", $_POST["disciplina_$disciplinaIndex"] ?? ''); // Nome da disciplina
                $sheet->setCellValue("B{$row}", $_POST["professor_$disciplinaIndex"] ?? ''); // Professor(a)
            }
            $sheet->setCellValueByColumnAndRow(2 + $colIndex, $row, $value); // Coluna Nota
        }

        // Calcular Total Geral, Faltando, Situação (manualmente ou via POST se já calculado)
        $nota1 = $_POST["nota1_$disciplinaIndex"] ?? 0;
        $nota2 = $_POST["nota2_$disciplinaIndex"] ?? 0;
        $nota3 = $_POST["nota3_$disciplinaIndex"] ?? 0;

        $total = $nota1 + $nota2 + $nota3;
        $faltando = max(0, 18 - $total);
        $situacao = $faltando > 0 ? "Recuperação" : "Aprovado";

        $sheet->setCellValue("F{$row}", $total);
        $sheet->setCellValue("G{$row}", $faltando);
        $sheet->setCellValue("H{$row}", $situacao);

        $row++; // Avançar para a próxima linha
    }

    // Configurar o nome do arquivo para download
    $filename = 'Boletim_Escolar.xlsx';

    // Headers para download
    header('Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    header("Content-Disposition: attachment; filename=\"{$filename}\"");

    // Salvar e enviar o arquivo para download
    $writer = new Xlsx($spreadsheet);
    $writer->save('php://output');
    exit;
}
?>
