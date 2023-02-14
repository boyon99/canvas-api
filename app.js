const canvas = document.querySelector("canvas");

const ctx = canvas.getContext("2d"); // 캔버스에 그림을 그릴 때 사용한다.
canvas.width = 500;
canvas.height = 500;

ctx.lineWidth = 2

const colors = [
  "#ff3838",
  "#ffb8b8",
  "#c56cf0",
  "#ff9f1a",
  "#fff200",
  "#32ff7e",
  "#7efff5",
  "#18dcff",
  "#7d5fff",
];

function onclick(e){
  ctx.beginPath()
  ctx.moveTo(0,0)
  const color = colors[Math.floor(Math.random()*colors.length)]
  ctx.strokeStyle = color
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke()
}

canvas.addEventListener('mousemove', onclick)