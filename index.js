//CREANDO UN SERVIDOR
//para ejecutarlo hago en consola: node index.js

const http = require('http')

const hostname = '127.0.0.1'
const port = 3001

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end(`<h1>Hello World!</h1>`)
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})

//console.log('Hola Mundo');

const chalk = require('chalk');
const cows = require('cows');

console.log(chalk.blue(cows()));
