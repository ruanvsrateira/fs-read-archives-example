const fs = require("fs");

const readJSON = async (path) => {
  /* a função readFile é responsável por ler o arquivo recebendo 3 parâmetros
   * 1 - caminho para o arquivo a ser lido
   * 2 - formato dos caractéres e acentuação que no caso é UTF-8
   * 3 - função que recebe 2 parâmetro o erro: caso de algum erro ao ler, e os dados: dados que estão no arquivo.
   */
  const data = await fs.readFileSync(path, "utf8", function (err, data) {
    if (err) {
      return console.log("Erro ao ler arquivo");
    }

    return JSON.parse(data);
  });

  return data;
};

module.exports = { readJSON };
