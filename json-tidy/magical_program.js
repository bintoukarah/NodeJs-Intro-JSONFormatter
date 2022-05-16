console.log("Hello world");
const fs = require("fs");

const myData = fs.readFileSync("./my_dirty_example.json", {
  encoding: "utf-8",
  flag: "r",
});
let result = JSON.parse(myData); // Traduire mes données
let newData = JSON.stringify(result, null, 2); // Le mettre en forme
fs.writeFileSync("output.json", newData); // WriteFileSync permet de mettre en forme dans un nouveau fichier (outpout.json) en lisant my dirty.json
console.log(newData);
const myArgs = process.argv.slice (2);
console.log(myArgs);
