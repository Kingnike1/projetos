import random

def generate_random_python_code():
    # Estruturas e operações possíveis
    operations = [
        "def random_function():\n    return {result}",
        "for i in range({range}):\n    print(i)",
        "if {condition}:\n    print('Condition met!')",
        "while {condition}:\n    print('Looping')\n    break",
        "import random\nprint(random.randint({min}, {max}))"
    ]

    # Substituições dinâmicas
    placeholders = {
        "{result}": str(random.randint(1, 100)),
        "{range}": str(random.randint(1, 10)),
        "{condition}": random.choice(["True", "False"]),
        "{min}": str(random.randint(1, 50)),
        "{max}": str(random.randint(51, 100))
    }

    # Escolher e formatar o código
    selected_code = random.choice(operations)
    for key, value in placeholders.items():
        selected_code = selected_code.replace(key, value)

    return selected_code

# Gerar e salvar código aleatório
random_code = generate_random_python_code()
file_name = "random_code1.py"

with open(file_name, "w") as file:
    file.write(random_code)

print(f"Código gerado e salvo em '{file_name}'!")
