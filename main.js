// Calcula la operación 2 elevado a la 4
let resultado1 = Math.pow(2, 4);
console.log(resultado1); // Resultado: 16

// Calcula la raíz cuadrada de 25
let resultado2 = Math.sqrt(25);
console.log(resultado2); // Resultado: 5

// Calcula el valor absoluto de la operación 4 - 5
let resultado3 = Math.abs(4 - 5);
console.log(resultado3); // Resultado: 1

// Calcula la raíz cuadrada de 2 y redondea el resultado
let resultado4 = Math.round(Math.sqrt(2));
console.log(resultado4); // Resultado: 1

// Calcula la operación 10 dividido entre 3 y redondea el resultado hacia abajo
let resultado5 = Math.floor(10 / 3);
console.log(resultado5); // Resultado: 3

// Calcula la operación 3 dividido entre 2 y redondea el resultado hacia arriba
let resultado6 = Math.ceil(3 / 2);
console.log(resultado6); // Resultado: 2

// Dada la siguiente lista de números [5, 3, 6, 4, 2, 9, 8]
// Encuentra el número más bajo y guárdalo en la variable min
let numeros = [5, 3, 6, 4, 2, 9, 8];
let min = Math.min(...numeros);
console.log(min); // Resultado: 2

// Encuentra el número más alto y guárdalo en la variable max
let max = Math.max(...numeros);
console.log(max); // Resultado: 9
