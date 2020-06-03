import express, { response } from 'express';
import morgan from 'morgan';
import cors from 'cors'; //permite conectar al navegador conectarse con mi api //npm i cors

let person = [
    {
        name: 'Juan Perez',
        number: '231456789',
        id: 1,
    },
    {
        name: 'Maria Gonzalez',
        number: '23145789',
        id: 2,
    },
    {
        name: 'Carmen Gomez',
        number: '2389956789',
        id: 3,
    },
    {
        name: 'Rocio Rojas',
        number: '515456789',
        id: 4,
    }
];

const app = express();

//middleware es lo que pongo en medio // funciones que modifica la peticion

app.use(express.json());


//NEXT
app.use((req, res, next) => { //next me da la continuidad del codigo
    if (req.url.indexOf("favicon.ico") > 0) {
        return;
    }
    next()
})


//Funcion si se ha logado 
app.use((req, res, next) => {
    if (req.body.user !== undefined && req.body.password !== undefined) {
        isLogged = true;

        return next()
    }
})


//Funcion middleware para ver si esta login
let isLogged = false;

app.use((req, res, next) => {
    if (isLogged) {
        return res.status(502).end()
    }
    next()
})
/*
const authenticationFunction = (req,res,next)=>{
    if(isLogin){
        return next();
    } else{
        res.status(401).json({'error':'no estas logado'});
    }
}
app.use(authenticationFunction);
*/


//MORGAN
morgan.token('body', function (req, res) {
    return JSON.stringify(req.body);
})

//app.use(morgan('tiny'))
app.use(morgan(':method :url :status :res[content-length] - :response-time ms - :body '));

//CORS
app.use(cors());
app.get('login', (req, res) => {
    res.json({ 'mensjae': 'estas dentro!' })
})

app.get('/api/person', (req, res) => {
    res.json(person);
})


app.get('/info', (req, res) => {
    res.send(
        `Phonebook has info for ${person.length} people.
        ${new Date}`
    )
});

app.get('/api/person/:id', (req, res) => {
    const id = Number(req.params.id);
    const per = person.find(per => per.id === id);

    if (per) {
        res.json(per);
    } else {
        res.status(404).end();
    }
})

app.delete('/api/person/:id', (req, res) => {
    const id = Number(req.params.id);
    person = person.filter(per => per.id !== id);

    res.status(204).end();
})

app.post('/api/person', (req, res) => {
    const per = req.body;

    per.id = Math.floor(Math.random() * 1000);
    person = person.concat(per);
    console.log(per);
    res.json(per);
});


app.listen(9000, () => console.log('Server running on 9000'));