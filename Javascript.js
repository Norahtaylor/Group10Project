// fecth all starship data

    fetch('https://finalspaceapi.com/api/v0/character')
    .then(res => res.json())
    .then(data => {
        renderData(data)
        // dblClickEvent(data)
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
const cardButton = document.createElement('button')
const species = document.createElement('p') 
const origin = document.createElement('p')
const dblClick = document.createElement('h5')

cardButton.className = "button"



//function to iterate through array 

// const renderData = (data) => {
//    data.forEach()
// }

function renderData(data) {
    for(const info of data) {
    const ships = document.createElement('li')
    
     ships.innerText = info.name
     list.appendChild(ships)
  
        //click event to see the alien details 
     ships.addEventListener('click', (e) => {

        cardName.textContent = info.name
         cardImage.src = info.img_url
         cardImage.classList.add('pic');
         cardImage.dataset.name = info.name;
         cardImage.dataset.origin = info.origin;
    
         species.textContent = `Species: ${info.species}`
         origin.textContent = `Origin: ${info.origin}`
    
        cardButton.innerHTML = "\"Double click me for a greeting!\""
        cardButton.style.fontWeight = "bold"

        cardButton.addEventListener('dblclick', (e) => {
            alert(`Greetings, human. I am ${info.name} and I am from ${info.origin}`)
         
            // cardButton.innerHTML = ''
        })
         
         shipCard.append(cardName, cardImage, dblClick, species, origin, cardButton)

        outerCard.classList.remove('hide');
       
   })
   
    }
}

// click event for closeout button
closeButton.addEventListener('click', (e) => {
    outerCard.classList.add('hide');
})


shipList.addEventListener("mouseover", function( event ) {
    // highlight the mouseover target
     event.target.style.color = 'yellow'; 
  
    setTimeout(function() {
      event.target.style.color = "";
    }, 1000);
  }, false);