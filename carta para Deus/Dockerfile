# Usa a imagem base oficial do PHP com Apache
FROM php:8.1.16-apache

# Atualiza os pacotes e instala as dependências necessárias
RUN apt-get update && apt-get install -y \
    libzip-dev \
    unzip \
    && docker-php-ext-install mysqli pdo pdo_mysql \
    && docker-php-ext-enable mysqli pdo_mysql

# Habilita o módulo rewrite do Apache
RUN a2enmod rewrite

# Define o diretório padrão de trabalho no container
WORKDIR /var/www/html

# Exclui os arquivos temporários do apt para reduzir o tamanho da imagem
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

# Copia os arquivos da aplicação local para o container
COPY . /var/www/html

# Ajusta permissões para evitar problemas de acesso
RUN chown -R www-data:www-data /var/www/html
