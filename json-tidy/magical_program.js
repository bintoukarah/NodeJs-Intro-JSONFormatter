const fs = require("fs");
let pathArgs = process.argv.slice (2);

function printPath(pathArgs) {
    
    const myData = fs.readFileSync(pathArgs, { encoding: "utf-8",flag: "r",});
    let result = JSON.parse(myData);// Traduire mes données
    let newData = JSON.stringify(result, null, 2); // Le mettre en forme
    fs.writeFileSync("output.json", newData); // WriteFileSync permet de mettre en forme dans un nouveau fichier (outpout.json) en lisant my dirty.json
}
printPath(pathArgs[0])
