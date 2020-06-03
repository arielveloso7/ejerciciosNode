import express, { response } from 'express';

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


const app = express(); //cuando llamo asi, ya tengo un servidor express

app.use(express.json());//middleware codigo que se mete entre el req y el res

app.get('/', (req, res) => {
    res.send('<h1>Hola Mundo!</h1>') //un html
})

app.get('/api/notes', (req, res) => { //le paso el json de arriba
    res.json(notes); //forma de leer un json en Express
})

app.get('/api/notes/:id', (req, res) => { //ruta con parametros /: y paso el parametro
    const id = Number(req.params.id); //lo que me viene en la url lo guardo /Number convierto a numero la peticion que es texto
    const note = notes.find(note => note.id === id);

    if (note) {
        res.json(note);
    } else {
        res.status(404).end();
    }
})

app.delete('/api/notes/:id', (req, res) => {
    const id = Number(req.params.id);
    notes = notes.filter(note => note.id !== id);

    res.status(204).end();
})

//arriba hay que poner el midllewhere
app.post('/api/notes', (req, res) => {
    const note = req.body;

    let maxId = 0;
    if (notes.length > 0) {
        maxId = Math.max(...notes.map(n => n.id));
    }

    note.id = maxId + 1;
    note.date = Date.now();
    notes = notes.concat(note);
    console.log(note);
    res.json(note);
});

app.listen(3001, () => console.log('server running on 3001'));