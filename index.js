const { readJSON } = require("./utils/read-json");
const { readCSV } = require("./utils/read-csv");

(async () => {
  const usersJSON = await readJSON("./users.json");
  const usersCSV = await readCSV("./users.csv");

  console.log(
    `Data Read on JSON: ${usersJSON} \n Data Read on CSV: ${usersCSV}`
  );
})();
