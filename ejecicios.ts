// Resolver y agregar el tipado

// obtener el numero de caracteres de la siguiente frase 
let frase1: string = "Hola, mundo!";
console.log(frase1.length);

// Invertir la siguiente cadena
 let frase2: string = "Hola, mundo!";
 console.log(frase2.split("").reverse().join(""));


// obtener la posicion de la letra m
 let frase3: string = "Hola, mundo!";
 let posicion = frase3.indexOf("m");
 console.log(posicion);

// Extraer la palabra mundo
 let frase4: string = "Hola, mundo!";
 let letras = frase4.split(" ");
 let palabra = letras[1];
 console.log(palabra);

 // Extraer la palabra mundo
 let frase5: string = "Hola, mundo!";
 let letras1 = frase5.slice(6,11);
 console.log({letras1});

// Sustituir la palabra mundo por amigos
 let frase: string = "Hola, mundo!";
 let nuevaFrase = frase.replace("mundo", "amigos");
 console.log(nuevaFrase);


// Truncar el siguiente numero a dos decimales
let numero: number = 3.14159;
let truncado: number = Number(numero.toFixed(2));
console.log(truncado);

// Obtener la longitud de la cantidad de numeros 
let numero2: number = 12345;
let longitud = numero2.toString().length;
console.log(longitud);

// obtener el numero minimo del siguiente arreglo 
const numeros = [10, 5, 8, 3, 12];
const minimo = Math.min.apply(null, numeros);
console.log(minimo);

const numeros2 = [10, 5, 8, 3, 12];
const maximo = Math.max.apply(null, numeros2);
console.log(maximo);



// Obtener la suma total de los numeros 
const numeros3 = [1, 2, 3, 4, 5];
const sumaTotal = numeros3.reduce((suma, numero) => suma + numero, 0);
console.log(sumaTotal);

// obtener el numero mayor de los siguientes numeros 
const numeros4 = [5, 10, 3, 8, 12, 9];
const mayor = Math.max(...numeros4);
console.log(mayor);

// obtener el segundo numero mayor de los siguientes numeros 
const numeros5 = [5, 10, 3, 8, 12, 9];
const maximo1 = Math.max(...numeros5);

const segundoMayor = Math.max(...numeros5.filter(num => num !== maximo));

console.log(segundoMayor);


// ordenar el siguiente arreglo de menor a mayor 
const numeros6 = [5, 10, 3, 8, 12];
numeros6.sort((a, b) => a - b);

console.log(numeros6);