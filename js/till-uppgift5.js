
// Välja element med DOM 
const h1 = document.querySelector("h1");
const input = document.querySelector("input");
const form = document.querySelector("form");

// Ändra innehåll
h1.textContent = "Ny text";


// Lyssna på submit-event på formuläret
form.addEventListener('submit', handleSubmit);

// Funktion för att hantera submit
function handleSubmit() {

// Hämta värde från input
let firstname = input.value;
console.log(firstname);

// Villkorssats. Obs! === vs == 
if(firstname === 'Sandra') {
    console.log('Välkommen Sandra');
}

}



