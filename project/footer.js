
const menus = [
    {menu : ['브랜드', '제품', '인테리어 솔루션', '매거진.Y', '쇼룸 안내']},
    {menu : ['대리점 개설문의', '고객센터', 'A/S 접수', '이용약관', '개인정보 처리방침', '회사소개']},
    {menu : ['Blog', 'Instagram', 'YouTube', '영림몰', 'e카탈로그', '인테리어필름']}
]

const corporates = [
    {name : "영림임업(주)", address : "인천광역시 남동구 호구포로 9", owner : "황복현", businessNumber : "137-81-02411", tel : "1577-5600", fax : "032-813-5505"},
    {name : "영림화학(주)", address : "인천광역시 서구 북항로 31번길 13", owner : "황복현", businessNumber : "137-81-40827", tel : "1577-5600", fax : "032-578-4455"},
    {name : "영림산업(주)", address : "인천광역시 남동구 앵고개로 584", owner : "황복현", businessNumber : "137-86-10859", tel : "1577-5600", fax : "032-812-5501"},
]

const footer = document.createElement('footer')
const footerBody = document.createElement('div')
footerBody.className = 'footer-body'
const footerContainer = document.createElement('div')
footerContainer.className = 'container'
const footerMain = document.createElement('div')
footerMain.className = 'footer-main'
const footerH3 = document.createElement('h3')
footerH3.innerText = '영림 토탈 인테리어'
const footerDiv1 = document.createElement('div')
footerDiv1.className = 'footer-menu'

/** 배열 값, tagName, tagClassname ex) innerText로 입력 ul > li > a 생성 */
function makeList (arr, xTag, classname='') {
    const ul = document.createElement('ul')
    arr.forEach((item)=>{
        const li = document.createElement('li')
        const tag = document.createElement(xTag)
        tag.className= classname
        tag.innerText = item
        li.append(tag)
        ul.append(li)
    })
    return ul
}

menus.forEach(list => {
    let result = makeList(list.menu, "a")
    footerDiv1.append(result)
})

const footerHr = document.createElement('hr')

const footerMiddle = document.createElement('div')
footerMiddle.className = 'footer-corporate footer-middle'

corporates.forEach((data)=>{
    const corporateBox = document.createElement('div')
    corporateBox.className = 'corporate-box'
    const h4Name = document.createElement('h4')
    h4Name.innerText = data.name
    const h5Address = document.createElement('h5')
    h5Address.innerText = data.address
    const corporateInfo1 = document.createElement('div')
    corporateInfo1.className = 'corporate-info'
    const h5Owner = document.createElement('h5')
    h5Owner.innerText = `대표. ${data.owner}`
    const h5BusinessNumber = document.createElement('h5')
    h5BusinessNumber.innerText = `사업자 등록번호. ${data.businessNumber}`
    
    const corporateInfo2 = document.createElement('div')
    corporateInfo2.className = 'corporate-info'
    const h5Tel = document.createElement('h5')
    h5Tel.innerText = `Tel. ${data.tel}`
    const h5Fax = document.createElement('h5')
    h5Fax.innerText = `Fax. ${data.fax}`

    corporateInfo1.append(h5Owner, h5BusinessNumber)
    corporateInfo2.append(h5Tel, h5Fax)
    corporateBox.append(h4Name, h5Address, corporateInfo1, corporateInfo2)
    footerMiddle.append(corporateBox)
})

/**footer bottom */
const footerBottom = document.createElement('div')
footerBottom.className = 'footer-bottom'
const footerBottomContainer = document.createElement('div')
footerBottomContainer.className = 'container'
const bottomInner = document.createElement('div')
bottomInner.className = 'bottom-inner'
const copyrightBox = document.createElement('div')
copyrightBox.innerHTML =`<span>&copy</span>YOUNGLIM`
const csBOX = document.createElement('div')
csBOX.innerHTML=`고객센터 <span>1577 - 5600</span>`

bottomInner.append(copyrightBox, csBOX)
footerBottomContainer.append(bottomInner)
footerBottom.append(footerBottomContainer)

footerMain.append(footerH3, footerDiv1)
footerContainer.append(footerMain ,footerHr, footerMiddle)
footerBody.append(footerContainer)
footer.append(footerBody, footerBottom)
root.append(footer)