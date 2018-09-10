const createBoard = require('./createBoard')
const nextBoard = require('./nextBoard')
const displayBoard = require('./displayBoard')

let size = 0;
let board = []
const framesPerSecond = document.getElementById("FPS").value

randomize();
clearGrid();

function restart() {
    clearGrid()
    randomize()
}

document.addEventListener('DOMContentLoaded', drawGrid())
var beginClick = document.getElementById("begin");
    if (beginClick) {
        beginClick.onclick = restart;
}

function randomize() {
    size = document.getElementById("boardSize").value
    board = createBoard(document.getElementById("boardSize").value)
    
    drawGrid()
	for (let y = 0; y < board.length; y++) {
		for (let j = 0; j < board.length; j++) {
			board[y][j] = (Math.random() >= document.getElementById("populationStart").value / 100)
		}
	}
}

function clearGrid(){
    for (let y = 0; y < board.length; y++) {
		for (let j = 0; j < board.length; j++) {
            var element = document.getElementById("r" + y + "c" + j);
            element.parentNode.removeChild(element);
		}
	}
}

function drawGrid() {
	for (var i = 0; i < size; i++) {
		for (var j = 0; j < size; j++) {
			var div = document.createElement("div");
			let boxSize = document.getElementById('pixelSize').value;
			div.id = "r" + i + "c" + j;

			div.style.width = boxSize + "px";
			div.style.height = boxSize + "px";
			div.style.background = "black";
			div.style.border = "solid";
			div.style.borderWidth = "1px"
			div.style.borderColor = "black"

			let width = ((boxSize * size) + (size * 2)) + "px";

			document.getElementById("container").style.width = width;
			document.getElementById("container").appendChild(div);
		}
	}

}

setInterval(() => {
	displayBoard(board)
	board = nextBoard(board)
}, 1000 / framesPerSecond)