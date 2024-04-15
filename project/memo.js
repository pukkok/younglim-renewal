const selectItems = ['키친/붙박이장', '바스/타일', '도어', '중문', '창호', '몰딩/월/마루', '인테리어 필름']

const productSection = document.createElement('section')
productSection.className = 'first-section product'
const productBg = document.createElement('div')
productBg.className = 'product-bg'
const productContainer = document.createElement('div')
productContainer.className = 'container'

/** 셀렉트 박스 */
const productSelectBox = document.createElement('div')
productSelectBox.className = 'select-box'
const productSelectBtn = document.createElement('button')
productSelectBtn.className = 'product-select-btn'
productSelectBtn.innerText = selectItems[0]

const productSelectOption = document.createElement('ul')
productSelectOption.className = 'product-select-option'

/** 옵션 selectItems */
selectItems.forEach((item)=>{
    const productli = document.createElement('li')
    productli.innerText = item
    productSelectOption.append(productli)
})

const productBox = document.createElement('div')
productBox.className = 'product-box'

/** 서브네비게이션 생성 */
const productNav = document.createElement('nav')
productNav.className = 'product-nav'

const itemBox = document.createElement('div')
itemBox.className = 'item-box'

/** 필터 바 */
const filterBar = document.createElement('div')
filterBar.className = 'filter-bar'
const makeFilterBar = () => {
    const filterBtn = document.createElement('div')
    filterBtn.className = 'filter-btn'
    const filterH3 = document.createElement('h3')
    filterH3.innerText = '필터'
    const filterSelectBox = document.createElement('div')
    filterSelectBox.className = 'filter-select-box'

    const filterOptions = ['신제품순', '인기순', '제품명순']
    const filterOption = document.createElement('div')
    filterOption.className = 'filter-option'

    filterOptions.forEach(option => {
        const btn = document.createElement('button')
        btn.innerText = option
        filterOption.append(btn)
    })
    
    const filterIcons = document.createElement('div')
    filterIcons.className = 'filter-icons'
    const smallMode = makeBtn('', 'small-mode')
    const bigMode = makeBtn('', 'big-mode')
    
    filterIcons.append(smallMode, bigMode)
    
    filterSelectBox.append(filterOption, filterIcons)
    filterBtn.append(filterH3)

    filterBar.append(filterBtn, filterSelectBox)
}
makeFilterBar()


productSelectBox.append(productSelectBtn, productSelectOption)
productBox.append(productNav, itemBox)
productContainer.append(productSelectBox, filterBar, productBox)
productSection.append(productBg, productContainer)
root.append(productSection)

function makeBtn (text, cName){
    const div = document.createElement('div')
    const button = document.createElement('button')
    div.className = cName
    button.innerText = text
    div.append(button)
    return div
}

/** 프로덕트 네비게이션 만들기 data[key] / 어펜딩태그 */
function makeProductNav (data, cName, appendTag) {
    const dataBox = document.createElement('div')
    dataBox.className = 'data-box'
    if(cName) dataBox.classList.add(cName)

    data.main.forEach(mainData=> { /** 메인 리스트 만들기*/
        const mainList = makeBtn(mainData, 'main-list')

        if(mainData in data){
            data[mainData].forEach(plusData => {
                const plusList = makeBtn(plusData, 'plus-list')
                mainList.append(plusList)
            })
            mainList.classList.add('plus')
        }
        dataBox.append(mainList)
        
        if(data.list){ /** 서브 리스트 만들기 */
            data.list.forEach(listData => {
                const subList = makeBtn(listData, 'sub-list')
                
                if(listData in data){
                    data[listData].forEach(plusData => {
                        const plusList = makeBtn(plusData, 'plus-list')
                        subList.append(plusList)
                    })
                    subList.classList.add('plus')
                }
                dataBox.append(subList)
            })
        }
    
    })
    appendTag.append(dataBox)
}

