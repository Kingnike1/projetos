### Resumo Visual

| **Símbolo** | **Nome**           | **Exemplo**      | **Descrição**                               |
|-------------|--------------------|------------------|---------------------------------------------|
| (espaço)    | Descendente        | `div p`          | Todos os `<p>` dentro de um `<div>`.       |
| `>`         | Filho direto       | `div > p`        | Apenas `<p>` filhos diretos de `<div>`.    |
| `+`         | Irmão adjacente    | `h1 + p`         | `<p>` logo após um `<h1>`.                 |
| `~`         | Irmão geral        | `h1 ~ p`         | Todos os `<p>` após um `<h1>`.             |
| `*`         | Universal          | `*`              | Todos os elementos.                        |
| `.`         | Classe             | `.class`         | Todos os elementos com uma classe.         |
| `#`         | ID                 | `#id`            | O elemento com o ID especificado.          |
| `[]`        | Atributo           | `[type="text"]`  | Elementos com um atributo específico.      |
| `:`         | Pseudo-classe      | `a:hover`        | Estilo para um estado (hover, foco, etc).  |
| `::`        | Pseudo-elemento    | `p::first-line`  | Parte específica de um elemento.           |
