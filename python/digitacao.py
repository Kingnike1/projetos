import time
import pygame

def display_with_music(music_path, lines, timings, char_delay=0.05):
    """
    Exibe as letras sincronizadas com a música.
    :param music_path: Caminho para o arquivo de música.
    :param lines: Lista de letras.
    :param timings: Lista de tempos em segundos para cada linha.
    :param char_delay: Delay entre caracteres (efeito de digitação).
    """
    # Inicializa o mixer do pygame
    pygame.mixer.init()
    pygame.mixer.music.load(music_path)
    
    # Inicia a música
    pygame.mixer.music.play()
    start_time = time.time()
    
    for i, line in enumerate(lines):
        # Espera até o tempo correto
        while time.time() - start_time < timings[i]:
            time.sleep(0.01)
        
        # Exibe a linha com efeito de digitação
        for char in line:
            print(char, end="", flush=True)
            time.sleep(char_delay)
        print()  # Nova linha
    
    # Aguarda o fim da música
    while pygame.mixer.music.get_busy():
        time.sleep(0.1)

# Caminho para a música
music_path = "/home/kingnike/Músicas/nova/Lady Gaga, Bruno Mars - Die With A Smile (Official Music Video).mp3"

# Letras da música
lines = [
    "Eu acabei de acordar de um sonho",
    "I, I just woke up from a dream",
    "Onde você e eu tivemos que dizer adeus",
    "Where you and I had to say goodbye",
    "E eu não sei o que tudo isso significa",
    "And I don't know what it all means",
    "Mas desde que sobrevivi, percebi",
    "But since I survived, I realized",
    "Onde quer que você vá, é onde eu seguirei",
    "Wherever you go, that's where I'll follow",
    "Ninguém prometeu amanhã",
    "Nobody's promised tomorrow",
    "Então eu vou te amar todas as noites como se fosse a última noite",
    "So I'ma love you every night like it's the last night",
    "Se o mundo estivesse acabando",
    "If the world was ending",
    "Eu gostaria de estar ao seu lado",
    "I'd wanna be next to you",
    "Se a festa acabasse",
    "If the party was over",
    "E nosso tempo na Terra acabou",
    "And our time on Earth was through",
    "Eu gostaria de te abraçar só por um tempo",
    "I'd wanna hold you just for a while",
    "E morra com um sorriso",
    "And die with a smile",
    "Bem ao seu lado",
    "Right next to you",
    "Perto de você",
    "Next to you",
]

# Tempos exatos de início de cada linha em segundos
timings = [
    0.0, 2.5, 5.0, 7.8, 10.5, 13.0, 16.0, 18.5, 21.0, 23.5,
    27.0, 30.0, 33.0, 36.5, 40.0, 43.0, 46.0, 49.5, 52.0, 55.0,
    58.5, 62.0, 65.0, 68.0  # Ajuste a lista removendo os tempos extra
]


# Executa o programa
display_with_music(music_path, lines, timings)
