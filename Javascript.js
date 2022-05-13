// fecth all starship data

fetch('https://finalspaceapi.com/api/v0/character')
    .then(res => res.json())
    .then(data => {
        renderData(data)
    })


//variables 
const shipCard = document.getElementById("card")
const shipName = document.getElementById("shipName")
const shipList = document.getElementById("list")
const outerCard = document.getElementById("outerCard")
const closeButton = document.getElementById("close")

//elements created 
const cardImage = document.createElement('img')
const cardName = document.createElement('h1')
const species = document.createElement('p')
const origin = document.createElement('p')
const dblClick = document.createElement('h5')

// functions
function renderData(data) {
    for (const info of data) {
        const ships = document.createElement('li')
        ships.innerText = info.name
        
        //click event to see the alien details 
        ships.addEventListener('click', (e) => {
            renderCard(info)
            outerCard.classList.remove('hide');
        })
        list.appendChild(ships)
    }
}

function renderCard(info) {

    // clear card
    shipCard.innerHTML = '';
    
    // card name
    cardName.textContent = info.name

    // card image
    cardImage.src = info.img_url
    cardImage.classList.add('pic');
    cardImage.dataset.name = info.name;
    cardImage.dataset.origin = info.origin;
    cardImage.alt = info.name;

    // card species
    species.textContent = `Species: ${info.species}`

    // card origin
    origin.textContent = `Origin: ${info.origin}`

    // card button
    const cardButton = document.createElement('button')
    cardButton.className = "button"
    cardButton.innerHTML = "Double click me for a greeting!"
    cardButton.addEventListener('dblclick', (e) => {
        alert(`Greetings, human. I am ${info.name} and I am from ${info.origin}`)
    });

    shipCard.append(cardName, cardImage, species, origin, cardButton)

}

// click event for closeout button
closeButton.addEventListener('click', (e) => {
    outerCard.classList.add('hide');
})


shipList.addEventListener("mouseover", function (event) {
    // highlight the mouseover target
    event.target.style.color = 'yellow';

    setTimeout(function () {
        event.target.style.color = "";
    }, 1000);
}, false);