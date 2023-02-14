const canvas = document.querySelector("canvas");

const ctx = canvas.getContext("2d"); // 캔버스에 그림을 그릴 때 사용한다.
canvas.width = 500;
canvas.height = 500;

ctx.lineWidth = 2
let isPainting = false

function onMove(e){
  if(isPainting){
    ctx.lineTo(e.offsetX,e.offsetY)
    ctx.stroke()
    return;
  }
  ctx.moveTo(e.offsetX,e.offsetY)

}

function startPainting(e){
  isPainting = true;
}

function cancelPainting(e){
  isPainting = false;
}

canvas.addEventListener('mousemove', onMove)
canvas.addEventListener('mousedown', startPainting)
canvas.addEventListener('mouseup', cancelPainting)
canvas.addEventListener('mouseleave', cancelPainting)