// fecth all starship data
function getStarships() {
    fetch('https://swapi.py4e.com/api/starships')
    .then(res => res.json())
    .then(data => renderData(data))
}
getStarships()

//variables 
const shipCard = document.getElementById("shipCard")
const shipName = document.getElementById("shipName")
const shipList = document.getElementById("shipList")



function renderData(data) {
    for(const info of data.results) {
     const ships = data.results
     const shipDetails = document.createElement('li')
    
     shipDetails.innerText = info.name
     console.log(shipDetails)
     shipList.append(shipDetails)
        
    }
}


//build starship info 

//build starship info with image, name and starship class 

// build the button for vote 

// build mouseover for the image to turn 


//click event to see the details 
