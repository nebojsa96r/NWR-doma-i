let broj = +prompt('Unesite broj za ispitivanje')

function parnostBrojeva(){
if(typeof broj != 'number' || isNaN(broj)){
    document.write('Niste uneli broj, pokušajte ponovo.')
}
else if( broj % 2 == 0){
    document.write('Uneti broj je parni broj.')
}else{
    document.write('Uneti broj je neparni broj.')
}
}

parnostBrojeva(broj)