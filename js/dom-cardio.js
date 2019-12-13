// Skapa ett div-element

const div = document.createElement("div");

// Lägg till en klass som heter "wrapper" till div:en

div.classList.add("wrapper");

// Lägg div:en i body:n

document.body.appendChild(div);

// Skapa en oordnad list (ul) om tre li:s med texten  figo, rusty, benji i vardera. Gör detta med en template string.
// Lägg ul-listan i wrappern m.h.a metoden innerHTML

const ul = `<ul>
<li>figo</li>
<li>rusty</li>
<li>benji</li>
</ul>`;

div.innerHTML = ul;

// Skapa ett bild-element

const img = document.createElement("img");

// Sätt src till https://placedog.net/640/480?random

img.src = "https://placedog.net/640/480?random";

// Sätt bredden och höjden för bilden till 250

img.width = 250;
img.height = 250;

// Lägg till en klass "dog" till bilden
img.classList.add("dog");

// Lägg till bilden till wrappern med appendChild
div.appendChild(img);

// Skapa denna HTML med template string
/* <div class="myDiv">
<p>Paragraph One</p>
<p>Paragraph Two</p>
</div> */
const myHTML = `
  <div class="myDiv">
    <p>Paragraph One</p>
    <p>Paragraph Two</p>
  </div>
`;

// Lägg till denna HTML (innan) ul-listan (insertAdjecentHTML)
const ulElement = div.querySelector("ul");
ulElement.insertAdjacentHTML("beforebegin", myHTML);

// Lägg till en klass "warning" på andra paragrafen 

const secondP = document.querySelectorAll(".myDiv p");
secondP[1].classList.add("warning");


// Skapa en funktion som heter generatePlayerCard som tar in tre parametrar: name, age, and height
// I funktionen ska följande HTML returneras. NAME, AGE och HEIGHT är variablerna
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS (age*7). That would be a tall dog!</p>
// </div>
function generatePlayerCard(name, age, height) {
    const html = `
      <div class="playerCard">
        <h2>${name} — ${age}</h2>
        <p>Their Height is ${height} and ${age} years old. In Dog years this person would be ${age *
      7}. That would be a tall dog!
          <button class="delete" type="button">&times; Delete</button>
      </p>
  
      </div>
    `;
    return html;
  }


// Skapa en ny div med klassen "cards"
const cards = document.createElement("div");
cards.classList.add("cards");

// Låt funktionen generea följande: 
let cardsHTML = generatePlayerCard("dogname", 12, 150);
cardsHTML += generatePlayerCard("scott", 12, 150);
cardsHTML += generatePlayerCard("luke", 12, 150);
cardsHTML += generatePlayerCard("snickers", 12, 150); 

// Lägg till denna HTML till "cards" med innerHTML
cards.innerHTML = cardsHTML;

// Lägg till cards i dokumentet alldeles innan wrapper-elementet (använd InsertAdjacentHTML)
div.insertAdjacentElement("beforebegin", cards);



