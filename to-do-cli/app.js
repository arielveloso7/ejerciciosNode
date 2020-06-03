//fs para leer un fichero
//leer y escribir en un fichero externo al programa en si en si, se llaman streams
import fs from 'fs';
import colors from 'colors';
import { promisify } from 'util';

const readFileAsync = promisify(fs.readFile);
const writeFileAsync = promisify(fs.watchFile);

const printTasksFlie = (dataToPrint) => {
    console.log(dataToPrint.red);
}

/**
 * “readTaskFile()” leerá el archivo json que acabamos de crear,
 * limpiará la consola,
 * @param null
 * @returns object
 * e imprimirá las tareas en color rojo en la terminal.
 */



const readTaskFile = async () => {
    try {
        const data = await readFileAsync('tasks.json');
        tasks = JSON.parse(data());

    } catch (error) {
        console.log(error)
    }

    //fs.readFile('tasks.json', (error, data) => { //el callback siempre tiene 2 parametros (el data es lo que lee el readFile)
    //if (error) throw new Error('Tenemos un problema');
    //let tasks = JSON.parse(data.toString());

    //tasks.forEach(element => {
    //     printTasksFlie(element.task)
    // });

    //console.clear();
    //console.log(tasks[0].task.red);//el dato viene en formato sexagesimal y lo convierto //uso el colors .red
    // })
}
//readTaskFile();

//PROCESS
//capturar los parametros de entrada desde el terminal .process
//cada vez que lazo una linea NODE me lo guarda en un array
//if (process.argv[2] === '--show') readTaskFile(); //node -r esm app --show (y me muestra el mensaje del json)
//if (process.argv[2] === '--add') writeTasks(process.argv[3]);

const leerImprimirFichero = ;

switch (process.argv[2]) {
    case '--show':
        (async () => {
            console.clear();

            await readTaskFile();
            tasks.forEach(element => { printTasksFlie(element.task) });
        }
        break) ()
    case '--add':
        writeTasks(process.argv[3]);
    default:
        break;
}

/**
 * “writeTasks()”.
 * @param string taskToWrite
 * leer archivo json
 * almacenar en la variable global tasks
 * Seguidamente, a esa variable global “tasks” le añadirá la tarea que se le ha pasado como parámetro a la función.
 * escribirá dicha variable en el formato JSON en el archivo “tasks.json”
 */
let tasks = [];



const writeTasks = async (taskToWrite) => {
    try {
        await readTaskFile();
        task.push({ "tasks:" taskToWrite })
    } catch{

    }

    /* fs.readFile('tasks.json', (error, data) => {
         if (error) throw new Error('Tenemos un problema');
         tasks = JSON.parse(data.toString());
     })
 
     tasks.push({ "task": taskToWrite });
 
     fs.writeFile('tasks.json', JSON.stringify(tasks), (err) => {
         if (err) throw new Error('Tenemos un problema');
         console.log('save succesfull');
 
     })
 }*/
    writeTasks("nueva tarea");


//ruta relativa, lo sigo desde donde lo estoy llamando './carpeta/archivo.js'
//ruta absoluta, una direccion que no depende del sito del llamado 'c://document/'