// "지금 영림에 문의하세요. 전문 컨설팅을 통해 당신의 라이프스타일에 딱 맞는 인테리어를 제안해 드립니다."
const contents = [
    {title : "Contact Us", comment : "지금 영림에 문의하세요. <br> 당신의 라이프스타일에 딱 맞는 인테리어를 제안해 드립니다."},
    {title : "리모델링 상담 신청하기", link : "Conceierge Service"},
    {title : "온라인 쇼룸 둘러보기", link : "Online Showroom"},
    {title : "실시간 채팅 상담하기", link : "Online Chatting"},
    {title : "인테리어 시작하기", 
    comment : "인테리어 어디서부터 시작해야 할지 막막하시죠? <br> 자재 선택부터 시공 방법까지 하나하나 알려드릴게요.",
    link : "인테리어 시작하기"},
    {title : "영림 정품 확인하기",
    comment : "품질에 대한 자부심을 담은 영림의 제품에는 정품 마크가 표기되어 있습니다. 영림의 철학과 가치를 나타내는 정품 마크를 확인해보세요.",
    link : "영림 브랜드 아이덴티티"}
]

const contact = document.createElement('section')
contact.className = 'contact'

const c_container = document.createElement('div')
c_container.className = 'container'

const c_gridBox = document.createElement('div')
c_gridBox.className = 'grid-box'


contents.forEach((content, i) => {

    const div = document.createElement('div')
    div.className = 'content'

    if(i!==0){
        
        const imgBox = document.createElement('div')
        imgBox.className = 'img-box'
        const img = document.createElement('img')
    
        if(i>3){
            div.classList.add('big')
            img.src = `./project/imgs/contact/main-img-banner-0${i-3}.jpg`
        }else{
            div.classList.add('small')
            img.src = `./project/imgs/contact/younglim_cs_illust-0${i}.png`
        }

        imgBox.append(img)
        div.append(imgBox)
    }
    

    const textBox = document.createElement('div')
    textBox.className = 'text-box'

    if(content.title){
        const h2 = document.createElement('h2')
        h2.className = 'title'
        h2.innerHTML = content.title

        textBox.append(h2)
    }

    if(content.comment){
        const p = document.createElement('p')
        p.className = 'comment'
        p.innerHTML = content.comment

        textBox.append(p)
    }

    if(content.link){
        const button = document.createElement('button')
        button.className = 'link'
        button.innerText = content.link

        textBox.append(button)
    }

    div.append(textBox)
    c_gridBox.append(div)
})

c_container.append(c_gridBox)
contact.append(c_container)
root.append(contact)