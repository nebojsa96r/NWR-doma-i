
document.body.classList = 'flex justify-center items-center bg-cyan-900'

function createFaq(options){
    
    const mainSection = document.getElementById(options.holder)
    mainSection.classList = 'w-[800px] h-[480px] bg-stone-100 pt-3 pb-2 mt-10 border border-2 border-cyan-500 '

    options.questions.forEach(quest  => {
        let state = quest.open
        const divQA = document.createElement('div')
        divQA.classList = 'mb-3'
        mainSection.appendChild(divQA)

        const questionSection = document.createElement('div')
        questionSection.classList = 'w-[700px] h-[70px] shadow-lg bg-white m-auto flex justify-between items-center'
        divQA.appendChild(questionSection)

        const answerSection = document.createElement('div')
        answerSection.classList = 'w-[700px] h-[70px] shadow-lg bg-white m-auto  mb-3 p-3 text-lg text-stone-700'
        divQA.appendChild(answerSection)

        const question = document.createElement('h1')
        questionSection.appendChild(question)
        question.innerText = quest.question

        const nav = document.createElement('div')
        questionSection.appendChild(nav)
        
        if(state === true){
            nav.classList = 'w-[30px] h-[30px] bg-white border border-2 border-cyan-500 rounded-full mr-3 flex items-center justify-center'
            nav.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0891b2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 15l-6-6-6 6"/></svg>'
            state = false
            question.classList = 'font-bold text-xl ml-3 text-cyan-600'    
        }else{
            answerSection.classList.toggle('hidden')
            nav.classList = 'w-[30px] h-[30px] bg-white border border-2 border-stone-400 rounded-full mr-3 flex items-center justify-center'
            nav.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" widttrueh="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6A6666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>'
            question.classList = 'font-bold text-xl ml-3 text-slate-700'
            state = true 
        }

        nav.addEventListener('click',()=>{
            if(state === true){
                answerSection.classList.toggle('hidden')
                nav.classList = 'w-[30px] h-[30px] bg-white border border-2 border-cyan-500 rounded-full mr-3 flex items-center justify-center'
                nav.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0891b2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 15l-6-6-6 6"/></svg>'
                question.classList = 'font-bold text-xl ml-3 text-cyan-600'
                state = false  
            }else{
                answerSection.classList.toggle('hidden')
                nav.classList = 'w-[30px] h-[30px] bg-white border border-2 border-stone-400 rounded-full mr-3 flex items-center justify-center'
                nav.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" widttrueh="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6A6666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>'
                question.classList = 'font-bold text-xl ml-3 text-slate-700'
                state = true
            }
        })
        const answer = document.createElement('span')
        answer.innerText = quest.answer
        answerSection.appendChild(answer)
    });
}







createFaq({
    holder: 'faq-selection',
    questions: [
        {
            question: 'How dose it work?',
            answer: 'Lorem ispum dolor sit amet consectetur adipiscing elit.',
            open: true
        },
        {
            question: 'Where are others pricing options?',
            answer: 'Lorem ispum dolor sit amet consectetur adipiscing elit.',
            open: false
        },
        {
            question: 'What are other pricing options?',
            answer: 'Lorem ispum dolor sit amet consectetur adipiscing elit.',
            open: false
        }
    ]
})


    
