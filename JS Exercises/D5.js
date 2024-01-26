/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
console.log("----------------esercizio 1-------------------------");
const pets = ["dog", "cat", "hamster", "redfish"];
for (let index = 0; index < pets.length; index++) {
  console.log(pets[index]);
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
console.log("----------------esercizio 2-------------------------");
pets.sort();
console.log(pets);

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
console.log("----------------esercizio 3-------------------------");
pets.reverse();
console.log(pets);

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
console.log("----------------esercizio 4-------------------------");
const firstElement = pets.shift();
pets.push(firstElement);
console.log(pets);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
console.log("----------------esercizio 5-------------------------");

const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];
for (let index = 0; index < cars.length; index++) {
  cars[index].licensePlate = "A2";
}
console.log(cars);
/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
console.log("----------------esercizio 6-------------------------");
const newCar = {
  brand: "Fiat",
  model: "500",
  color: "white",
  trims: ["base", "l", "abart"],
};

cars.push(newCar);
for (let index = 0; index < cars.length; index++) {
  cars[index].trims.pop();
}
console.log(cars);

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
console.log("----------------esercizio 7-------------------------");

const justTrims = [];
for (let index = 0; index < cars.length; index++) {
  let trim = cars[index].trims[0];
  justTrims.push(trim);
}
console.log(justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
console.log("----------------esercizio 8-------------------------");
for (let index = 0; index < cars.length; index++) {
  if (cars[index].color[0] === "b") {
    console.log("Fizz");
  } else {
    console.log("Buzz");
  }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
console.log("----------------esercizio 9-------------------------");

const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
];
let lenghtArray = 0;
while (lenghtArray < numericArray.length) {
  if (numericArray[lenghtArray] !== 32) {
    console.log(numericArray[lenghtArray]);
    lenghtArray++;
  } else {
    console.log(numericArray[lenghtArray], "numero trovato");
    lenghtArray = 0;
    break;
  }
}
/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
console.log("----------------esercizio 10-------------------------");

const charactersArray = ["g", "n", "u", "z", "d"];
const position = [];
// const alphabet = "abcdefghijklmnopqrstuvwxyz";
// console.log(alphabet.length);
for (let index = 0; index < charactersArray.length; index++) {
  switch (charactersArray[index]) {
    case "a"||"A":
      position.push(1);
      break;
    case "b"||"B":
      position.push(2);
      break;
    case "c"||"C":
      position.push(3);
      break;
    case "d"||"D":
      position.push(4);
      break;
    case "e"||"E":
      position.push(5);
      break;
    case "f"||"F":
      position.push(6);
      break;
    case "g"||"G":
      position.push(7);
      break;
    case "h"||"H":
      position.push(8);
      break;
    case "i"||"I":
      position.push(9);
      break;
    case "j"||"J":
      position.push(10);
      break;
    case "k"||"K":
      position.push(13);
      break;
    case "l"||"L":
      position.push(14);
      break;
    case "m"||"M":
      position.push(15);
      break;
    case "n"||"N":
      position.push(16);
      break;
    case "o"||"O":
      position.push(17);
      break;
    case "p"||"P":
      position.push(18);
      break;
    case "q"||"Q":
      position.push(19);
      break;
    case "r"||"R":
      position.push(20);
      break;
    case "s"||"S":
      position.push(21);
      break;
    case "t"||"T":
      position.push(22);
      break;
    case "u"||"U":
      position.push(23);
      break;
    case "v"||"V":
      position.push(24);
      break;
    case "w"||"W":
      position.push(25);
      break;
    case "x"||"X":
      position.push(26);
      break;
    case "y"||"Y":
      position.push(26);
      break;
    case "z"||"Z":
      position.push(27);
      break;
  }
}
console.log(position)
