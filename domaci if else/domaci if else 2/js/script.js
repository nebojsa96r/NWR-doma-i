let broj = prompt('Unesite broj za ispitivanje')
let startniBroj = prompt('Unesite startni broj opsega')
let zavrsniBroj = prompt('Unesite završni broj opsega')

function opsegBrojeva(){
if(broj >= startniBroj && broj <= zavrsniBroj){
    document.write('Uneti broj je u zadatom opsegu.')
}else{
    document.write('Uneti broj nije u zadatom opsegu.')
}
}

opsegBrojeva(broj, startniBroj, zavrsniBroj)

