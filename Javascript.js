// fecth all starship data
function getStarships() {
    fetch('https://finalspaceapi.com/api/v0/character')
    .then(res => res.json())
    .then(data => {
        dblClickEvent(data)
        renderData(data) })
}
getStarships()

//variables 
const shipCard = document.getElementById("card")
const shipName = document.getElementById("shipName")
const shipList = document.getElementById("list")

//elements created 
const cardImage = document.createElement('img')
const cardName = document.createElement('h2')
const cardButton = document.createElement('button')
const species = document.createElement('p') 
const origin = document.createElement('p')
const dblClick = document.createElement('p')

//function to iterate through array 
function renderData(data) {
    for(const info of data) {
    const ships = document.createElement('li')
    
     ships.innerText = info.name
     list.appendChild(ships)
  
        //click event to see the alien details 
     ships.addEventListener('click', (e) => {

        cardName.textContent = info.name
         cardImage.src = info.img_url

         dblClick.innerHTML = "<em>Double click above for a message.</em>"
    
         species.textContent = `Species: ${info.species}`
         origin.textContent = `Origin: ${info.origin}`
    
         cardButton.style.textAlign = "center" // how do we center the button?
         cardButton.innerHTML = " " //can we edit the button style in innerHTML? 
         //add button event listener 
         
         shipCard.append(cardName, cardImage, dblClick, species, origin, cardButton)
        //  shipCard.reset() why isnt this reset working? 

       
   })
   
    }

}

// event listener for message from the image 
function dblClickEvent(data) {
    cardImage.addEventListener('dblclick', (e) => {
        alert(`Greetings, human. I am ${data.name}, from ${data.origin}.`)
     })
    }
    


//build starship info 

// build the button for vote 

// build mouseover for the image to turn 


