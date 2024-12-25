-- Criação do banco de dados
CREATE DATABASE cartas;

-- Seleciona o banco de dados
USE cartas;

-- Criação da tabela para armazenar as cartas
CREATE TABLE cartas (
    id INT AUTO_INCREMENT PRIMARY KEY,       -- ID único para cada carta
    nome VARCHAR(100),                       -- Nome do remetente (opcional)
    mensagem TEXT NOT NULL,                  -- Conteúdo da carta
    data_envio TIMESTAMP DEFAULT CURRENT_TIMESTAMP -- Data e hora do envio
);

ALTER TABLE cartas ADD anonimo TINYINT(1) DEFAULT 0;
ALTER TABLE cartas ADD assunto VARCHAR(255) NOT NULL;


CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    data_nascimento DATE NOT NULL,
    senha VARCHAR(255) NOT NULL,
    foto VARCHAR(255),
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

ALTER TABLE usuarios ADD COLUMN recovery_token VARCHAR(255) NULL;
ALTER TABLE usuarios ADD COLUMN recovery_token_expiration DATETIME NULL;
