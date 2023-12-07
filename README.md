# Conversor de TXT (JSON) para CSV

Um conversor simples de arquivos TXT com notação JSON para arquivos CSV. Este conversor foi desenvolvido em JavaScript puro para facilitar a conversão de dados em formato JSON encapsulados em arquivos TXT para o formato CSV, tornando mais fácil a manipulação e análise desses dados.

## Funcionalidades

- **Conversão direta:** Transforma arquivos TXT com notação JSON para arquivos .CSV ou .JSON formatados de forma simples.
- **Compatibilidade:** Funciona no ambiente Node.js.

## Instalação do NodeJS

- **Siga as instruções do link:**
    > [Instalar NodeJS](https://www.alura.com.br/artigos/como-instalar-node-js-windows-linux-macos?utm_term=&utm_campaign=%5BSearch%5D+%5BPerformance%5D+-+Dynamic+Search+Ads+-+Artigos+e+Conteúdos&utm_source=adwords&utm_medium=ppc&hsa_acc=7964138385&hsa_cam=11384329873&hsa_grp=111087461203&hsa_ad=682526577071&hsa_src=g&hsa_tgt=dsa-843358956400&hsa_kw=&hsa_mt=&hsa_net=adwords&hsa_ver=3&gad_source=1&gclid=CjwKCAiA98WrBhAYEiwA2WvhOvPyhzmzGJJDKXLX5B_ylZCQAB5WzVyt8k06TdqgY2mX0IMwmJ2jCRoCqYcQAvD_BwE)
- **Abra o terminal e instale as dependências:**
  
    ```bash
    npm install fs csv-parser csv-writer
    ```

## Como Usar

1. **Clone o repositório:**

    ```bash
    git clone https://github.com/denisdesouzac/Converter_txt_to_csv.git
    ```

2. **Executar o conversor:**

    - **No Node.js:** Utilize o terminal e execute o arquivo `converter.js`:

    ```bash
    node converter.js
    ```

    No código fonte, substitua `input.txt` pelo nome do arquivo TXT que contém notação JSON que você deseja converter e `output.csv` pelo nome do arquivo CSV de saída.

4. **Verifique o arquivo convertido:** O arquivo de saída estará disponível no diretório especificado.

## Exemplo de Formato TXT (JSON)

```json
{
  "pessoa": {
    "nome": "Pedro",
    "idade": 23,
    "casado": false,
    "endereço": {
      "rua": "Rua das Flores",
      "número": 123,
      "cidade": "Porto Alegre"
    },
    "telefones": ["35-99999-9999", "35-7070-7070"]
  }
}

