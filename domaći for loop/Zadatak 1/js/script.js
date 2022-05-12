

let duzinaNiza = prompt('Koliko članova u nizu želite?')
let niz = []
let string = 'izmenjeno'
let noviNiz = []

function prikazNovogNiza (){
for(let i=0;i<duzinaNiza; i=i+1){
 let broj=prompt('Unesite član u nizu')
 niz.push(broj)
 noviNiz[i] =  niz[i] + " IZMENJANO"
 
}
document.write(`Vaš novi niz izgleda ovako:[ ${noviNiz}  ]`)
}

prikazNovogNiza()