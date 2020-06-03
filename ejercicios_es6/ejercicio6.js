//STRING EN MINUSCULA
function primeraMayuscula(string) {
    return string.charAt(0).toUpperCase() + string.slice(1); //busca el primer caracter lo hace mayuscula, para hacer esto slice extrae solo 1 valor (la primera letra)
}

console.log(primeraMayuscula('soy feliz'))

//STRING EN MAYUSCULA
texto = 'QUIERO VOLAR';
texto = primeraMayuscula(texto.toLowerCase()); //convierte primero todo en minuscula, luego aplica la mayuscula a la primera con la funcion
console.log(texto);
