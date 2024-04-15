/** 인테리어 시작하기 , 정품 확인하기 */

const section5 = document.createElement('section')
section5.className = 'section5'
const s5container = document.createElement('div')
s5container.className = 'container'
const s5CardContainer = document.createElement('div')
s5CardContainer.className = 'card-container'

const s5div1 = document.createElement('div')
s5div1.className = 'img-box'
const s5img1 = document.createElement('img')
s5img1.src='./imgs/section5/main-img-banner-01.jpg'

const s5div2 = document.createElement('div')
s5div2.className = 'text-box'
const s5h1E1 = document.createElement('h1')
s5h1E1.innerText = '인테리어 시작하기'
const s5pE1 = document.createElement('p')
s5pE1.innerText = `인테리어 어디서부터 시작해야 할지 막막하시죠?
자재 선택부터 시공 방법까지 하나하나 알려드릴게요.
`
const s5buttonE1 = document.createElement('button')
s5buttonE1.innerText = '인테리어 시작하기'

const s5div3 = document.createElement('div')
s5div3.className = 'text-box'
const s5h1E2 = document.createElement('h1')
s5h1E2.innerText = '영림 정품 확인하기'
const s5pE2 = document.createElement('p')
s5pE2.innerText = `품질에 대한 자부심을 담은
영림의 제품에는 정품 마크가 표기되어 있습니다.
영림의 철학과 가치를 나타내는 정품 마크를 확인해보세요.`
const s5buttonE2 = document.createElement('button')
s5buttonE2.innerText = '영림 브랜드 아이덴티티'

const s5div4 = document.createElement('div')
s5div4.className = 'img-box'
const s5img2 = document.createElement('img')
s5img2.src = './imgs/section5/main-img-banner-02.jpg'

s5div1.append(s5img1)
s5div2.append(s5h1E1, s5pE1, s5buttonE1)
s5div3.append(s5h1E2, s5pE2, s5buttonE2)
s5div4.append(s5img2)
s5CardContainer.append(s5div1, s5div2, s5div3, s5div4)
s5container.append(s5CardContainer)
section5.append(s5container)
root.append(section5)