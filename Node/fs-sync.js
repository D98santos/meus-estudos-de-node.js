const fs = require('fs')

console.log("Executando o console ANTES o arquivo")
console.log((process.hrtime()[0]/60).toFixed(9))



const dados = fs.readFileSync('file.txt')

console.log("Executando o console APÓS o arquivo")
console.log((process.hrtime()[0]/60).toFixed(9))