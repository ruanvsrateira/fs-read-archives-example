const fs = require("fs");

const readCSV = async (path) => {
  /* a função readFile é responsável por ler o arquivo recebendo 3 parâmetros
   * 1 - caminho para o arquivo a ser lido
   * 2 - formato dos caractéres e acentuação que no caso é UTF-8
   * 3 - função que recebe 2 parâmetro o erro: caso de algum erro ao ler, e os dados: dados que estão no arquivo.
   */
  const data = await fs.readFileSync(path, "utf8", function (err, data) {
    if (err) {
      return console.log("erro ao ler arquivo");
    }

    return data;
  });

  return data;
};

module.exports = { readCSV };
