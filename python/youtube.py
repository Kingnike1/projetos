import yt_dlp
import os

def download_audio(url, download_path, is_playlist=False):
    """
    Baixa apenas o áudio em formato M4A usando yt-dlp.

    :param url: URL do vídeo ou playlist.
    :param download_path: Caminho para salvar os arquivos.
    :param is_playlist: Define se é um vídeo único ou uma playlist.
    """
    try:
        # Verifica se o diretório existe, se não, cria
        if not os.path.exists(download_path):
            os.makedirs(download_path)
            print(f"Diretório '{download_path}' criado com sucesso.")

        # Configuração do yt-dlp
        ydl_opts = {
            'format': 'bestaudio[ext=m4a]',  # Melhor áudio no formato M4A
            'outtmpl': os.path.join(download_path, '%(title)s.%(ext)s'),  # Caminho e nome do arquivo
            'noplaylist': not is_playlist,  # Controlar o download de playlists
            'postprocessors': [{
                'key': 'FFmpegExtractAudio',
                'preferredcodec': 'm4a',
            }],
            'ignoreerrors': True,  # Ignorar erros para evitar que o script pare
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',  # Define um User-Agent para evitar bloqueios
            'fragment_retries': 10,  # Tentar baixar fragmentos falhados até 10 vezes
            'retries': 5,  # Tentativas de download em caso de erro
            'quiet': False,  # Exibir logs do download
        }

        # Baixar o áudio usando yt-dlp
        with yt_dlp.YoutubeDL(ydl_opts) as ydl:
            print("Iniciando o download do áudio...")
            ydl.download([url])

        print(f"✅ Download concluído! Arquivo(s) salvo(s) em: {download_path}")
    except Exception as e:
        print(f"❌ Ocorreu um erro: {e}")

def main():
    print("=== Download de Áudios do YouTube ===")

    # Solicitar a URL do vídeo ou playlist
    video_url = input("Digite a URL do vídeo ou playlist do YouTube: ").strip()

    # Apresentar as opções para o diretório
    print("\nEscolha um diretório para salvar:")
    print("1. Usar o diretório padrão: '/home/kingnike/Músicas/nova'")
    print("2. Editar e escolher um diretório personalizado")
    option = input("Digite 1 para usar o diretório padrão ou 2 para editar: ").strip()

    if option == '1':
        download_path = '/home/kingnike/Músicas/nova'
    elif option == '2':
        download_path = input("Digite o diretório de destino: ").strip()
        if not download_path:
            print("Nenhum diretório fornecido, usando o diretório padrão.")
            download_path = '/home/kingnike/Músicas/nova'
    else:
        print("Opção inválida! Usando o diretório padrão.")
        download_path = '/home/kingnike/Músicas/nova'

    # Escolher o tipo de download
    print("\nEscolha o tipo de download:")
    print("1. Baixar o áudio de um único vídeo")
    print("2. Baixar o áudio de uma playlist completa")
    download_type = input("Digite 1 para vídeo ou 2 para playlist: ").strip()

    if download_type == '1':
        download_audio(video_url, download_path, is_playlist=False)
    elif download_type == '2':
        download_audio(video_url, download_path, is_playlist=True)
    else:
        print("Opção inválida! O download não será iniciado.")

if __name__ == "__main__":
    main()
