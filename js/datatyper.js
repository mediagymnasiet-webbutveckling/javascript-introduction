/* JS har dynamisk typning vilket betyder att 
dataypen tilldelas automatiskt till variablerna */
// SNOBUSN

//1. String

const name = "Sandra";
const city = "Stockholm";

//console.log("Jag heter " + name + " och bor i " + city);

//Template strings ES6 - backticks - smidigt och bra!
console.log(`Jag heter ${name}  och bor i ${city}`);

// 2. Number - double, vilket gör att du även kan använda decimaler

let age = 99.00023443224;
age++;
console.log(age);

let test = 5 + "5";
console.log(test); //Blir 55

console.log(typeof name); //Typeof kollar vilken datatyp det är!

//3. Objekt

var person = {
  name: "Sandra",
  age: 20,
  hobbies: ["teaching", "movies"]
};
console.log(person.name);

// 4. Boolean - true/false

let friday = true;

// == vs === Best practice - använd alltid tre!
// === gör även check på datayp!
let a = 2;
let b = 2;
if (a === b) {
  console.log("a och b är samma även vad gäller datatyp");
}

//5. Undefined - om en variabel inte initierats med ett värde!
let number;
console.log(number); //Ge undefined

//6. Null
//Nästan som undefinied fast om man vill sätta det till "inget" i efterhand

let age = 99;
age = null; //Sätter variabeln till inget

//7. Symbol //Ny i ES6 . Vi kommer inte använda den, så du behöver inte lära dig den
