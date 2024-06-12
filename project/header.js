const navItem = {
  depth1 : ['브랜드', '제품', '인테리어 솔루션', '매거진.Y', '쇼룸 안내'],
  depth2 : {
    "브랜드" : ['Made in Younglim', 'Life with Younglim', 'Identity of Younglim'],
    "제품" : ['키친/붙박이장', '바스/타일', '도어', '중문', '창호', '몰딩/월/마루', '인테리어 필름'],
    "인테리어 솔루션" : ['인테리어 시작하기', '인테리어 스타일 제안', '리모델링 사례']
  },
}

const root = document.getElementById('root')

const header = document.createElement('header')
const nav = document.createElement('nav')
const main = document.createElement('main')

header.append(nav)
root.append(main, header)

function makeDepth1 () {
    const depth1Box = document.createElement('div')
    depth1Box.className = 'depth1-box container'

    /** 로고부분 */
    const logoBox = document.createElement('div')
    logoBox.className = 'logo-box'
    const a = document.createElement('a')
    a.href = './index.html'
    a.target = '_self'
    const logo = document.createElement('div')
    logo.className = 'logo'
    a.append(logo)
    logoBox.append(a)

    const depth1 = document.createElement('div') 
    depth1.className = 'depth1'
    const depth1Ul = document.createElement('ul')
    navItem.depth1.forEach(item => {
    const li = document.createElement('li')
    li.innerText = item
    depth1Ul.append(li)
    })
    depth1.append(depth1Ul)

    const userIcons = ['search', 'like', 'login', 'menu']
    const userBox = document.createElement('div')
    userBox.className = 'user-box'
    const userUl = document.createElement('ul')
    userIcons.forEach(icon => {
        const li = document.createElement('li')
        const div = document.createElement('div')
        div.className = icon
        li.append(div)
        userUl.append(li)
    })
    userBox.append(userUl)

  depth1Box.append(logoBox, depth1, userBox)
  nav.append(depth1Box)
}

makeDepth1()

const depth2Box = document.createElement('div')
depth2Box.className = 'depth2-box'

function appendList (cName, item ,appendTag){
    const li = document.createElement('li')
    li.className = cName
    li.innerText = item
    appendTag.append(li)
}

/**depth1 이름 */
function makeDepth2 (depth1) {
  
    const container = document.createElement('div')
    container.className = 'container'
    
    const depth2 = document.createElement('div')
    depth2.className = 'depth2'

    const depth1Name = document.createElement('div')
    depth1Name.className = 'name'
    const h5 = document.createElement('h5')
    h5.innerText = depth1
    depth1Name.append(h5)

    const depth2Ul = document.createElement('ul')
    navItem.depth2[depth1].forEach(item => {
        const li = document.createElement('li')
        li.innerText = item
        if(depth1 === '제품') li.classList.add('product-item')
        depth2Ul.append(li)
    })

    depth2.append(depth1Name, depth2Ul)
    container.append(depth2)
    depth2Box.append(container)
    nav.append(depth2Box)
}

const depth3 = document.createElement('div')
depth3.className = 'depth3'

async function makeDepth3 (code) {
    const ul = document.createElement('ul')
    ul.className = code
    await loadJson(`./project/category.json`)
    .then(data => data[code])
    .then(data => {
        if(data.inform) appendList('main', data.inform, ul)
        if(data.main){
        data.main.forEach(item => {
            appendList('main', item, ul)
        })
        }
        if(data.list){
        data.list.forEach(item => {
          appendList('list', item, ul)
        })
        }
        depth3.append(ul)
    })
}

let depth1Prev // depth1의 이전 선택값
let depth2Prev // depth2의 이전 선택값

const depth1List = document.querySelectorAll('.depth1 li')
function overEvent (e) {
  /** 뎁스 1 선택 */
  depth1List.forEach((list, i) => {
    if(e.target === list){
      list.classList.add('on')
      if(depth1Prev){
        if(depth1Prev !== list) depth1Prev.classList.remove('on')
      }
      depth1Prev = list
      if(i<3){
        depth2Box.innerHTML= ''
        makeDepth2(list.innerText)
        nav.style.height=`${depth2Box.offsetHeight}px`
      }else{
        nav.style.height='70px'
            depth2Box.innerHTML= ''
      }
    }
  })
  
  /** 뎁스2 선택 */
  const productList = document.querySelectorAll('.depth2 .product-item')
  const depth2Container = document.querySelector('.depth2-box .container')
  productList.forEach(async list => {
    if(e.target === list){
        list.classList.add('on')
        if(depth2Prev){
        if(depth2Prev !== list) depth2Prev.classList.remove('on')
        }
        depth2Prev = list

        if(list.innerText === '몰딩/월/마루'){
        let code = findCode('몰딩/월/마루')
        depth3.innerHTML = ''
        await makeDepth3(code)
        depth2Container.append(depth3)
        nav.style.height = `${100 + depth3.offsetHeight}px`
        }else{
        let keys = list.innerText.split('/')
        depth3.innerHTML = ''
        keys.forEach(async key => {
        let code = findCode(key)
        await makeDepth3(code)
        depth2Container.append(depth3)
        nav.style.height = `${100 + depth3.offsetHeight}px`
        })
        }
    }
    }
  )
}
window.addEventListener('mouseover', overEvent)

