
//  VARIABLES
const allCountries = document.getElementById('all-countries')
const API_URL = 'https://api.covid19api.com'
const searchButton = document.getElementById('search-button')
const informationsBlock = document.getElementById('informations')
const dateFrom = document.getElementById('from')
const dateTo = document.getElementById('to')
const starterBlock = document.getElementById('starter-block')




//FUNCTIONS FEATCH
function getAllCountries (){

    fetch(`${API_URL}/countries`)
    .then(res => res.json())
    .then(countries => {
        console.log(countries)
        countries.forEach(country=>{
            createOptions(country)
            console.log(country)
        })
})
}

function getInformationsBy(){

    fetch(`${API_URL}/country/${allCountries.value}/status/confirmed?from=${dateFrom.value}&to=${dateTo.value}`)
    .then(res => res.json())
    .then(country => {
       country.forEach(element =>{
        createInformations(element)
        console.log(country)
       })
})
}

//FUNCTIONS CREATE

function createOptions (country){

    const option = document.createElement('option')
    option.innerText = country.Country
    option.setAttribute('value', country.Slug)
    allCountries.appendChild(option)

}

function createInformations(element){
    //Main block
    const mainBlock = document.createElement('div')
    mainBlock.classList = 'w-[300px] h-[200px] border bg-stone-200 mt-3 ml-2 mb-10'

    //informations
    const nameCountry = document.createElement('h1')
    nameCountry.innerText = `Country : ${element.Country}`
    nameCountry.classList = 'text-cyan-800 text-2xl font-medium mb-1 ml-2'

    const date = document.createElement('p')
    date.innerText = `Date : ${element.Date}`
    date.classList = 'text-cyan-800 text-xl mb-1 ml-2'

    const status = document.createElement('p')
    status.innerText = `Status : ${element.Status}`
    status.classList = 'text-cyan-800 text-xl mb-1 ml-2'

    const cases = document.createElement('p')
    cases.innerText = `Cases : ${element.Cases}`
    cases.classList = 'text-cyan-800 text-2xl ml-2'


    //appending
    mainBlock.appendChild(nameCountry)
    mainBlock.appendChild(date)
    mainBlock.appendChild(status)
    mainBlock.appendChild(cases)
    informationsBlock.appendChild(mainBlock)
}

//EVENT LISTENERS
searchButton.addEventListener('click', ()=>{
    if(allCountries.value === ''|| dateFrom.value === ''|| dateTo.value === ''){
        alert('Fill all filter filds!')
    }else{
        informationsBlock.innerText = ''
        starterBlock.classList = 'hidden'
        informationsBlock.classList.remove('hidden')
        getInformationsBy()
    }
})

getAllCountries()