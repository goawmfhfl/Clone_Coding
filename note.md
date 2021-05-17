# Megabox clone

>2021년 4월 5일 작업부분 - 반응형 가상요소 설정

```css
/* 미디어 쿼리 반응형 헷갈리는 부분*/

@media (max-width: 600px){
  #movie .container:after{content: ''; position: absolute; z-index: 20; top: 0; right: 0; 
  }

  #movie .row{position: relative; margin: 8px; padding: 16px; margin-right: 0; padding-right: 0;}

  #movie .row:after{content: ''; position: absolute; top: 0; right: 0; z-index: 10; width: 24px; height: 100%; background-color: #fff;}

  .movie_chart{position: relative; z-index: 30;}
```

max-width:600부분 부터는 화면 오른쪽에서 날아오는 듯한 효과를 주기 위해서 .movie_chart(swiper) 오른쪽 margin과 padding 영역을 지운 후 가상요소로 배경을 만들어 설정한 후에 z-index를 활용하여 위치값을 조정함 *(z-index는 항상 position값이 있어야 사용가능)*

<br>

---

<br>

>2021년 4월 5일 작업부분 - 반응형 swiper 이용한 break point 설정

```js
// 영화 차트 슬라이드
    var swiper = new Swiper('.swiper-container2', {
        slidesPerView: 4,
        spaceBetween: 24,
        mousewheel: {
        invert: true,
    },
        keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
       breakpoints: {
        600: {
        slidesPerView: 1.4,
        spaceBetween: 24
        },
        768: {
        slidesPerView: 2,
        spaceBetween: 24
        },
        960: {
        slidesPerView: 3,
        spaceBetween: 24
        }
    }
    });
```
swiper 홈페이지에서 breakPoint 검색