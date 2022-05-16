console.log("Hello world");
const fs = require('fs');

const myData = fs.readFileSync("./my_dirty.json",{encoding:'utf-8',flag:'r'});
let result = JSON.parse(myData);
let newData = JSON.stringify(result, null, 2 );

fs.writeFileSync("output.json", newData)
console.log(newData);