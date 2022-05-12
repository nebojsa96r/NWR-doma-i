let brojOd = +prompt('Unesite broj od koga kreće sabiranje')
let brojDo = +prompt('Unesite broj do koga ide sabiranje')
let sum = 0


function zbir(){
    for(let i = brojOd; i <= brojDo; i=i+1){
    sum = sum + i 
}
document.write(`Zbir brojeva u opsegu koji ste zadali je: ${sum}`)
}

zbir(brojOd,brojDo)