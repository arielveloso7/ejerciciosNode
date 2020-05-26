
import fs from 'fs';

let dataFile = fs.readFile('input.txt', (err, data) => {
    if (err) return console.error(err);

    console.log(data.toString()); //toString es para pasar el lenguage que devuelve a string
    return data.toString();
})

console.log('Inicio de programa');
console.log(dataFile);
console.log('Fin del programa');