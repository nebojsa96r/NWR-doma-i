

function createRating(options){
    const rating = document.getElementById(options.holder)
    document.body.classList = 'bg-stone-900'

    const text = document.createElement('span')
    text.innerText = options.name
    text.classList = 'text-white '
    rating.appendChild(text)

    const iconDiv = document.createElement('div')
    rating.appendChild(iconDiv)
    iconDiv.classList = 'flex '

    for (var i = 0, n = options.ratingNumber; i < n; i++){
        const star = document.createElement('div')
        star.setAttribute('data-product',i)
        star.setAttribute('id', 'star')
        //console.log(star)
        star.innerHTML = options.icon
        star.classList = 'flex '
        iconDiv.appendChild(star)
        const svg = star.getElementsByTagName('svg')
    const allStars = document.querySelectorAll('#star')
        
        //console.log(allStars[i].children[0])
   
    //
        //console.log(star)
        star.addEventListener('click',()=>{
            let currentStar = star.getAttribute('data-product',i)
            //console.log(currentStar)
            
            for (let j = 0 ; j < options.ratingNumber; j++){
                if(currentStar + 1 >= j ){
                    //allStars[j].children[0].setAttribute('stroke', options.color)
                   svg[0].setAttribute('stroke', options.color)
                    
                }
                
            }
        })

        star.addEventListener('mouseover',()=>{
            let currentStar = star.getAttribute('data-product',i)
            //console.log(currentStar)
            for (let j = 0 ; j < options.ratingNumber; j++){
                if(currentStar >= j){
                    allStars[j].children[0].setAttribute('stroke', options.color)
                    //console.log(j)
                    //svg[0].setAttribute('stroke', options.color)
                }
            }
            
            
        })   
        star.addEventListener('mouseout',()=>{
            let currentStar = star.getAttribute('data-product',i)
            //console.log(currentStar)
            for (let j = 0 ; j < options.ratingNumber; j++){
                if(currentStar >= j ){
                    //
                    //console.log(j)
                    //svg[0].setAttribute('stroke', '#000000')
                    allStars[j].children[0].setAttribute('stroke', '#000000')
                }

                
                   // allStars[j].children[0].setAttribute('stroke', '#000000')
                
            }
            //
        }) 
        
        



}
}

// createRating({
//     holder: 'primer-2',
//     ratingNumber: 5,
//     icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>',
//     color: '#e26d75',
//     name: 'Custom icon and color'
    
// })

// createRating({
//     holder: 'primer-3',
//     ratingNumber: 10,
//     icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>',
//     color: '#FFFF00',
//     name: '10 stars'
    
// })

createRating({
    holder: 'primer-4',
    ratingNumber: 5,
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>',
    color: '#FFFF00',
    name: 'Custom icon set'
    
})



    // createRating({
    //     holder: 'primer-1',
    //     ratingNumber: 5,
    //     icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>',
    //     color: '#FFFF00',
    //     name: 'Custom empty icon'
        
    // })


    


