const main = document.createElement('main')
const section1 = document.createElement('section')
section1.className='section1'

const section2 = document.createElement('section')
section2.className = 'section2'

main.append(section1, section2)
root.append(main)

const text = [
    {title : "하이엔드 라이프, 아펠", content : "현재의 우리 그리고 미래의 모두를 위한 공간과 문화를 만드는 브랜드, 오랜 시간 쌓아온 기술력과 깊이 있는 디자인으로 만들어낸 아펠 시리즈를 만나보세요."},
    {title : "영림 인테리어스", content: "영림 인테리어스 디자이너가 제안하는 스타일컬렉션부터 다양한 사람들의 리모델링 스토리까지, 나에게 영감을 불어넣어줄 다채로운 공간을 만나보세요"},
    {title : "영림창호", content : "뛰어난 단열과 기밀성으로 더 포근하고 아늑한 창 영림프라임창호 좋은 창호의 기준이 됩니다."},
    {title : '영림키친바스', content : "365일, 당신의 라이프스타일을 고민합니다. 나와 우리 가족의 이야기가 담긴 집, 영림키친바스와 함께 만들어보세요."},
    {title : "이벤트 참여하기", content : "무료 실측 상담만 받아도 선물을 드립니다. 쉽고 빠른 1:1 맞춤 인테리어 상담, 영림과 함께 시작해보세요."}
]


const makeSection1 = (obj, i) => {
    const container = document.createElement('div')
    container.className = 'container'
    const div1 = document.createElement('div')
    div1.className = 'bg'
    div1.style.backgroundImage = `linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) ), url(./imgs/bg_${i+1}_main.jpg)`
    const div2 = document.createElement('div')
    div2.className = 'text-box'
    const h1 = document.createElement('h1')
    h1.className = 'title'
    h1.innerText = obj.title
    const h4 = document.createElement('h4')
    h4.className = 'content'
    h4.innerText = obj.content
    div2.append(h1, h4)
    container.append(div1, div2)
    section1.append(container)
}

text.forEach((item, i)=> {
    makeSection1(item, i)
})

makeSection1(text[0], 0)

const slider = (index) => {
    section1.style.marginLeft = `${-100 * index}%`
    section1.style.transition = `1s`
    i++
    if(i>5){
        i=1
        section1.style.transition = `0s`
        section1.style.marginLeft = `${-100 * index}%`
    }
}

let i=0
setInterval(()=>{
    // slider(i)
    // console.log(i)
},3000)


