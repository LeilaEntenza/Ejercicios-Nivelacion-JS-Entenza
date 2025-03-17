function getName(){
    const nombre = document.getElementById('Nombre');
    console.log ('¡Hola ' + nombre.value + '!');
}

function realizarOperaciones(){
    const num1 = document.getElementById('Num1').valueAsNumber;
    const num2 = document.getElementById('Num2').valueAsNumber;
    console.log ('Suma: ' + sumar(num1, num2));
    console.log ('Resta: ' + restar(num1, num2));
    console.log ('Multiplicación:' + multiplicar(num1, num2));
    if (num2 != 0) console.log ('División: ' + dividir(num1, num2));
    else console.log ('División: la división no es válida');
}

const sumar = (num1, num2) => num1 + num2;
const restar = (num1, num2) => num1 - num2;
const multiplicar = (num1, num2) => num1 * num2;
const dividir = (num1, num2) => num1 / num2;

function parImpar(){
    const num = document.getElementById('numParImpar').valueAsNumber;
    if(num%2 != 0) console.log('Es impar');
    else console.log('Es par');
}

function cantidadLetras(){
    const palabra = document.getElementById('palabraCaracteres').value;
    let respuesta = document.getElementById('respuesta');
    respuesta.innerHTML = "La longitud de la palabra es: " + palabra.length;
}

function repetirFrase(){
    const frase = document.getElementById('frase').value;
    const repeticiones = document.getElementById('repeticiones').valueAsNumber;
    for (let i = 0; i < repeticiones; i++){
        console.log(frase);
    }
}

function realizarTablas(){
    const num = document.getElementById('numTabla').valueAsNumber;
    for (let i = 1; i <= 10; i++){
        console.log(num + ' multiplicado por ' + i + ' es igual a ' + num*i);
    }
}

let numRandom = Math.floor(Math.random()* (11-1)+1);

function adivinarNum(){
    let num = document.getElementById('adivina').valueAsNumber;
    let estado = document.getElementById('estado');
    console.log(numRandom);  

    if(num == numRandom){
        numRandom = Math.floor(Math.random()* 10 + 1);
        estado.innerHTML = 'Ganaste, ingresa otro número para seguir jugando :D'; 
           
    }
    else if (numRandom>num){
        estado.innerHTML = 'Es mayor';
    }
    else {
        estado.innerHTML = 'Es menor';    }
}

function obtenerVocales(){
    const palabra = document.getElementById('palabraVocales').value.toLowerCase();
    let contadorVocales = 0;
    let cantVocales = document.getElementById('cantVocales');
    for (let i = 0; i < palabra.length; i++){
        if(palabra[i] == 'a' || palabra[i] == 'e' || palabra[i] == 'i' || palabra[i] == 'o' || palabra[i] == 'u'){
            contadorVocales ++;
        }
    }
    cantVocales.innerHTML = 'La cantidad de vocales en la palabra ' + palabra + ' es igual a ' + contadorVocales;
}

function obtenerRevertida(){
    const palabra = document.getElementById('palabraReversa').value;
    let revertida = document.getElementById('palabraRevertida');
    revertida.innerHTML = palabra.split('').reverse().join('');
}

function esPalindromo(){
    const palabra = document.getElementById('palabraVerificar').value;
    let palindromo = document.getElementById('palindromo');
    if(palabra==palabra.split('').reverse().join('')){
        palindromo.innerHTML = 'Es palíndromo :)';
    }
    else{
        palindromo.innerHTML = 'No es paíndromo :(';
    }
}