## [canvas api](https://developer.mozilla.org/ko/docs/Web/API/Canvas_API)
#### html에 `canvas`를 추가한 후 js에 속성을 추가한다.
```js
const canvas = document.querySelector("canvas");
canvas.width = 500;
canvas.height = 500;
```

#### 캔버스의 드로잉 컨텍스트를 반환한다.
```js
const ctx = canvas.getContext("2d"); // 캔버스에 그림을 그릴 때 사용한다.
```

#### 도형을 그린다.
- **사각형**
```js
// 시작하기
ctx.beginPath() // 새로운 Path 시작하기

// 그리기
ctx.rect(50,50,50,50)  // ctx.rect(x, y, w, h)
ctx.rect(100,100,50,50) 
// ctx.fillRect(x,y,w,h) : 사각형 그리기와 채워넣기의 단축속성
// ctx.strokeRect(x,y,w,h) : 사각형 윤곽선 단축속성

// 속성
ctx.fillStyle = "blue" // 색상
ctx.strokeStyle = "black" // 테두리색상

// 마무리
ctx.fill() // 색상 채우기
```

- **선**
```js
// 시작하기
ctx.beginPath() // 새로운 Path 시작하기

// 그리기
ctx.moveTo(10,10) // x와 y 좌표 값으로 이동하기
ctx.lineTo(30,30) // 해당 x와 y 좌표 값까지 그리기

// 속성
ctx.lineWidth = 10 // 선두께이며 그리기 전에 설정해줘야 한다.

// 마무리
ctx.stroke() // 선그리기
```

- **원**

```js
ctx.beginPath() // 새로운 Path 시작하기
ctx.arc(200,50,20,0,2*Math.PI) // (x,y, radius,startAngle(원의 시작점), endAngle(원의 끝점), counterlickwise)
ctx.fill();
```