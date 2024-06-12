const types = [
    {style : "Modern", 
    comment : "원룸부터 고급주택까지 다양한 형태의 주거공간에 모두 잘 어울리는 모던 스타일을 만나보세요. 꼭 필요한 물건들만 채워 공간에 여백을 주고 간결한 선과 면으로 다듬어진 깔끔한 인테리어를 선보입니다."},
    {style : "Natural", 
    comment : "진정한 아름다움은 자연스러움에서 시작됩니다. 자연에서 얻은 소재와 색감은 공간에 담담하면서도 활발한 에너지를 더해주며 오래도록 질리지 않는 편안하고 안락한 공간을 완성해줍니다."},
    {style : "Classic", 
    comment : "과하지 않은 화려함으로 절제된 아름다움을 보여주는 클래식 스타일은 적절하게 가미된 정식적 요소와 우아한 곡선 포인트로 공간에 격식과 품격을 더해줍니다."},
    {style : "Unique", 
    comment : "나만의 개성과 취향을 듬뿍 담아 집안 구석구석 생동감 넘치는 아이템들로 완성한 유니크 스타일은 지루하고 나른한 일상에 새로움을 선사합니다. 톡톡 튀는 컬러와 다양한 소재의 믹스매치로 완성된 독창적인 공간을 만나보세요."},
]

const section3 = document.createElement('section')
section3.className = 'section3'
const s3Container = document.createElement('div')
s3Container.className = 'container'
const tabBox = document.createElement('div')
tabBox.className = 'tab-box'
types.forEach(type=>{
    const h3 = document.createElement('h3')
    h3.innerText = type.style
    tabBox.append(h3)
})

const imgBox = document.createElement('div')
imgBox.className = 'img-box modern'

const specialBox = document.createElement('div')
specialBox.className='special'
const h1 = document.createElement('h1')
h1.innerText = 'Modern'

const box1 = document.createElement('div')
box1.className = 'content-box box1'
const img1 = document.createElement('img')
img1.src=`./project/imgs/section3/main-2-img-modern-3.jpg`
const textBox = document.createElement('div')
textBox.className = 'text-box'
const s3H2 = document.createElement('h2')
s3H2.innerText = types[0].style
const s3H4 = document.createElement('h4')
s3H4.innerText = types[0].comment

textBox.append(s3H2, s3H4)
box1.append(img1, textBox)

const box2 = document.createElement('div')
box2.className = 'content-box box2'
const img2 = document.createElement('img')
img2.src=`./project/imgs/section3/main-2-img-modern-2.jpg`
box2.append(img2)

const box3 = document.createElement('div')
box3.className = 'content-box box3'
const img3 = document.createElement('img')
img3.src=`./project/imgs/section3/main-2-img-modern-1.jpg`
box3.append(img3)

specialBox.append(h1)
imgBox.append(specialBox, box1, box2, box3)

s3Container.append(tabBox, imgBox)
section3.append(s3Container)
root.append(section3)


const tabBtns = document.querySelectorAll('.tab-box h3')
tabBtns[0].className='on'

const changeType = (e) => {
    types.forEach((type, i)=>{
        if(e.target.tagName === 'H3'){
            tabBtns[i].classList.remove('on')
            if(e.target.innerText === type.style){
                tabBtns[i].classList.add('on')
                const classToChange = e.target.innerText.toLowerCase()
                imgBox.classList.remove(...imgBox.classList)
                imgBox.classList.add("img-box", "effect", classToChange)
                h1.innerText = s3H2.innerText = type.style
                s3H4.innerText = type.comment

                setTimeout(() => {
                    img1.src=`./project/imgs/section3/main-2-img-${type.style}-3.jpg`
                    img2.src=`./project/imgs/section3/main-2-img-${type.style}-2.jpg`
                    img3.src=`./project/imgs/section3/main-2-img-${type.style}-1.jpg`
                }, 300)
                setTimeout(() => {
                    imgBox.classList.remove('effect')
                }, 1300)                    
            }
        }
    })
}

tabBox.addEventListener('click', changeType)

const s3Bottom = document.createElement('div')
s3Bottom.className = 'bottom'
const makeS3Bottom = () => {
    const container = document.createElement('div')
    container.className = 'container'

    const textBox = document.createElement('div')
    textBox.className = 'text-box'
    const h1 = document.createElement('h1')
    h1.innerHTML = `Made in Younglim`
    const p = document.createElement('p')
    p.innerText = `영림은 원자재 입고부터 생산, 조립, 서비스까지 한번에 진행하는
    원스톱 생산공정 시스템을 통해 품질을 철저히 관리하고 있습니다. `
    const button = document.createElement('button')
    const h5 = document.createElement('h5')
    h5.innerText = '더 보러가기'
    button.append(h5)

    textBox.append(h1, p, button)

    const videoBox = document.createElement('div')
    videoBox.className = 'video-box'
    const videoContainer = document.createElement('div')
    videoContainer.className = 'video-container'
    const video = document.createElement('iframe')
    const thumbNail = document.createElement('div')
    thumbNail.className = 'thumb-nail'
    const playButton = document.createElement('button')
    
    thumbNail.append(playButton)
    videoContainer.append(video, thumbNail)
    videoBox.append(videoContainer)

    container.append(textBox, videoBox)
    s3Bottom.append(container)
}
makeS3Bottom()

section3.append(s3Bottom)

const thumbNail = document.querySelector('.thumb-nail')
thumbNail.addEventListener('click', ()=>{
    thumbNail.style.display = 'none'
    const iframe = document.querySelector('.video-box iframe')
    iframe.src = `https://www.youtube.com/embed/L3GplJfWC-s?rel=0&enablejsapi=1&origin=https%3A%2F%2Fyl.co.kr&widgetid=1&autoplay=1&mute=1`
})