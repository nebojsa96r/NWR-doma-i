
let brojClanova = prompt('Unesite koliko članova želite da vaši nizovi imaju.')
let niz0 = []
let niz1 = []
let sum =[]
for(i=0; i<brojClanova;i=i+1){
    let broj0=+prompt('Unesite clanove prvog niza')
    niz0.push(broj0)
    let broj1=+prompt('Unesite clanove drugog niza')
    niz1.push(broj1)
    
}
for(var i = 0; i < niz0.length; i=i+1){
    sum.push(niz0[i] + niz1[i]);
 }
document.write(`Brojevi prvog niza su: [ ${niz0} ].`)
document.write(` Brojevi drugog niza su: [ ${niz1} ].`)
document.write(` Zbir prvog i drugog niza je: [ ${sum} ].`)