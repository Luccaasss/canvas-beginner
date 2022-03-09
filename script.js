const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const MAX_MOVE_PIXEL = 580 // The max move of the box
const BOX_SIZE = 20 // Box size 20px

let xAxis = 0;
let yAxis = 0;

ctx.fillStyle = 'green';
ctx.fillRect(xAxis, yAxis, BOX_SIZE, BOX_SIZE);

const move = {
  ArrowRight() {
    if (xAxis < MAX_MOVE_PIXEL) {
      ctx.clearRect(xAxis, yAxis, BOX_SIZE, BOX_SIZE)
      xAxis += BOX_SIZE;
      ctx.fillRect(xAxis, yAxis, BOX_SIZE, BOX_SIZE);
    }
  },

  ArrowDown() {
    if (yAxis < MAX_MOVE_PIXEL) {
      ctx.clearRect(xAxis, yAxis, BOX_SIZE, BOX_SIZE)
      yAxis += BOX_SIZE;
      ctx.fillRect(xAxis, yAxis, BOX_SIZE, BOX_SIZE);
    }
  },

  ArrowLeft() {
    if (xAxis > 0) {
      ctx.clearRect(xAxis, yAxis, BOX_SIZE, BOX_SIZE)
      xAxis -= BOX_SIZE;
      ctx.fillRect(xAxis, yAxis, BOX_SIZE, BOX_SIZE);
    }
  },

  ArrowUp() {
    if (yAxis > 0) {
      ctx.clearRect(xAxis, yAxis, BOX_SIZE, BOX_SIZE)
      yAxis -= BOX_SIZE;
      ctx.fillRect(xAxis, yAxis, BOX_SIZE, BOX_SIZE);
    }
  }

}

window.addEventListener('keydown', (e) => {
  const keyPress = e.key
  if (move.hasOwnProperty(keyPress)) {
    const currentMove = move[keyPress]
    currentMove()
  }

  e.preventDefault()
})