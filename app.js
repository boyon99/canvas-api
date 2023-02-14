const canvas = document.querySelector("canvas");

const ctx = canvas.getContext("2d"); // 캔버스에 그림을 그릴 때 사용한다.
canvas.width = 500;
canvas.height = 500;
ctx.lineCap = "round"; // 선의 끝을 지정

// line-width
const lineWidth = document.getElementById("line-width")
ctx.lineWidth = lineWidth.value

function onLineWidthChange(e) {
  ctx.lineWidth = e.target.value
}

lineWidth.addEventListener("change", onLineWidthChange)


// color
const color = document.getElementById("color")
color.addEventListener("change", onColorChange)

function onColorChange(e) {
  ctx.strokeStyle = e.target.value
  ctx.fillStyle = e.target.value
}

// color options
const colorOptions = Array.from(document.getElementsByClassName('color-option')) // document는 배열이 아니므로 배열로 변경
colorOptions.forEach(color => color.addEventListener('click', onColorClick))

function onColorClick(e) {
  ctx.strokeStyle = e.target.dataset.color
  ctx.fillStyle = e.target.dataset.color
  color.value = e.target.dataset.color
}

// fill & draw mode
const modeBtn = document.getElementById("mode-btn")
let isFilling = false

modeBtn.addEventListener('click', onModeClick)

function onModeClick(e) {
  if (isFilling) {
    isFilling = false
    modeBtn.innerText = "채우기"
  } else {
    isFilling = true
    modeBtn.innerText = "그리기"
  }
}

// eraser
const eraserBtn = document.getElementById('eraser-btn')

eraserBtn.addEventListener('click', onEraserClick)

function onEraserClick(){
  ctx.strokeStyle = "white"
  isFilling = false
  modeBtn.innerText = "채우기";
}

// destroy
const destroyBtn = document.getElementById("destroy-btn");

function onDestroyClick() {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, 500, 500);
}

destroyBtn.addEventListener("click", onDestroyClick);

// palette
let isPainting = false

function onMove(e) {
  if (isPainting) {
    ctx.lineTo(e.offsetX, e.offsetY)
    ctx.stroke()
    return;
  }
  ctx.beginPath()
  ctx.moveTo(e.offsetX, e.offsetY)

}

function startPainting(e) {
  isPainting = true;
}

function cancelPainting(e) {
  isPainting = false;
}

function onCanvasClick(e){
  if(isFilling){
    ctx.fillRect(0,0,500,500)
  }
}

canvas.addEventListener('mousemove', onMove)
canvas.addEventListener('mousedown', startPainting)
canvas.addEventListener('mouseup', cancelPainting)
canvas.addEventListener('mouseleave', cancelPainting)
canvas.addEventListener('click', onCanvasClick)


// add text
const textInput = document.getElementById("text")
canvas.addEventListener('dblclick', onDoubleClick)

function onDoubleClick(e){
  const text = textInput.value;
  if (text !== "") {
    ctx.save(); // 현재상태, 색상, 스타일 등 모든 것을 저장함
    ctx.lineWidth = 1;
    ctx.font = "40px serif";
    ctx.fillText(text, e.offsetX, e.offsetY);
    ctx.restore(); // 이 사이의 값들은 저장되지 않음
  }
}