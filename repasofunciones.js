const dato = 5;
const num1 = 40;

console.log(suma(7, 3));

// Funcion normal
function suma(num1, num2) {
    console.log(dato);
    console.log("valor de num1", num1);
    
    return num1 + num2;
}

// console.log(num1);


// Funcion anonima
const miFuncion = function (num1, num2) {
    return num1 + num2;
}
// funcion flecha analoga a la funcion anterior
const arrowFunction = (num1, num2) => {
    return num1 + num2;
}

console.log(miFuncion(5, 8));

console.log(typeof miFuncion);
console.log(miFuncion);


const saludo = mensaje => mensaje + 'Gracias';
console.log(saludo('Hola'));

function haceAlgo(saludoEntrante) {
    console.log("tipo de dato entrante", typeof saludoEntrante);
    console.log(saludoEntrante('Nos vemos el jueves'));
    
}

let num = 25
haceAlgo(saludo);

