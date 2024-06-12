/**매거진 파트 */

const magazines = [
    {img : `./project/imgs/magazine/magazine01.jpg`, main : "TV CF 속 그공간, 그 제품", sub : "2021 영림의 다양한 신제품들을 담은 현장 속 인테리어 살펴보기"},
    {img : `./project/imgs/magazine/magazine02.jpg`, main : "새로운 꿈을 꾸며 내일을 설계하는 집", sub : "눈이 펑펑 오던 어느 겨울, 고요하게 눈이 쌓인 전원주택 마을을 방문했다"},
    {img : `./project/imgs/magazine/magazine03.jpg`, main : "2021 영림 TV CF 광고 촬영 비하인드", sub : "토탈인테리어 브랜드 '영림'의 첫 TV CF 촬영 비하인드 스토리, 지금 공개합니다."},
]

const magazine = document.createElement('section')
magazine.className = 'magazine'
const m_Container = document.createElement('div')
m_Container.className = 'container'

const m_header = document.createElement('div')
m_header.className = 'm-header'
const m_h1 = document.createElement('h1')
m_h1.innerText = '매거진.Y'
const m_button = document.createElement('button')
const m_h5 = document.createElement('h5')
m_h5.innerText = 'MORE'
m_button.append(m_h5)
const m_Div2 = document.createElement('div')
m_Div2.className = 'card-container'

magazines.forEach(item => {
    const card = document.createElement('div')
    card.className = 'card'

    const imgBox = document.createElement('div')
    imgBox.className = 'img-box'
    const img = document.createElement('img')
    img.src = item.img

    imgBox.append(img)

    const textBox = document.createElement('div')
    textBox.className = 'text-box'
    const p = document.createElement('p')
    p.innerText =item.main
    const h5 = document.createElement('h5')
    h5.innerText =item.sub

    textBox.append(p, h5)
    card.append(imgBox, textBox)
    m_Div2.append(card)
})

m_header.append(m_h1, m_button)
m_Container.append(m_header, m_Div2)
magazine.append(m_Container)
root.append(magazine)