// VARIABLES
const charactersBlock = document.getElementById('characters-block')
let input = document.getElementById('input')
const apiURL = 'https://rickandmortyapi.com'
let pageNumber = 1

// Getting all characters
function getAllCharacters() {
  fetch(`${apiURL}/api/character/?page=${pageNumber}`)
  .then(response => response.json())
  .then(data =>{
      data.results.forEach(element => {
        createOneCharacter(element)
      }); 
  })
}
getAllCharacters(pageNumber)

//  CREATING CHARACTERS
function createOneCharacter(characterData){
  const oneCharacter = document.createElement('a')
  oneCharacter.classList = 'bg-white w-[500px] h-[110px] flex items-center justify-center m-1 cursor-pointer'
  oneCharacter.setAttribute('data-characterId', characterData.id)

  const iconDiv = document.createElement('div')
  iconDiv.classList = 'bg-white '
  const img = document.createElement('img')
  img.classList = 'w-[100px] h-[100px] rounded-full p-2'
  img.setAttribute('src',characterData.image)

  const informationsDiv = document.createElement('div')
  informationsDiv.classList = 'flex flex-col justify-center mt-10 ml-3'

  const nameOfCharacter = document.createElement('span')
  nameOfCharacter.classList = 'font-bold'
  nameOfCharacter.innerText = characterData.name

  const divOfInfo = document.createElement('div')
  divOfInfo.classList = 'flex'
    
  const divSpecies = document.createElement('div')
  divSpecies.classList = 'flex flex-col text-sm h-[100px] w-[100px]'

  const species = document.createElement('span')
  species.classList = 'text-slate-400'
  species.innerText = 'Species'

  const speciesValue = document.createElement('span')
  speciesValue.innerText = characterData.species

  const divOrigin = document.createElement('div')
  divOrigin.classList = 'flex flex-col text-sm h-[100px] w-[140px]'

  const origin = document.createElement('span')
  origin.classList = 'text-slate-400'
  origin.innerText = 'Origin'

  const originValue = document.createElement('span')
  originValue.innerText = characterData.origin.name

  const divLocation = document.createElement('div')
  divLocation.classList = 'flex flex-col text-sm h-[100px] w-[120px]'

  const location = document.createElement('span')
  location.classList = 'text-slate-400'
  location.innerText = 'Location'

  const locationValue = document.createElement('span')
  locationValue.innerText = characterData.location.name
  // appending
  divSpecies.appendChild(species)
  divSpecies.appendChild(speciesValue)
  divOfInfo.appendChild(divSpecies)

  divOrigin.appendChild(origin)
  divOrigin.appendChild(originValue)
  divOfInfo.appendChild(divOrigin)

  divLocation.appendChild(location)
  divLocation.appendChild(locationValue)
  divOfInfo.appendChild(divLocation)

  charactersBlock.appendChild(oneCharacter)
  iconDiv.appendChild(img)
  oneCharacter.appendChild(iconDiv)
  oneCharacter.appendChild(informationsDiv)
  informationsDiv.appendChild(nameOfCharacter)
  informationsDiv.appendChild(divOfInfo)
  //  EVENT LISTENER - going on the next page, character.html - all about a character
  oneCharacter.addEventListener('click',()=>{
      oneCharacter.setAttribute('href',`character.html?id=${characterData.id}`)
      })
  }

//  EVENT LISTENER - scrolling down and PAGINATION
  charactersBlock.addEventListener('scroll',()=>{
        let scrolled = charactersBlock.scrollTop + 500
        let scrollable = charactersBlock.scrollHeight
        if(scrolled === scrollable){
            pageNumber = pageNumber + 1
            console.log('page number is',pageNumber)
            getAllCharacters()
        }
    })

// SEARCHING CHARACTERS FROM INPUT FIELD
function searchCharacter(name){
  fetch(`${apiURL}/api/character/?name=${name}`)
  .then(response => response.json())
  .then(data =>{
      data.results.forEach(element => {
        createOneCharacter(element)
      });
  })
}
//searchCharacter()
input.addEventListener('keyup',()=>{
  charactersBlock.innerText = ''
  searchCharacter(input.value)
})