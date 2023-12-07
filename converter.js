const fs = require('fs');
const csv = require('csv-parser');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

/**
 * Função para converter TXT para JSON
 * @param {*} txtFilePath 
 * @param {*} jsonFilePath 
 */
function txtToJson(txtFilePath, jsonFilePath) {
    const data = fs.readFileSync(txtFilePath, 'utf-8');
    const lines = data.split('\n');

    const jsonData = [];
    let currentData = {};

    lines.forEach(line => {
        if (line.includes('************************')) {
            // Se encontramos uma linha de asteriscos, adicionamos os dados ao array e reiniciamos o objeto
            jsonData.push(currentData);
            currentData = {};
        } else {
            // Se não for uma linha de asteriscos, tentamos extrair a chave e o valor
            let [key, value] = line.split(':');
            if (!value) {
                [key, value] = line.split('=');
            }

            if (key && value) {
                const trimmedKey = key.trim();
                const trimmedValue = value.trim();
                currentData[trimmedKey] = !isNaN(trimmedValue) ? parseFloat(trimmedValue) : trimmedValue;
            }
        }
    });

    // Adicionamos o último bloco de dados ao array (caso o arquivo não termine com uma linha de asteriscos)
    if (Object.keys(currentData).length > 0) {
        jsonData.push(currentData);
    }

    fs.writeFileSync(jsonFilePath, JSON.stringify(jsonData, null, 2));
    console.log('TXT to JSON conversion completed.');
}

/**
 * Função para converter JSON para CSV
 * @param {*} jsonFilePath 
 * @param {*} csvFilePath 
 */
function jsonToCsv(jsonFilePath, csvFilePath) {
    const jsonData = JSON.parse(fs.readFileSync(jsonFilePath, 'utf-8'));

    const csvWriter = createCsvWriter({
        path: csvFilePath,
        header: Object.keys(jsonData[0]).map(key => ({ id: key, title: key }))
    });

    csvWriter.writeRecords(jsonData).then(() => {
        console.log('JSON to CSV conversion completed.');
    });
}

/**
 * Verfica parâmetros passados via terminal
 * Se não houver parâmetros, usa arquivos input e output padrões
 */
if (process.argv.length <= 2) {
    const txtFile = 'report.txt';
    const jsonFile = 'output.json';
    const csvFile = 'output.csv';

    console.log('Nenhum parametro passado. Usando arquivos padroes: report.txt, output.json e output.csv');
} else {
    const txtFile = process.argv[2];
    console.log('input_txt:', argumento1);

    if (process.argv.length > 3) {
        const csvFile = process.argv[3];
        console.log('output_csv:', argumento2);
    } else {
        const csvFile = 'output.csv';
        console.log('Nenhum parametro passado. Usando arquivo padrao: output.csv');
    }

    if (process.argv.length > 4) {
        const jsonFile = process.argv[4];
        console.log('output_json:', argumento3);
    } else {
        const jsonFile = 'output.json';
        console.log('Nenhum parametro passado. Usando arquivo padrao: output.json');
    }

        /**
     * Convertendo TXT para JSON 
     */
    txtToJson(txtFile, jsonFile);

    /**
     * Convertendo JSON para CSV 
     */ 
    jsonToCsv(jsonFile, csvFile);

}


