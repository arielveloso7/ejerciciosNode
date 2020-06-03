import fs from 'fs';
import colors from 'colors';
import { promisify } from 'util';

const readFileAsync = promisify(fs.readFile);
const writeFileAsync = promisify(fs.writeFile);

let tasks = [];

const printTaskFile = (dataToPrint) => {

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
        tasks = JSON.parse(data.toString());


    } catch (error) {
        console.log(error);
    }

    // fs.readFile('tasks.json',(error,data)=>{
    //     if(error) throw new Error('Houston tenemos un problema');
    //     tasks = JSON.parse(data.toString());

    // tasks.forEach(element => printTaskFile(element.task))

    // console.clear();
    // console.log(tareas[0].task.red);
    // })
}

/**
 * “writeTasks()”. 
 * @param string taskToWrite
 * leer archivo json
 * almacenar en la variable global tasks
 * Seguidamente, a esa variable global “tasks” le añadirá la tarea que se le ha pasado como parámetro a la función.
 * escribirá dicha variable en el formato JSON en el archivo “tasks.json”
 */

const writeTasks = async (taskToWrite) => {

    try {

        await readTaskFile();
        tasks.push({ "tasks": taskToWrite });

        await writeFileAsync('tasks.json', JSON.stringify(tasks));
        console.log("save successful");


    } catch (error) {

    }

    /* fs.readFile('tasks.json',(error,data)=>{
        if(error) throw new Error('Houston tenemos un problema');
        tasks = JSON.parse(data.toString());
    })
        console.log("estoy leyendo")
        tasks.push({"task":taskToWrite});
        fs.writeFile('tasks.json',JSON.stringify(tasks),(error) =>{
            if(error) throw new Error('Houston tenemos un problema');
            console.log('estoy escribiendo');
            
        })
    
        console.log("estoy fuera")
     */}

/* if(process.argv[2]==='--show') readTaskFile();
if(process.argv[2]==='--add') writeTasks(process.argv[3])
 */
const leerImprimirFichero = async () => {
    console.clear();
    await readTaskFile();
    tasks.forEach(element => printTaskFile(element.task));
}


switch (process.argv[2]) {
    case '--show':
        //IIEF 
        (async () => {
            //            leerImprimirFichero();
            console.clear();
            await readTaskFile();
            tasks.forEach(element => printTaskFile(element.task));
        })()
        break;
    case '--add':
        writeTasks(process.argv[3]);
        break;
    default:
        break;
}

/*
console.log(process.argv) */

// writeTasks("nueva tarea");