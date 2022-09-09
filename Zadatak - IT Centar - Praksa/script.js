document.body.classList = 'bg-blue-300 h-screen flex justify-center items-center flex-col'
//Variables
const charactersBlock = document.getElementById('characters-block')
const apiURL = 'https://rickandmortyapi.com'
let charactersId 
let pageNumber = 1
let input = document.getElementById('input')
let inputValue = input.value

// Getting a whole informations from JSON
function getAllCharacters() {
  fetch(`${apiURL}/api/character/?page=${pageNumber}`)
  .then(response => response.json())
  .then(data =>{
      data.results.forEach(element => {
        createOneCharacter(element)
      });
      console.log(data) 
  })
  }

  getAllCharacters(pageNumber)

//Creating a characters
  function createOneCharacter(results){
    const oneCharacter = document.createElement('a')
    oneCharacter.classList = 'bg-white w-[530px] h-[100px] flex m-1 cursor-pointer'
    oneCharacter.setAttribute('data-char', results.id)

    const iconDiv = document.createElement('div')
    iconDiv.classList = 'bg-white '
    const img = document.createElement('img')
    img.classList = 'w-[100px] h-[100px] rounded-full p-3'
    img.setAttribute('src',results.image)

    const informationsDiv = document.createElement('div')
    informationsDiv.classList = 'mt-3'

    const nameOfCharacter = document.createElement('span')
    nameOfCharacter.classList = 'font-bold ml-2 '
    nameOfCharacter.innerText = results.name

    const divOfInfo = document.createElement('div')
    divOfInfo.classList = 'flex flex-around ml-2'
    
    const divSpecies = document.createElement('div')
    divSpecies.classList = 'flex flex-col text-sm h-[100px] w-[100px]'

    const species = document.createElement('span')
    species.classList = 'text-slate-400'
    species.innerText = 'Species'

    const speciesValue = document.createElement('span')
    speciesValue.innerText = results.species

    const divOrigin = document.createElement('div')
    divOrigin.classList = 'flex flex-col text-sm h-[100px] w-[140px]'

    const origin = document.createElement('span')
    origin.classList = 'text-slate-400'
    origin.innerText = 'Origin'

    const originValue = document.createElement('span')
    originValue.innerText = results.origin.name

    const divLocation = document.createElement('div')
    divLocation.classList = 'flex flex-col text-sm h-[100px] w-[120px]'

    const location = document.createElement('span')
    location.classList = 'text-slate-400'
    location.innerText = 'Location'

    const locationValue = document.createElement('span')
    locationValue.innerText = results.location.name

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
    //Event listener - going on the next page - all about a character
    oneCharacter.addEventListener('click',()=>{
        console.log(oneCharacter)
        oneCharacter.setAttribute('href','character.html')
        charactersId = results.id
        console.log(charactersId)
        localStorage.setItem('charId', JSON.stringify(charactersId))
      })
}
//Event listener - scrolling down and PAGINATION
  charactersBlock.addEventListener('scroll',()=>{
    //    const scrollable = charactersBlock.documentElement.scrollTop - window.innerTop
        let scrolled = charactersBlock.scrollTop + 500
        let scrollable = charactersBlock.scrollHeight
        if(scrolled === scrollable){
            pageNumber = pageNumber + 1
            console.log('page number is',pageNumber)
            getAllCharacters()
        }
        console.log()
    })

// Searching characters from input field
function getSearchCharacter() {
      

  let arrayId = []
  const namesOfCharacters = []
  let newNames = []
// ArrayId is for fetch, I call every info about characters from JSON ; 827 - because there is 826 diferents characters and plus 1 because i need to start from 1 - as first id is 1
  for(let i = 1; i < 827; i++){
    arrayId.push(i)
  }


  fetch(`${apiURL}/api/character/${arrayId}`)
  .then(response => response.json())
  .then(data =>{
    data.forEach(element => {
        namesOfCharacters.push({name: element.name, id: element.id})
    });
    console.log(data)
  })
// Event listener for searching about single character
  input.addEventListener('keyup',(e)=>{
  let forPreparing = []
  let newInput = input.value
      
  if(newInput.length){
    newNames = namesOfCharacters.filter((item)=>{
    return item.name.toLocaleLowerCase().includes(newInput.toLocaleLowerCase())
    }) 
  }else{
    getAllCharacters()
  }
  console.log(newNames)
  newNames.forEach(e =>{
  forPreparing.push(e.id)
  })
  console.log(forPreparing)
  charactersBlock.innerText = ''
// I call fetch again, but this time I wont to show a character whitch user want to search
  fetch(`${apiURL}/api/character/${forPreparing}`)
  .then(response => response.json())
  .then(data =>{
    if(data.length > 1){
      data.forEach(element => {
      createOneCharacter(element)
      });
    }else{
      createOneCharacter(data)
    }
  })
})
}
      getSearchCharacter()
      