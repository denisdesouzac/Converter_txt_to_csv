# Conversor de TXT (JSON) para CSV

Um conversor simples de arquivos TXT com notação JSON para arquivos CSV. Este conversor foi desenvolvido em JavaScript puro para facilitar a conversão de dados em formato JSON encapsulados em arquivos TXT para o formato CSV, tornando mais fácil a manipulação e análise desses dados.

## Funcionalidades

- **Conversão direta:** Transforma arquivos TXT com notação JSON para arquivos CSV de forma simples.
- **Compatibilidade:** Funciona tanto no navegador quanto no ambiente Node.js.

## Como Usar

1. **Clone o repositório:**

    ```bash
    git clone https://github.com/seu_usuario/nome_do_repositorio.git
    ```

2. **Executar o conversor:**

    - **No navegador:** Abra o arquivo `index.html` no seu navegador. Siga as instruções na interface para selecionar o arquivo TXT com notação JSON e realizar a conversão para CSV.

    - **No Node.js:** Utilize o terminal e execute o arquivo `converter.js`:

    ```bash
    node converter.js input.txt output.csv
    ```

    Substitua `input.txt` pelo nome do arquivo TXT que contém notação JSON que você deseja converter e `output.csv` pelo nome do arquivo CSV de saída.

3. **Verifique o arquivo convertido:** O arquivo de saída estará disponível no diretório especificado.

## Exemplo de Formato TXT (JSON)

```json
{
  "nome": "Exemplo",
  "idade": 30,
  "email": "exemplo@email.com"
}
