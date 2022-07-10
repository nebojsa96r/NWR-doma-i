class MyCar{

    constructor(image, left, top){
        this.left = left
        this.top = top
        //napravili smo auto i ubacili u body
        this.car = document.createElement('div')
        this.car.setAttribute('class','my-car')
        this.car.style.backgroundImage = `url(${image})`
        this.car.style.left = this.left
        this.car.style.top = this.top
        document.body.appendChild(this.car)

        //EVENT FOR CHANGE

        this.car.addEventListener('click',(event)=>{
            this.changeCar()
        })
    }

    goRight(){
        this.left = this.left + 10
        if(this.left < window.innerWidth - 90){
            this.car.style.left = this.left
            this.car.style.transform = 'rotate(180deg)'
        }
    }

    goLeft(){
        this.left = this.left - 10
        if(this.left >= 0){
            this.car.style.left = this.left
            this.car.style.transform = 'rotate(360deg)'
        }
        
    }

    goUp(){
        this.top = this.top - 10
        if(this.top >= 0){
            this.car.style.top = this.top
            this.car.style.transform = 'rotate(90deg)'
        }
    }

    goDown(){
        this.top = this.top + 10
        if(this.top < window.innerHeight - 90){
            this.car.style.top = this.top
            this.car.style.transform = 'rotate(270deg)'
        }
    }

    changeCar(){
        this.car.style.backgroundImage = `url(${car3.png})`
    }

}


let car = new MyCar('car.png.jfif',0,0)

let car2 = new MyCar('car3.png',200,200)

// EVENT LISTENER
document.addEventListener('keydown', (event)=>{
    let keyName = event.key
    if(keyName === 'ArrowRight'){
        car.goRight()
    }
    if(keyName === 'ArrowLeft'){
        car.goLeft()
    }
    if(keyName === 'ArrowDown'){
        car.goDown()
    }
    if(keyName === 'ArrowUp'){
        car.goUp()
    }
})

//drugi nacin da se odradi eventlistener
// let buttonUp = document.getElementById('go-up')
// buttonUp.addEventListener('clic',(event)=>{
    //car.goUp()
//})

let buttonDown = document.getElementById('go-down')

buttonDown.addEventListener('click',(event)=>{
    car.goDown()
})

