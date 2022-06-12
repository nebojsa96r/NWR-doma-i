

let convert = document.getElementById('btn')
let rsd = document.getElementById('rsd')
let eur = document.getElementById('eur')

convert.addEventListener('click',()=>{
    eur.value = rsd.value / 118
})