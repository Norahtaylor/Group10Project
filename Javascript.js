// fecth all starship data
function getStarships() {
    fetch('https://finalspaceapi.com/api/v0/character')
    .then(res => res.json())
    .then(data => {
        renderData(data) })
}
getStarships()

//variables 
const shipCard = document.getElementById("card")
const shipName = document.getElementById("shipName")
const shipList = document.getElementById("list")
const outerCard = document.getElementById("outerCard")
const closeButton = document.getElementById("close")

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
         cardImage.classList.add('pic');
         cardImage.dataset.name = info.name;
         cardImage.dataset.origin = info.origin;
         cardImage.addEventListener('dblclick', (e) => {
            alert(`Greetings, human. I am ${e.target.dataset.name}, from ${e.target.dataset.origin}.`)
         })

         dblClick.innerHTML = "<em>Double click above for a message.</em>"
    
         species.textContent = `Species: ${info.species}`
         origin.textContent = `Origin: ${info.origin}`
    
         cardButton.style.textAlign = "center" // how do we center the button?
         cardButton.innerHTML = "" //can we edit the button style in innerHTML? 
         //add button event listener 
         
         
         shipCard.append(cardName, cardImage, dblClick, species, origin, cardButton)
        //  shipCard.reset() why isnt this reset working? :corey did we get this one?

        outerCard.classList.remove('hide');
       
   })
   
    }

}

closeButton.addEventListener('click', (e) => {
    outerCard.classList.add('hide');
})

// event listener for message from the image 
function dblClickEvent(data) {
    console.log(data);
    cardImage.addEventListener('dblclick', (e) => {
        alert(`Greetings, human. I am ${data.name}, from ${data.origin}.`)
     })
    }
    


//build starship info 

// build the button for like 

// build mouseover for the image 


