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

  shiftRight() {
    this.coordinates.map((item) => (item.x = item.x + 1));
  }
}

let testShape = new Shape();
testShape.shiftRight();
testShape.shiftRight();
testShape.shiftRight();
console.log(testShape.coordinates);

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

// let testGrid = new Grid();
// testGrid.fillSpace(5, 0, "red");
// testGrid.fillSpace(3, 7, "yellow");
// testGrid.fillSpace(2, 0, "black");
// testGrid.fillSpace(9, 9, "blue");

// console.log(testGrid.grid);
// testGrid.emptySpace(5, 0);
// console.log(testGrid.occupiedSpaces);
