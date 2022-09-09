const backNav = document.getElementById('back-nav')
let fromLocalStorage = JSON.parse(localStorage.getItem('charId'))
const apiURL = 'https://rickandmortyapi.com'
const img = document.getElementById('img')
const characterName = document.getElementById('character-name')
const species = document.getElementById('species')
const origin = document.getElementById('origin')
const locationN = document.getElementById('locationN')
const status = document.getElementById('status')
const gender = document.getElementById('gender')
const episodes = document.getElementById('episodes')

backNav.addEventListener('click',()=>{
    backNav.setAttribute('href', 'index.html')
})

function getOneProduct(){
    fetch(`${apiURL}/api/character/${fromLocalStorage}`)
    .then(response => response.json())
    .then(data =>{
        createOneCharacter(data)
        console.log(data) 
    })
}

function createOneCharacter(data){
    
    img.setAttribute('src', data.image)
    characterName.innerText = data.name
    species.innerText = data.species
    origin.innerText = data.origin.name
    locationN.innerText = data.location.name
    status.innerText = data.status
    gender.innerText = data.gender
    data.episode.forEach(element => {
        const list = document.createElement('a')
        
        list.innerText = element
        episodes.appendChild(list)
    });
}

getOneProduct()




