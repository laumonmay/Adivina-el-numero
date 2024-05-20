"use strict";

// 1. QUERY-SELECTOR

const numberElement = document.querySelector(".js_number"); 
const buttonElement = document.querySelector(".js_button"); 
const clueElement = document.querySelector(".js_clue");
const attemptsElement = document.querySelector(".js_attempts");

// 2. VARIABLES GLOBALES:

// Al cargar la página
const randomNumber = getRandomNumber(100); // Guarda el nº aleatorio al llamar a la funcion.
console.log(randomNumber);

let attemptsNumber = 0; // Guarda el numero de intentos origen 0

// 3. FUNCIONES

// Genera el nº Aleatorio
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}


// Verifica
function checkNumbers(numberValue, randomNumber) {
 
   if (numberValue < 1 || numberValue > 100) {
    giveClue(`🔎 El nº se encuentra entre 1 y 100. ¡A por ello!`); // llamo a la funcion para introducir este argumento
  } else if (numberValue < randomNumber) {
    giveClue(`¡Casi lo logras 😲! Prueba un número más alto.`);
  } else if (numberValue > randomNumber) {
    giveClue(`¡No te rindas 💪! El número que buscas es menor que ${numberValue}.`);
  } else if (numberValue === randomNumber) {
    giveClue(`¡🏆 Ganaste! ¡Has encontrado el número secreto! `);
  } 

};

// Pista:

function giveClue (message) {
  clueElement.innerHTML = message;
}

// Contador de intentos:

function attemptsCounter(){
  attemptsNumber = attemptsNumber + 1;  // le sumo 1
  attemptsElement.innerHTML = `Número de intentos: ${attemptsNumber}`; // cambio el innerHTML para actualizarlo
}

// 4. EVENTOS

buttonElement.addEventListener("click", (event) =>{
  const userNumber = parseInt(numberElement.value);
  checkNumbers(userNumber, randomNumber); 
  attemptsCounter();
});