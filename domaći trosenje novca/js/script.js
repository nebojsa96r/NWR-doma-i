let racun = 1000
let utrosak = 0
do{
    racun = racun - utrosak
    if(racun <= 0){
        break;
    }
    utrosak = +prompt('koliko opet zelite da potrosite')
}while(racun > 0){
   
    console.log(`Na vasem racunu je : ${racun}`)
    
}




