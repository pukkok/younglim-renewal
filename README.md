# YOUNGLIM-renewal

[[리뉴얼 페이지](https://pukkok.github.io/younglim-renewal)]
[[영림 페이지](https://www.yl.co.kr/index)]

<p><b>* 메인페이지와 서브페이지( 제품 -> 키친/붙박이장 -> [상품목록] )까지 구현되어 있습니다.</b></p>

<br><br>
## 0. 제작 기간
2024년 3월 20일 ~ 2024년 4월 5일

<br><br>
## 1. 홈페이지 조사 기준

HTML, CSS, JAVASCRIPT 기준으로 웹사이트에
서버를 통한 작업을 제외하고, 구현할 수 있는 홈페이지를 기준으로 잡았다.

<BlockQuote>HTML</BlockQuote>

 - 아직 레이아웃 잡는 기본기가 부족하다고 생각했기 때문에
   일반적인 홈페이지의 레이아웃을 잡는 것에 중점 두기
 - 헤더에 뎁스가 여러개인 경우 구현하기
 - 유지보수를 할 수 있다는 가정하에 쉽게 수정할 수 있도록 구현하는 연습

<BlockQuote>CSS</BlockQuote>

 - 같은 디자인은 클래스로 묶어서 사용하기
 - 여백 이용하기
 - 전체적인 레이아웃을 해치지 않는 컬러 톤 사용 자제하기
 - 아트적인 요소보다는 전체적인 구성이 조화로울 수 있도록 하기
 - 폰트 크기의 기준을 잡아놓고 그때그때 알맞은 폰트 크기 사용하기

<BlockQuote>JAVASCRIPT</BlockQuote>

 - HTML 하드코딩 대신 자바스크립트를 통한 동적 생성을 중점으로 만들어보기
 - 서브 페이지에서 다른 상품으로 넘어갈 때 새로고침이 되지 않도록 하기
 - 라이브러리 사용해보기
 - 라이브러리 만들어서 구현해보기

<br><br>
## 2. 영림 홈페이지 선정 이유

1. 일반적인 홈페이지의 전체적인 레이아웃을 가진 웹사이트.
2. 네비게이션 뎁스가 여러개인 웹사이트.
3. 서브 페이지에 쇼핑몰 홈페이지 같은 제품들의 리스트를 확인하며 레이아웃을 잡는 
   연습을 할 수 있는 웹사이트.
4. 카드 UI를 사용할 수 있도록 이미지가 많은 웹사이트
5. 라이브러리를 사용할 수 있는 웹사이트
6. 약간의 부족함으로 개선점이 필요한 웹사이트
7. 로그인 후의 개별 기능이 있는 웹사이트

<br><br>
## 3. 페이지 리뉴얼

<BlockQuote>작업할 부분</BlockQuote>

1. 헤더 구성하기
2. 각 섹션 별 모듈화 작업
3. 디자인, UI 적으로 불편한 부분의 문제점을 찾아 개선
  - 화면이 너무 밝아 글씨가 안 보이는 경우가 있음.
  - 내용이 많은데 가운데 정렬로 되어있어 가독성이 떨어지는 경우가 있음
4. 같은 기능을 가진 화면이라면 데이터 동적 생성 및 변경하기
5. 반응형 구현하기
6. 전체적인 레이아웃은 그리드 스타일로 잡기

<br>

### 현재 영림 홈페이지 디자인
<BlockQuote>메인 빌보드</BlockQuote>
<img src=project/extra/younglim-origin1.JPG>

문제점 : 
 - 멈추는 기능이 없음. 
 - 페이지 개수를 알 수 없음
 - 글자가 가운데 정렬이 되어있어 가독성이 좋지 않음

 개선점 : 
 - pause 버튼 생성
 - 네비게이션 바 생성
 - 글자 좌측 정렬하여 위치 조정

<br><br>
<BlockQuote>상품 알아보기</BlockQuote>
<img src=project/extra/younglim-origin2.JPG>

문제점 : 
 - 슬라이드 기능에 시작과 끝 표시가 없음
 - 슬라이드가 드래그로만 설정되어있어 마우스로 움직이다 클릭하여 
   페이지가 넘어가는 일이 생김
   
개선점 : 
 - 슬라이드 기능 삭제 펼쳐보기

<br><br>
<BlockQuote>서브 페이지</BlockQuote>
제품 -> 키친/붙박이장 -> [상품목록]
<img src=project/extra/younglim-origin5.JPG>

문제점 :
 - 제품 네비게이션 바를 클릭할 때 마다 창이 새로고침 됨.

개선점 : 
 - 동적생성으로 하여 상품 리스트만 바뀔 수 있도록 구현하기


<br><br>
## 4. 컨셉 디자인

1. 리뉴얼을 기준으로 두기때문에 홈페이지에서 보여주려는 내용은 최대한 사용하기.

2. 홈페이지의 브랜드 색상 이용하기.
 - 브랜드 컬러 :
   Red(R218, G67, B37), Dark Gray(R98 ,G100, B105), Gray, Black

3. 인테리어 홈페이지이기 때문에 사진의 이미지는 최대한 크게 크게 사용하기.

4. 전체적인 레이아웃을 동글동글한 카드UI 방식으로 전환해 보기.

5. 반응형을 구현해도 컨셉 자체가 변하지 않도록 하기.

6. font 크기 : 34, 24, 20, 16, 14

<br><br>
## 5. 페이지 미리보기

<BlockQuote>메인 빌보드</BlockQuote>
<img src=project/extra/younglim-renewal1.JPG>

<BlockQuote>상품 알아보기</BlockQuote>
<img src=project/extra/younglim-renewal2.JPG>

<BlockQuote>컨셉별 애니메이션 구현</BlockQuote>
<img src=project/extra/younglim-renewal3.JPG>

<BlockQuote>콘택트</BlockQuote>
<img src=project/extra/younglim-renewal4.JPG>

<BlockQuote>서브 페이지</BlockQuote>
<img src=project/extra/younglim-renewal5.JPG>


<br><br>
## 6. 페이지 구현시 문제점 및 개선점

<BlockQuote>1. 헤더의 네비게이션 바가 뎁스가 여러개인 경우</BlockQuote>

문제점 :
- 뎁스가 여러개여서 네비게이션 바를 한 번에 만들어서 구성해 보니 레이아웃 잡기가 어려웠다.
- 따로 따로 만들어 보니 뎁스를 개별로 만드는 경우 css 호버 이벤트 사용이 불가능했다.

개선점 : 
- 레이아웃 구성을 먼저 잡고 뎁스를 개별로 만들어서 이어붙이는 작업을 함.

<br>
<BlockQuote>2. 전체적인 컨셉</BlockQuote>

문제점 : 
- 전체적인 컨셉을 유지하면서 홈페이지를 리뉴얼 하려고 하니 
- 처음에 섹션별로 만들어서 하나씩 구성해 봤을 땐 괜찮았던 것들이 합쳐서 구성했을 때
컨셉이 어색해 지는 경우가 있었다.

개선점 : 
- 전체적인 레이아웃 구조를 잡을 때 강약 조절을 잘해야 할 것 같다.

<br>
<BlockQuote>3. 동적 생성</BlockQuote>

문제점 : 
- 동적 생성을 하는 경우 애니메이션을 넣기가 힘들었다.
- 생성 이후에 필요한 기능을 사용하지 못했다.

개선점 : 
- 동적 생성이 끝난 이후에 애니메이션 추가했다.
- 기본 div는 생성 해두고 css 스타일만 바꿔서 애니메이션을 추가했다.
- async await을 사용해서 비동기 함수를 기다린 이후에 실행하도록 구현했다.

<br>
<BlockQuote>4. 링크 연결</BlockQuote>

문제점 : 
- 링크 클릭 시 다른 페이지로 넘어갈 때 새로고침 되어 데이터값 전달이 어려웠다.
- 홈페이지를 넘어갈 때 컴퓨터를 사용하는 곳마다 절대 경로가 바뀌었다.
- 
개선점 : 
- 자바스크립트의 윈도우 로케이션 객체를 사용하여 생성자 함수를 만들었다.
- origin : 절대경로 이용
- queryString : 쿼리스트링 데이터를 전달 및 인코딩 후 객체로 전달

## 사용한 스킬

![html5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![css](https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white)
![javascript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white)
