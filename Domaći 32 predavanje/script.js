const item = document.createElement('div')
document.body.appendChild(item)
item.classList = 'flex flex-col items-center '
document.body.classList = 'absolute bg-stone-900 -translate-x-[50%] -translate-y-[50%] left-[50%] top-[500px]'

function createItem(array){
    for (var i = 0, length = array.length; i < length; i++) {
        // Div with word and cyrcle
        const wordNCyrcle = document.createElement('div')
        item.appendChild(wordNCyrcle)
        wordNCyrcle.classList = 'relative'
        // Circle
        const circle = document.createElement('div')
        circle.classList = 'w-[20px] h-[20px] bg-stone-900 rounded-full border  border-'
        circle.style.borderColor = array[i].color
        // Line
        if(i < array.length - 1){
            const line = document.createElement('div')
            line.classList = 'h-[50px] w-[2px] mt-2 mb-2 bg-stone-500'
            item.appendChild(line)
        }
        // Word
        const word = document.createElement('span')
        word.innerText = array[i].title
        if (i % 2 === 0) {
            
            word.classList = 'text-white absolute top-[10px] -translate-y-[50%] left-[55px] -translate-x-[50%]'
        }else{
            word.classList = 'text-white  absolute top-[10px] -translate-y-[50%] left-[-35px] -translate-x-[50%]'  
        }
        
        wordNCyrcle.appendChild(word)
        wordNCyrcle.appendChild(circle)
}}

createItem([{
    title: 'Eat',
    color: '#FFFFFF'
},
{
    title: 'Code',
    color: '#037ffc'
},
{
    title: 'Sleep',
    color: '#9d03fc'
},
{
    title: 'Repeat',
    color: '#fcca03'
}]
)