function leaveEvent() {
    this.style.height = '70px'
    depth1List.forEach(li=>{
    li.classList.remove('on')
    })
}
nav.addEventListener('mouseleave', leaveEvent)

/** 헤더 스크롤 이벤트 */
let prevScrollTop = 0;
const openHeader = () => {
  let nextScrollTop = window.scrollY;
  if(window.scrollY < 1){
      header.style.top = 0
      nav.classList.remove('white-mode')

  }else if(prevScrollTop < nextScrollTop) {
      header.style.top = '-70px'
  }
  else if(prevScrollTop > nextScrollTop){
      header.style.top = 0
      nav.classList.add('white-mode')
  }
	prevScrollTop = nextScrollTop;
}

window.addEventListener('scroll' , openHeader)

/** depth3 클릭 */
function clickDepth3(e){
  let depth2Key = document.querySelector('.depth2 .product-item.on')
  let depth3Btn = document.querySelectorAll('.depth3 ul li')

  depth3Btn.forEach(btn => {
    if(e.target === btn){
      let category = depth2Key.innerText
      let part = btn.parentElement.className
      let content = btn.innerText

      window.location.href = `${absoluteLocation}/product.html?category=${category}&part=${part}&content=${content}`
    }
    console.log(absoluteLocation)
  })

}

window.addEventListener('click', clickDepth3)
sizeEvent()


function tabletVersion(e){
  let menuBtn = document.querySelector('.tablet .menu')
  const depth1 = document.querySelector('.tablet .depth1')

  if(e.target===menuBtn){
    if(menuBtn.classList.contains('close')){
      depth1.style.left = '-25%'
      depth2Box.remove()
      menuBtn.classList.remove('close')
      nav.classList.remove('white-mode')
    }else{
      menuBtn.classList.add('close')
      nav.classList.add('white-mode')
      depth1.style.left = 0
    }
  }

  depth1List.forEach((list, i) => {
    if(e.target === list){
      if(i<3){
        depth2Box.style.left=0
        depth2Box.innerHTML= ''
        makeDepth2(list.innerText)
        setTimeout(() => {
          depth2Box.style.left='25%'
        }, 50);
      }else{
        depth2Box.innerHTML= ''
        depth2Box.style.left=0
      }
    }
  })

  const productList = document.querySelectorAll('.depth2 .product-item')
  const depth2Container = document.querySelector('.depth2-box .container')
  productList.forEach(async list => {
    if(e.target === list){
        list.classList.add('on')
        if(depth2Prev){
        if(depth2Prev !== list) depth2Prev.classList.remove('on')
        }
        depth2Prev = list

        if(list.innerText === '몰딩/월/마루'){
        let code = findCode('몰딩/월/마루')
        depth3.innerHTML = ''
        await makeDepth3(code)
        depth2Container.append(depth3)
        depth3.style.left=0
        setTimeout(() => {
          depth3.style.left='100%'
        }, 50);
        }else{
        let keys = list.innerText.split('/')
        depth3.innerHTML = ''
        keys.forEach(async key => {
        let code = findCode(key)
        await makeDepth3(code)
        depth2Container.append(depth3)

        depth3.style.left=0
        setTimeout(() => {
          depth3.style.left='100%'
        }, 50);

        })
        }
    }
    }
  )


}


function 사이즈변경 () {
  if(window.innerWidth<1024){
    window.removeEventListener('mouseover', overEvent)
    nav.removeEventListener('mouseleave', leaveEvent)
    window.addEventListener('click', tabletVersion)
  }else{
    window.addEventListener('mouseover', overEvent)
    nav.addEventListener('mouseleave', leaveEvent)
    window.removeEventListener('click', tabletVersion)
    depth2Box.remove()
    depth2Box.style.left=0
  }
}

window.addEventListener('load', 사이즈변경)
window.addEventListener('resize', 사이즈변경)
window.addEventListener('click', tabletVersion)