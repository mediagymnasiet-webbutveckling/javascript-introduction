// 1. Skapa ett div-element
const div = document.createElement('div');
// 2. Lägg till en klass som heter "wrapper" till div:en
div.classList.add('wrapper');
// 3. Lägg div:en i body:n
document.body.appendChild(div);

// 4. Skapa en oordnad list (ul) om tre li:s med texten  figo, rusty, benji i vardera. Gör detta med en template string.
const ul = `<ul>
  <li>one</li>
  <li>two</li>
  <li>three</li>
</ul>`;

// 5. Lägg ul-listan i wrappern m.h.a metoden innerHTML
div.innerHTML = ul;

// 6. Skapa ett bild-element
const img = document.createElement('img');

// 7. Sätt src till https://placedog.net/640/480?random
img.src = 'https://picsum.photos/500';

// 8. Sätt bredden och höjden för bilden till 250
img.width = 250;
img.height = 250;

// 9. Lägg till en klass "dog" till bilden
img.classList.add('dog');

// 10. Lägg till bilden till wrappern med appendChild
div.appendChild(img);

// 11. Skapa denna HTML med template string
const myHTML = `
  <div class="myDiv">
    <p>Paragraph One</p>
    <p>Paragraph Two</p>
  </div>
`;


// 12. Lägg till denna HTML (innan) ul-listan (insertAdjecentHTML)
const ulElement = div.querySelector('ul');
console.log(ulElement);
ulElement.insertAdjacentHTML('beforebegin', myHTML);

// 13. Lägg till en klass "warning" på andra paragrafen 
const myDiv = div.querySelector('.myDiv');
myDiv.children[1].classList.add('warning');


// 14. Skapa en funktion som heter generatePlayerCard som tar in tre parametrar: name, age, and height
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

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// 15. Skapa en ny div med klassen "cards"
const cards = document.createElement('div');
cards.classList.add('cards');

// 16. Låt funktionen generea följande: 
/* let cardsHTML = generatePlayerCard("dogname", 12, 150);
cardsHTML += generatePlayerCard("scott", 12, 150);
cardsHTML += generatePlayerCard("luke", 12, 150);
cardsHTML += generatePlayerCard("snickers", 12, 150);  */
let cardsHTML = generatePlayerCard('wes', 12, 150);
cardsHTML += generatePlayerCard('scott', 12, 150);
cardsHTML += generatePlayerCard('kait', 12, 150);
cardsHTML += generatePlayerCard('snickers', 12, 150);

// 17. Lägg till denna HTML till "cards" med innerHTML
cards.innerHTML = cardsHTML;

// 18. Lägg till cards i dokumentet alldeles innan wrapper-elementet (använd InsertAdjacentHTML)
div.insertAdjacentElement('beforebegin', cards);
// append those cards to the div
// put the div into the DOM just before the wrapper element
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

