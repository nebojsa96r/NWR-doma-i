class Phone{

    constructor(modelTelefona,trajanjeGarancije,godinaProizvodnje,baterija){
    this.modelTelefona = modelTelefona
    this.trajanjeGarancije = trajanjeGarancije
    this.godinaProizvodnje = godinaProizvodnje
    this.baterija = baterija
    this.isTurnOn = false
    }

    
    turnOn(){
        if(this.isTurnOn === false && this.baterija === 0){
        console.log('Telefon ima 0% baterije.Molimo da napunite bateriju.')
    }else if( this.isTurnOn === false ){
        this.isTurnOn = true
        console.log('Telefon je uključen')
    }else{
        console.log('Telefon je već uključen.')
    }
}
    turnOff(){
        if(this.isTurnOn === false){
            console.log('Telefon već ugašen')
        }else{
            this.isTurnOn = false
            console.log('Telefon je ugašen')
        }
    }

    garancija(){
        let danas = new Date().getFullYear() - this.godinaProizvodnje
      if(danas <= this.trajanjeGarancije){
          console.log('Telefon je u garanciji')
      }else{
          console.log('Garancija je istekla')
      }
}
    set setBaterija(stanje){
        this.baterija = stanje
        if(this.baterija === 0){
            this.isTurnOn = false
        }
    }
}

let telefon = new Phone('Samsung',2,2020,66)


