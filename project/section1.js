const section1Texts = [
    {title : '하이엔드라이프, 아펠', comment : '현재의 우리 그리고 미래의 모두를 위한 공간과 문화를 만드는 브랜드 <br> 오랜 시간 쌓아온 기술력과 깊이 있는 디자인으로 만들어낸 아펠 시리즈를 만나보세요.'},
    {title : '영림 인테리어스', comment : '영림 인테리어스 디자이너가 제안하는 스타일컬렉션부터 <br> 다양한 사람들의 리모델링 스토리까지 나에게 영감을 <br> 불어넣어줄 다채로운 공간을 만나보세요'},
    {title : '영림 창호', comment : '뛰어난 단열과 기밀성으로 더 포근하고 아늑한 창 <br> 영림프라임창호 좋은 창호의 기준이 됩니다.'},
    {title : '영림키친바스', comment : '365일, 당신의 라이프스타일을 고민합니다. <br> 나와 우리 가족의 이야기가 담긴 집, 영림키친바스와 함께 만들어보세요.'},
    {title : '이벤트 참여하기', comment : '무료 실측 상담만 받아도 선물을 드립니다. <br> 쉽고 빠른 1:1 맞춤 인테리어 상담, 영림과 함께 시작해보세요.'}
]

const section1 = document.createElement('section')
section1.className = 'first-section section1'
const s1Container = document.createElement('div')
s1Container.className = 'container'

const buttonContainer = document.createElement('div')
buttonContainer.className = 'button-container'

const s1Swiperdiv = document.createElement('div')
s1Swiperdiv.className = 'swiper1'
const s1SwiperWrapper = document.createElement('div')
s1SwiperWrapper.className = 'swiper-wrapper'

for(i=0; i<5; i++){
    const div = document.createElement('div')
    div.className = 'swiper-slide'
    const img = document.createElement('img')
    img.src = `./project/imgs/bg_${i+1}_main.jpg`
    const container = document.createElement('div')
    container.className='container'
    const textBox = document.createElement('div')
    textBox.className = 'text-box'
    const h1 = document.createElement('h1')
    h1.innerText = section1Texts[i].title
    const p = document.createElement('p')
    p.innerHTML = section1Texts[i].comment
    const button = document.createElement('button')
    button.innerText = 'MORE'
    textBox.append(h1, p, button)
    container.append(textBox)
    div.append(img, container)
    s1SwiperWrapper.append(div)
}

const s1PrevBtn = document.createElement('div')
s1PrevBtn.className = 'swiper-button-prev'
const s1div2 = document.createElement('div')
s1div2.className = 'swiper-pagination'
const s1NextBtn = document.createElement('div')
s1NextBtn.className = 'swiper-button-next'

const s1playBtn = document.createElement('div')
s1playBtn.className = 'swiper-button-play'

buttonContainer.append(s1PrevBtn, s1div2, s1playBtn, s1NextBtn)
s1Swiperdiv.append(s1SwiperWrapper, buttonContainer)
section1.append(s1Swiperdiv)
root.append(section1)

const s1Swiper = new Swiper('.swiper1', {

    loop: true,
    autoplay: {
        delay : 2000,
    },
    
    pagination: {
        el: '.swiper-pagination',
    },
  
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    
    paused: false
})
  
s1Swiper.on()

function pauseEvent (e){
    if(e.target === s1playBtn){
        if(s1playBtn.classList.contains("start")){
            s1Swiper.autoplay.start()
            s1playBtn.classList.remove('start')
        }else{
            s1Swiper.autoplay.stop()
            s1playBtn.classList.add('start')
        }
    }
}

s1playBtn.addEventListener('click', pauseEvent)