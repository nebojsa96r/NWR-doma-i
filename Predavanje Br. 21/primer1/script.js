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
    productCard.setAttribute('data-productid', product.id)
    productCard.addEventListener('click', (event)=>{
        console.log(event.target.getAttribute('data-productid'))
        togglePopup()
    })
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

    // Append info to product card
    productCard.appendChild(img)
    productCard.appendChild(title)
    productCard.appendChild(price)

    // Append product card to all products container
    allProductsElement.appendChild(productCard)

}

function togglePopup(){
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

getCategories()