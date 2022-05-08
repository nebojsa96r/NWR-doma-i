let prviBroj = prompt('Unesite prvi broj')
let drugiBroj = prompt('unesite drugi broj')
let treciBroj= prompt('unesite treći broj')

function najveciBroj(){
   if(prviBroj > drugiBroj && prviBroj > treciBroj){
        document.write(`Najveći broj je ${prviBroj} `)
    }else if(drugiBroj > prviBroj && drugiBroj > treciBroj){
        document.write(`Najveći broj je ${drugiBroj}`)
    }else{
        document.write(`Najveći broj je ${treciBroj}`)
    }
}

najveciBroj(prviBroj, drugiBroj, treciBroj)