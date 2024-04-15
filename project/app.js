function findCode (word) {
    switch(word){
        case "키친" : return "kitchen"
        case "붙박이장" : return "builtIn"
        case "바스" : return "bath"
        case "타일" : return "tile"
        case "도어" : return "door"
        case "중문" : return "partition"
        case "창호" : return "window"
        case "몰딩/월/마루" : return "molding"
        case "인테리어 필름" : return "interiorFilm"

        case '타임리스 키친' :
        case '타임리스 바스' : return 'timeless'

        case '에센셜 키친' :
        case '에센셜 바스' : return 'essential'

        case '키친 구성기기' :
        case '바스 구성기기' : return 'component'
        
        case '기타하드웨어' :
        case '키친 상판/하드웨어' : return 'hardware'

        case '여닫이 붙박이장' : return 'hinged'
        case '슬라이딩 붙박이장' : return 'sliding'
        case '드레스룸' : return 'dressroom'
        case '현관장' : return 'frontdoor'
        case '모듈수납장' : return 'moduleCabinet'

        case '포세린' : return 'poserine'
        case '세라믹' : return 'ceramic'

        case '아펠도어' : return 'appel'
        case 'ABS도어' : return 'abs'
        case '멤브레인 도어' : return 'membrane'
        case '타공도어' : return 'perforated'
        case '키즈도어' : return 'kids'
        case '기능성도어' : 'functional'
        case '핸들' : return 'handle'
        case '경첩' : return 'hinge'
        case '부자재' : return 'subsidiary'

        case '도어 시스템' : 
        case '중문 시스템' : 
        case '시스템창' : return 'system'

        case '도어 프레임' :
        case '중문 프레임' : return 'frame'

        case '3연동 중문' : return 'threefold'
        case '양개 중문' : return 'double'
        case '슬림 알루미늄 중문' : 'aluminum'

        case '기타 중문' : return 'extra'
        case '폴딩도어' : return 'folding'
        case '파티션' : return 'partition'
        case '유리옵션' : return 'glass'

        case '발코니창' : return 'balcony'
        case '베이직창' : return 'basic'
        
        case '입면분할창' : return 'division'
        case '프로젝트창' : return 'project'
        case '학교창' : return 'school'
        case '크리센트' : return 'lock'

        case '래핑몰딩' : return 'wrapping'
        case 'PVC몰딩&렉스판' : return 'PVC'
        case '클래식 도장몰딩' : return 'classic'
        case '데코몰딩' : return 'deco'
        case '스타일월' : return 'styleWall'
        case '월판넬' : return 'wallPanel'
        case '아트월' : return 'artWall'
        case '벽선반' : return 'wallShelf'
        case '원목마루' : return 'woodenFloor'
        case '강마루' : return 'laminateFloor'
        case '인테리어필름&시트' : return 'interiorFilm'
    }
}

function findSmallSize (code) {
    switch (code) {
        case 'component' :
        case 'hardware' :
        case 'poserine' :
        case 'ceramic' :
        case 'handle' :
        case 'hinge' :
        case 'subsidiary' :
        case 'lock' :    
        case 'wrapping' :
        case 'PVC' :
        case 'classic' :
        case 'deco' :
        case 'styleWall' :
        case 'wallPanel' :
        case 'artWall' :
        case 'wallShelf' :
        case 'woodenFloor' :
        case 'laminateFloor' :
        case 'styleWall' :
        case 'styleWall' :
        case 'interiorFilm' : return 'small-size'
    }
}

function loadJson(url){
    return fetch(url) // json 파일 읽기
    .then((response)=> response.json()) // 읽어온 파일 json변환
}

let $windowAddress = new LoadAdress()
let absoluteLocation = $windowAddress.absoluteLocation()
let qs = $windowAddress.queryString()

function LoadAdress () {
    let wl = window.location

    /** 절대 경로 */
    this.absoluteLocation = function () {
        let location = wl.pathname.split('/')
        location.pop()
        let result = location.join('/')
        return result
    }

    /** 쿼리스트링 */
    this.queryString = function (splitword = '&') {
        let result = {}
        let decoded = decodeURI(wl.search)
        let splitString = decoded.replace('?','').split(splitword)
        splitString.forEach(word => {
            let key = word.split('=')[0]
            let value = word.split('=')[1]
            result[key] = value
        })
        return result
    }
}


function sizeEvent () {
    let standard = window.innerWidth
    let x = document.querySelectorAll('.product-box .item-box .product-item.small-size')
    if(standard<1024){
        console.log('1024미만')
        header.classList.add('tablet')
        x.forEach(item=> item.classList.add('middle-size'))
    }else{
        header.classList.remove('tablet')
        x.forEach(item=> item.classList.remove('middle-size'))
    }
}

window.addEventListener('resize', sizeEvent)