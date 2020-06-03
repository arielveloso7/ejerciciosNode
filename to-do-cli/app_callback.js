import fs from 'fs';
import colors from 'colors';

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

const readTaskFile = () => {


    fs.readFile('tasks.json', (error, data) => {

        if (error) throw new Error('Houston tenemos un problema');

        tasks = JSON.parse(data.toString());

        console.clear();

        tasks.forEach(element => console.log(element.task.red));

    })
}

/**
 * “writeTasks()”. 
 * @param string taskToWrite
 * leer archivo json
 * almacenar en la variable global tasks
 * Seguidamente, a esa variable global “tasks” le añadirá la tarea que se le ha pasado como parámetro a la función.
 * escribirá dicha variable en el formato JSON en el archivo “tasks.json”
 */

const writeTasks = (taskToWrite) => {

    fs.readFile('tasks.json', (error, data) => {

        if (error) throw new Error('Houston tenemos un problema');

        tasks = JSON.parse(data.toString());
        tasks.push({ "task": taskToWrite });

        fs.writeFile('tasks.json', JSON.stringify(tasks), (error) => {

            if (error) throw new Error('Houston tenemos un problema');
            console.log('save successfully');

        })
    })
}

/* if(process.argv[2]==='--show') readTaskFile();
if(process.argv[2]==='--add') writeTasks(process.argv[3])
 */

switch (process.argv[2]) {
    case '--show':
        readTaskFile();
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