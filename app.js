//1.	Crea un programa que utilice console.log para mostrar un mensaje de bienvenida.
console.log("¡Bienvenido al desafío de Java, G9 ALURA!");

//Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza console.log para mostrar el mensaje "¡Hola, [tu nombre]!" en la consola del navegador.
let nombre = "Daniela Prieto";
console.log("¡Hola, " + nombre + "!");

//3.	Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza alert para mostrar el mensaje "¡Hola, [tu nombre]!".    
alert("¡Hola, " + nombre + "!");

//4.
let lenguajePreferido = prompt("¿Cuál es el lenguaje de programación que más te gusta?");
console.log("Mi lenguaje de programación favorito es: " + lenguajePreferido);

//5.
let valor1 = 3;
let valor2 = 2;
let resultado = valor1 + valor2;
console.log("La suma de " + valor1 + " y " + valor2 + " es igual a " + resultado);

//6.
let resultadoResta = valor1 - valor2;
console.log("La diferencia entre " + valor1 + " y " + valor2 + " es igual a " + resultadoResta);

//7.
let edad = prompt("¿Cuál es tu edad?");
if (edad >= 18) {
    console.log("Eres mayor de edad.");
} else {
    console.log("Eres menor de edad.");
}

//8.
let numero = parseInt(prompt("Introduce un valor:"));
if (Math.sign (numero) === 1) {
    console.log("El número es positivo.");
} else if (Math.sign(numero) === -1) {
    console.log("El número es negativo.");
} else {
    console.log("El número es cero.");
}

//9.Utiliza un bucle while para mostrar los números del 1 al 10 en la consola.  
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

//10.	Crea una variable "nota" y asígnale un valor numérico. Utiliza un if-else para determinar si la nota es mayor o igual a 7 y muestra "Aprobado" o "Reprobado" en la consola. 
let nota = 10
if (nota >= 7) {    
    console.log("Aprobado");
}   else {
    console.log("Reprobado");
}

//11.
let aleatorio = Math.random();
console.log("Número aleatorio entre 0 y 1:", aleatorio);

//12. Utiliza Math.random para generar un número entero entre 1 y 10 y muestra ese número en la consola.
let numero1al10 = Math.floor(Math.random() * 10) + 1;
console.log("Número aleatorio entre 1 y 10: " + numero1al10);

//13. 
let numero1al1000 = Math.floor(Math.random() * 1000) + 1;
console.log("Número aleatorio entre 1 y 1000: " + numero1al1000);