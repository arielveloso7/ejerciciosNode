import chalk from 'chalk';

let numPetalos = Math.floor(Math.random() * 5 + 5);

//console.log(numPetalos);

const deshojarMargarita = () => {

    let id = setInterval(() => {

        if (numPetalos === 0) clearInterval(id);

        new Promise((resolve, reject) => {
            let mensaje;
            if (numPetalos % 2 === 0) {
                mensaje = chalk.blue('Me quiere');
            } else {
                mensaje = chalk.red('No me quiere');
            }
            numPetalos--;
            resolve(mensaje);

        }).then(valor => console.log(valor)).catch(err => console.log(err));

    }, 1000);
}

//lamo la funcion
deshojarMargarita();