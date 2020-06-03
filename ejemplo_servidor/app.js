import http from 'http';

let notes = [{
    id: 1,
    content: "HTML is easy",
    date: "2019-05-30T17:30:31.098Z",
    important: true
},
{
    id: 2,
    content: "Browser can execute only Javascript",
    date: "2019-05-30T18:39:34.091Z",
    important: false
},
{
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    date: "2019-05-30T19:20:14.298Z",
    important: true
}];


const server = http.createServer(); //evenemitter.emit ARRANCA
server.on('request', function (req, res) { //me fabrica un listener un handler, evento tipo request. Callback con 2 objetos, (req, res)
    console.log(req.url);
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' }); //head: le envia texto html (el navegador intreperta esto)
        res.write('Hello World!'); //body: dicen que le envie esta cadena de texto
        res.end();
    } else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('Soy un estudiate Neoland');
        res.end();
    } else if (res.url === '/notes') {
        res.writeHead(200, { 'Content-Type': 'application/json' }); //si me viene una ruta por /notes le voy a mandar application/json (no un texto html)
        res.write(JSON.stringify(notes)); //convertirlo a un objeto json 
        res.end();
    } else {
        res.statusCode = 404;
        res.write('404 page not found');
        res.end();
    }
});
server.listen(4000);
console.log('server running on port 4000');


//(req, res) leer y responder
