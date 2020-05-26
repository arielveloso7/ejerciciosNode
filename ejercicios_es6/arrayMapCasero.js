//definicion
//le paso el callback
const miArray = (array, callback) => {
    callback(array);
};


//ejecucion
//la invocacion de la funcion miArray cuando le paso la funcion callback
//declaro un nuevo array vacio
//recorro primero el array
const array2 = miArray(array1, () => {
    let nuevoArray = [];
    for (i = 0; i < array1.length; i++) {
        //nuevoArray[i] = array1[i];
        nuevoArray.push(array1[i]);
    }
    return nuevoArray;
});

console.log(array1);
console.log(array2);

/*
//declaracion
funcion primerFuncion(parametro1, parametro2, functionCallback){
    //llamo la funcion callback
    functionCallback(parametroCall)
}



//llamo a la primera funcion 
prmieraFuncion(parm1, parm2, functionCallback(parmCall){
    //aqui declaro la funcion callback
});
*/


//otra opcion
const miArray = (array, callback) => {
    return callback(array);
}

const multiplicar = (array) => {

    let nuevoArray = [];
    for (i = 0; i < array.length; i++) {
        nuevoArray.push(array[i] * 2);
    }
    return nuevoArray;
}

const array1 = [1, 2, 3];

const array2 = miArray(array1, multiplicar);

console.log(array1);
console.log(array2);


