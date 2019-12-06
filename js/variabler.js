//1. var, let och const
//2. strict mode
"use strict"; //Bra att ha i början av ett script för att skriva säker kod!

var name = "Sandra"; //ES1  - gammal kvarleva
console.log(name);

age = 20;
console.log(age);

const name = "Sandra"; //ES6 - använd detta!
//name = "SSSandra"; //går ej att ändra
//console.log(name);

let age = 20;
age = 21;
console.log(age);

// var - functionscope
// let, const - blockscope

//3. Uppgift var vs let/const - vad händer om du
// deklarerar med let inne i funktionen till skillnad från var?
function foo() {
  let par = 1;
  if (par >= 0) {
    let bar = 2;
    console.log(par); // prints 1
    console.log(bar); // prints 2
  }
  console.log(par); // prints 1
  console.log(bar); // prints 2
}
foo();
