let grid = document.querySelector("#grid");
let colorBtn = document.querySelector("#blackbtn");
let eraserBtn = document.querySelector("#eraserbtn");
let resetBtn = document.querySelector("#resetbtn");
let setBoard = document.querySelector("#sizebtn");
let input = document.querySelector("input");

function createCell(size) {
  let cell = document.createElement("div");
  cell.classList.add("cell");
  cell.style.width = `${size}px`;
  cell.style.height = `${size}px`;
  return cell;
}

function resetBoard() {
  while (grid.firstChild) {
    grid.removeChild(grid.lastChild);
  }
}

function clearBoard() {
  let colectionOfCells = document.getElementsByClassName("cell");
  Array.from(colectionOfCells).forEach(function (cell) {
    cell.classList.remove("active");
  });
}

function createGrid() {
  resetBoard();
  let gridSize = input.value;
  if (gridSize < 2 || gridSize > 100) {
    alert("Please input a number between 2 - 100");
  } else {
    const size = grid.clientWidth / gridSize;
    let numberOfCellsTotal = gridSize * gridSize;
    for (let i = 0; i < numberOfCellsTotal; i++) {
      grid.appendChild(createCell(size));
    }
  }
}

function color() {
  grid.addEventListener("mouseover", function (e) {
    if (e.target.matches(".cell")) {
      e.target.classList.add("active");
    }
  });
}

function eraser() {
  grid.addEventListener("mouseover", function (e) {
    if (e.target.matches(".cell")) {
      e.target.classList.remove("active");
    }
  });
}

eraserBtn.addEventListener("click", eraser);
colorBtn.addEventListener("click", color);
setBoard.addEventListener("click", createGrid);
resetBtn.addEventListener("click", clearBoard);
