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
const cardName = document.createElement('h1')
const cardButton = document.createElement('button')
const species = document.createElement('p') 
const origin = document.createElement('p')
const dblClick = document.createElement('h5')

    

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


         dblClick.innerHTML = "<em>Double click above for a message from me!</em>"
    
         species.textContent = `Species: ${info.species}`
         origin.textContent = `Origin: ${info.origin}`
         
         shipCard.append(cardName, cardImage, dblClick, species, origin)

        outerCard.classList.remove('hide');
       
   })
   
    }

}
// click event for closeout button
closeButton.addEventListener('click', (e) => {
    outerCard.classList.add('hide');
})

//click event for message from the aliens
cardImage.addEventListener('dblclick', (e) => {
    alert(`Greetings, human. I am ${e.target.dataset.name}, from ${e.target.dataset.origin}.`)
 })


    