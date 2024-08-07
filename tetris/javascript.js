// function createBackground() {
//   const backgroundContainer = document.querySelector(".puzzle-container");
//   for (let i = 0; i < 200; i++) {
//     let box = document.createElement("div")
//     box.classList.add("box");
//     backgroundContainer.appendChild(box);
//   }
// }

// createBackground();

class Shape {
  type = "square";
  coordinates = [
    { x: 0, y: 0 },
    { x: 0, y: 1 },
    { x: 1, y: 0 },
    { x: 1, y: 1 },
  ];

  shiftLeft() {
    this.coordinates.map((item) => (item.x = item.x - 1));
  }

  shiftRight() {
    this.coordinates.map((item) => (item.x = item.x + 1));
  }

  dropDown() {
    this.coordinates.map((item) => (item.y = item.y + 1));
  }
}

class Cell {
  empty = true;
  color = "none";
}

class Grid {
  grid = new Array();

  constructor() {
    for (let i = 0; i < 20; i++) {
      const row = new Array();
      for (let i = 0; i < 10; i++) {
        row.push(new Cell());
      }
      this.grid.push(row);
    }
  }

  fillSpace(x, y, color) {
    this.grid[y][x].empty = false;
    this.grid[y][x].color = color;
  }

  emptySpace(x, y) {
    this.grid[y][x].empty = true;
    this.grid[y][x].color = "none";
  }

  get occupiedSpaces() {
    const coordinates = new Array();

    this.grid.forEach((row, yIndex) => {
      let xIndices = [];
      row.forEach((cell, index) => {
        if (cell.empty === false) {
          xIndices.push(index);
        }
      });
      xIndices.forEach((index) => coordinates.push({ x: index, y: yIndex }));
    });

    return coordinates;
  }
}

function insertShape(shape, grid) {
  shape.coordinates.forEach((coordinate) => {
    grid.fillSpace(coordinate.x, coordinate.y, "black");
  });
}

let testGrid = new Grid();
let testSquare = new Shape();

insertShape(testSquare, testGrid);

console.log(testGrid.occupiedSpaces);
