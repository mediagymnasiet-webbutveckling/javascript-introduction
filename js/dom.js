// 1. VÄLJA ELEMENT
// Olika metoder för att välja element
const p = document.querySelector("p"); //Väljer första elementet 
console.log(p);

const ps = document.querySelectorAll("p");// Väljer alla, sparas som en "array"
console.log(ps[3]);

// Byta textinnehåll på element

p.textContent = "Ny text här!!!";


// 2. ÄNDRA KLASS

// Lägga till, ta bort eller toggla klasser

const img = document.querySelector(".custom");

//img.classList.add("round");
//img.classList.remove("round");

// Klick-event för att toggla klass
img.addEventListener("click", changeImage);

function changeImage() {
    img.classList.toggle("round");

}

// 3. SKAPA ELEMENT
// En paragraf med texten "Jag är en paragraf!" och class="special"

const newP = document.createElement("p");
newP.textContent ="Jag är en paragraf!";
newP.classList.add("special");

// En bild med src = "https://picsum.photos/500" och alt="Snyggt foto!"

const newImage = document.createElement("img");
newImage.src = "https://picsum.photos/100";


// En div med class="wrapper"
const div = document.createElement("div");
div.classList.add("wrapper");

// Lägg paragrafen och bilden som barn till diven (appendChild)
div.appendChild(newP);
div.appendChild(newImage);

// Diven läggs som barn till body (läggs sist)
document.body.appendChild(div);

// Hur styra var man kan lägga till ett element? - insertAdjacentElement
// Skapa en rubrik med texten "En huvudrubrik" och lägg högst

document.body.insertAdjacentElement("afterbegin", div);

// ÖVNING! Skapa en ul-list med 3st li-element med text one, two, three, four, five och lägg efter huvdrubriken
// <ul>
// <li>One</li>
// <li>two</li>
// <li>three</li>
// </ul>

// Skapa html med TEMPLATE STRINGS`` (backticks)
// Skapa variabler för bildbredd, src (https://picsum.photos/BREDD) och bildbeskrivning ;
// Följande HTML-sträng
/*  
    const myHTML = `
        <div class="wrapper">
            <h2>En bild</h2>
            <img src="URL" alt="BESKRIVNING"/>
        </div>
        `; 
*/
const imgURL = "https://picsum.photos/200"
const desc = "En bild";
const myHTML = `
<div class="wrapper">
    <h2>En bild</h2>
    <img src="${imgURL}" alt="${desc}"/>
</div>
`; 

// Lägga till HTML-strängen med innerHTML till wrappern

div.innerHTML = myHTML;

