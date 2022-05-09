// fecth all starship data
function getStarships() {
    fetch('https://swapi.py4e.com/api/starships')
    .then(res => res.json())
    .then(data => console.log(data))
}
getStarships()

//variables 


//build starship info 


 
