//  VARIABLES
const backButton = document.getElementById('back-button')
const apiURL = 'https://rickandmortyapi.com'
const img = document.getElementById('img')
const characterName = document.getElementById('character-name')
const characterSpecies = document.getElementById('character-species')
const characterOrigin = document.getElementById('character-origin')
const characterLocation = document.getElementById('character-location')
const characterStatus = document.getElementById('character-status')
const characterGender = document.getElementById('character-gender')
const episodes = document.getElementById('episodes')

//  URL params
let currentUrl = document.URL
let url = new URL(currentUrl)
let searchParams = url.searchParams
let characterId = searchParams.get('id')

//  EVENT LISTENER - back button
backButton.addEventListener('click',()=>{
    backButton.setAttribute('href','index.html')
})

function getOneProduct(){
    fetch(`${apiURL}/api/character/${characterId}`)
    .then(response => response.json())
    .then(data =>{
        createOneCharacter(data)
    })
}

function createOneCharacter(data){
    img.setAttribute('src', data.image)
    characterName.innerText = data.name
    characterSpecies.innerText = data.species
    characterOrigin.innerText = data.origin.name
    characterLocation.innerText = data.location.name
    characterStatus.innerText = data.status
    characterGender.innerText = data.gender
    data.episode.forEach(element => {
        const list = document.createElement('a')
        list.innerText = element
        episodes.appendChild(list)
    });
}
getOneProduct()