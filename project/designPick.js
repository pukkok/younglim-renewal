const designPick = document.createElement('section')
designPick.className = 'design-pick'
const designContainer = document.createElement('div')
designContainer.className = 'container'

const pickBox = document.createElement('div')

const dTextBox = document.createElement('div')
dTextBox.className = 'text-box'
const dH1 = document.createElement('h1')
dH1.innerText = '디자이너 Pick'
const dItemBox = document.createElement('div')
dItemBox.className = 'item-box'
const dCategories = ['키친/붙박이장', '바스/타일', '도어', '중문', '창호', '몰딩/월/마루']
dCategories.forEach(category => {
    const span = document.createElement('span')
    span.innerText = category
    dItemBox.append(span)
})

const dImgContainer = document.createElement('div')
dImgContainer.className = 'img-container'
const imgs = {
    BT : ['bath-tile01','bath-tile02','bath-tile03'],
    door : ['door01','door02','door03'],
    KB : ['kitchen-builtIn01','kitchen-builtIn02','kitchen-builtIn03'],
    molding : ['molding01','molding02','molding03'],
    partition : ['partition01','partition02','partition03'],
    window : ['window01', 'window02', 'window03']
}

for(let i=0; i<3; i++){
    const imgBox = document.createElement('div')
    imgBox.className = 'img-box'
    const img = document.createElement('img')
    img.src = `${origin}/imgs/designer-pick/${imgs.BT[i]}.jpg`
    imgBox.append(img)
    dImgContainer.append(imgBox)
}



dTextBox.append(dH1, dItemBox)
designContainer.append(dTextBox, dImgContainer)
designPick.append(designContainer)
root.append(designPick)