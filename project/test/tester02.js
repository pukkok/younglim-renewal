const root = document.getElementById('root')

const section2 = document.createElement('section')
section2.className = 'section2'

const container = document.createElement('div')
container.className = 'container'

const div1 = document.createElement('div')
div1.className = 'text-box'
const h1 = document.createElement('h1')
h1.innerText = `
다양한 라이프스타일 속에서 최적화된 당신의 주거 공간을 디자인 합니다.
가치 있는 당신의 일상을 위한 취향에 딱 맞는 인테리어 디자인을 만나보세요.
`
const h3 = document.createElement('h3')
h3.innerText = `
Lifestyle design beyond material`
const div2 = document.createElement('div')
div2.className = 'card-container'

div1.append(h1, h3)
container.append(div1, div2)

section2.append(container)
root.append(section2)

const makeCards = (arr) => {
    const div = document.createElement('div')
    div.className = 'card'
    const img = document.createElement('img')
    img.src = `../imgs/section2/${arr.img}.jpg`
    const cover = document.createElement('div')
    cover.className = 'cover'
    const h4 = document.createElement('h4')
    h4.innerText = arr.h4
    div.append(img, cover, h4)
    div2.append(div)
}

const imgbox= [
    {img : "main-1-img-kitchen", h4 : "키친" },
    {img : "main-1-img-bath", h4 : "바스"},
    {img : "main-1-img-door", h4 : "도어"},
    {img : "main-1-img-interlocking-door", h4 : "중문"},
    {img : "main-1-img-window", h4 : "창호"},
    {img : "main-1-img-wall-finish", h4 : "몰딩/월/마루"},
    {img : "main-1-img-color", h4 : "인테리어 필름"},
    {img : "main-1-img-built-in", h4 : "붙박이장"},
]

imgbox.forEach(data => {
    makeCards(data)
})

const cards = document.querySelectorAll('.card')
const cardCovers = document.querySelectorAll('.card-container .cover')
const cardContainer = document.querySelector('.card-container')
cards[0].classList.add('on')

const addOn = (e) => {
    cardCovers.forEach((card, i)=>{
        if(e.target === card){
            cards[i].classList.add('on')
        }else{
            cards[i].classList.remove('on')
        }
    })
}

cardContainer.addEventListener('click', addOn)