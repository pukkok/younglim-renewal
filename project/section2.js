const s2products = [
    {name : "키친", img : "main-1-img-kitchen.jpg"},
    {name : "바스", img : "main-1-img-bath.jpg"},
    {name : "도어", img : "main-1-img-door.jpg"},
    {name : "중문", img : "main-1-img-interlocking-door.jpg"},
    {name : "창호", img : "main-1-img-window.jpg"},
    {name : "몰딩/월/마루", img : "main-1-img-wall-finish.jpg"},
    {name : "인테리어 필름", img : "main-1-img-color.jpg"},
    {name : "붙박이장", img : "main-1-img-built-in.jpg"},
]

const s2text = [`다양한 라이프스타일 속에서 최적화된 당신의 주거 공간을 디자인합니다. 
<br> 가치 있는 당신의 일상을 위한 취향에 딱맞는 인테리어 디자인을 만나보세요.`,
 'Lifestyle design beyond material']

const s2text2 = [
  {title : `키친 알아보기`, comment : `단순한 요리 공간을 넘어 나를 위한 공간으로 <br> 시작하세요, 나만의 키친 라이프`},
  {title : `바스 알아보기`, comment : `가장 작은 공간에서 경험하는 가장 큰 행복 <br> 시작하세요, 나반의 바스 라이프`},
  {title : `도어 알아보기`, commnet : `나의 이야기, 가족의 이야기를 담아내는 <br> 사람과 공간의 연결고리, 문`},
  {title : `중문 알아보기`, comment : `프라이빗하게, 때로는 개방감 있게 <br> 가장 감각적인 공간 활용법, 중문`},
  {title : `창호 알아보기`, comment : `더 안전하게, 더 자연과 가깝게 <br> 영림창호, 좋은 창호의 기준이 됩니다.`},
  {title : `몰딩/월/마루 알아보기`, comment : `특별한 공간을 위한 가장 좋은 선택 <br> 분위기를 주도하는 벽바닥재`},
  {title : `인테리어 필름`, comment : `color Sheet & Film`},
  {title : `키친/붙박이장`, comment : `Kitchen/Wardrobe`}
]

const section2 = document.createElement('section')
section2.className = 'section2'
const s2Container = document.createElement('div')
s2Container.className = 'container'

const s2textBox = document.createElement('div')
s2textBox.className = 'text-box'
const s2h2 = document.createElement('h2')
s2h2.innerHTML = s2text[0]
const s2h3 = document.createElement('h3')
s2h3.innerHTML = s2text[1]

s2textBox.append(s2h2, s2h3)
s2Container.append(s2textBox)
const s2div = document.createElement('div')
s2div.className = 'product-box'

s2products.forEach((product) => {
  const div = document.createElement('div')
  div.className = `product`
  const imgBox = document.createElement('div')
  imgBox.className = 'img-box'
  const img = document.createElement('img')
  img.src = `./imgs/section2/${product.img}`
  imgBox.append(img)
  const h2 = document.createElement('h2')
  h2.innerText = product.name
  div.append(imgBox, h2)
  s2div.append(div)
})


s2Container.append(s2div)
section2.append(s2Container)
root.append(section2)
