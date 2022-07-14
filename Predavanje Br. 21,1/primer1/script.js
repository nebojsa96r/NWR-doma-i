/**
 * =================================
 * *           VARIABLES
 * =================================
 */

const API_URL = 'https://dummyjson.com'
const allProductsElement = document.getElementById('all-products')
const productPopupElement = document.getElementById('product-popup')
const closePopupButton = document.getElementById('close-popup')
const listCategories = document.getElementById('list-categories')
const productDescription = document.getElementById('product-description')




//pagination

const prevBtn = document.getElementById('arrow-prew')
const nextBtn = document.getElementById('arrow-next')
let skipNumber = 0;
let totalProducts;

nextBtn.addEventListener('click',()=>{
    skipNumber = skipNumber + 8
    if(skipNumber >= totalProducts){
        skipNumber = skipNumber - 8
    }
    allProductsElement.innerText = ''
    getAllProducts()
})

prevBtn.addEventListener('click',()=>{
    skipNumber = skipNumber - 8
    if(skipNumber<0){
        skipNumber= 0
    }
    allProductsElement.innerText = ''
    getAllProducts()
})
/**
 * =================================
 * *      MAIN FUNCTIONALITY
 * =================================
 */

getAllProducts()
getCategories()

/**
 * =================================
 * *        HELPER FUNCTIONS
 * =================================
 */

// Get all products from API
function getAllProducts(){
    fetch(`${API_URL}/products?limit=8&skip=${skipNumber}`)
        .then(response => response.json())
        .then(data =>{
            console.log(data)
            totalProducts = data.total
            data.products.forEach(singleProduct => {
                createProductCard(singleProduct)
            });
        })
}

function createProductCard(product){
    // Product card 
    const productCard = document.createElement('div')
    productCard.classList = 'p-4 border flex flex-col items-center h-[250px] bg-white relative'
    
    
    // Product image
    const img = document.createElement('img')
    img.setAttribute('src', product.thumbnail)
    img.classList = 'h-[120px]'
    // Product title
    const title = document.createElement('h2')
    title.innerText = product.title
    title.classList = 'mt-3 font-medium text-center'
    // Product price
    const price = document.createElement('h3')
    price.innerText = `$${product.price}`
    price.classList = 'bg-slate-700 text-lg text-white px-2 font-medium absolute top-0'
    // View more button
    const btn = document.createElement('button')
    btn.innerText = 'View more'
    btn.classList = 'bg-sky-100 hover:bg-sky-500 transition-all text-sky-500 hover:text-white px-2 py-2 w-full text-center absolute bottom-0 cursor-pointer'
    
    btn.setAttribute('data-productid', product.id)
    btn.addEventListener('click', (event)=>{
        console.log(event.target.getAttribute('data-productid'))
        togglePopup()
        getOneProduct(event.target.getAttribute('data-productid'))
        
    })


    // Append info to product card
    productCard.appendChild(img)
    productCard.appendChild(title)
    productCard.appendChild(price)
    productCard.appendChild(btn)

    // Append product card to all products container
    allProductsElement.appendChild(productCard)

}

function togglePopup(){
    //clear productDescription
    productDescription.innerText = ''
    productPopupElement.classList.toggle('hidden')

}

/**
 * =================================
 * *        EVENT LISTENERS
 * =================================
 */

closePopupButton.addEventListener('click', ()=>{
    togglePopup()
})

function getCategories(){
    fetch('https://dummyjson.com/products/categories')
        .then(response => response.json())
        .then(categoriesList =>{
                
            categoriesList.forEach(element=>{
                createCategories(element)
                console.log(element)
            })
            
        })
}
function createCategories(list){
    const categories = document.createElement('li')
    categories.innerText = list 
    categories.classList = 'mt-3 font-medium active:text-sky-800 text-sky-500 hover:text-sky-800 list-none'
    listCategories.appendChild(categories)
}

function getOneProduct(productId){
    fetch(`${API_URL}/products/${productId}`)
        .then(response => response.json())
        .then(json => {
            putElementInPopup(json)
            console.log(json)


        })
}

function putElementInPopup(product){

    // name of element
    const nameElement = document.createElement('h2')
    nameElement.innerText = product.brand
    // img
    const imgElement = document.createElement('img')
    imgElement.setAttribute('src', product.thumbnail)
    // description
    const description = document.createElement('p')
    description.innerText = product.description
    // price
    const price = document.createElement('span')
    price.innerText = product.price
    

    //append
    productDescription.appendChild(imgElement)
    productDescription.appendChild(nameElement)
    productDescription.appendChild(description)
    productDescription.appendChild(price)

}