/** 상품목록 생성하기 */
function makeImgBox(part1, part2, name='', concepts=[]){
    const productItem = document.createElement('div')
    productItem.className = "product-item"
    const imgBox = document.createElement('div')
    imgBox.className = 'img-box'
    const img = document.createElement('img')
    img.src = `./imgs/product/${part1}/${part2}.jpg`
    const textBox = document.createElement('div')
    textBox.className = 'text-box'
    const h4 = document.createElement('h4')
    h4.innerText = name
    textBox.append(h4)
    concepts.forEach(concept => {
        const span = document.createElement('span')
        span.innerText = concept
        textBox.append(span)
    })

    imgBox.append(img)
    productItem.append(imgBox, textBox)
    return productItem
}


let activePrevBtn
function clickEvent(e){

    /** 셀렉트 버튼 클릭 */
    if(e.target === productSelectBtn){
        if(productSelectBtn.classList.contains('on')){
            productSelectBtn.classList.remove('on')
            productSelectOption.style.display = 'none'
        }else{
            productSelectBtn.classList.add('on')
            productSelectOption.style.display = 'block'
        }
    }else{
        productSelectBtn.classList.remove('on')
        productSelectOption.style.display='none'
    }

    /** 셀렉트 옵션에 따라 프로덕트 네비게이션 변경 */
    const productSelectOptions = productSelectOption.querySelectorAll('li')
    productSelectOptions.forEach(option => {
        if(e.target === option){
            console.log(option.innerText)
            productSelectBtn.innerText = option.innerText
            loadProductNav(productSelectBtn.innerText)
        }
    })

    /** 플러스 버튼 클릭시 플러스리스트 열기/닫기 */
    const plusBtn = document.querySelectorAll('.plus > button')
    plusBtn.forEach(btn => {
        if(e.target === btn) {
            const plusList = btn.parentElement.querySelectorAll('.plus-list')
            if(btn.classList.contains('expand')) {
                btn.classList.remove('expand', 'active')
                plusList.forEach(li=>{
                    li.classList.remove('on')
                })
            }else{
                btn.classList.add('expand', 'active')
                plusList.forEach(li=>{
                    li.classList.add('on')
                })   
            }
        }
    })

    /**버튼 클릭시 프로덕트 이미지 전환 */
    const dataBoxes = document.querySelectorAll('.data-box')
    dataBoxes.forEach(box => {
        let navBtns = box.querySelectorAll('button')
        let key = [...box.classList][1]
        navBtns.forEach(btn => {
            if(e.target === btn){
                //플러스 버튼이 아니면 바로 이미지 로드
                if(!btn.parentElement.classList.contains('plus')) loadProductImg(key, btn.innerText)

                btn.classList.add('active')             
                if(activePrevBtn){
                    if(activePrevBtn !== btn) activePrevBtn.classList.remove('active')
                }
                activePrevBtn = btn

            }
        })
    })

}

window.addEventListener('click', clickEvent)

//프로덕트 네비게이션 불러오기
function loadProductNav (category){
    let keys
    (category === '몰딩/월/마루') ? keys = [category] : keys = category.split('/')

    keys.forEach(key => {
        let code = findCode(key)
        productNav.innerHTML=''
        loadJson("./category.json")
        .then(data => {
            makeProductNav(data[code], code, productNav)
        })
    })
}

//프로덕트 이미지 불러오기
function loadProductImg (part = 'kitchen', content = '키친 전체보기') {

    if(content.includes('전체보기')){
        itemBox.innerHTML = ''
        loadJson('./product.json')
        .then(data => data[part])
        .then(datas => {
            datas.forEach(data => {
                itemBox.append(makeImgBox(part, data.img, data.name, data.concepts)) 
            })
        })
    }else{
        let code = findCode(content)
        itemBox.innerHTML = ''
        loadJson('./product.json')
        .then(data => data[part])
        .then(datas => {
        datas.filter(data => {
            if(data.type === code){
                itemBox.append(makeImgBox(part, data.img, data.name, data.concepts)) 
            }})
        })
    }  
}

//처음 시작화면
function loadProduct() {

    productSelectBtn.innerText = qs.category // 셀렉트 버튼
    loadProductNav(qs.category) // 프로덕트 네비게이션
    loadProductImg(qs.part, qs.content) // 프로덕트 이미지
}
loadProduct()