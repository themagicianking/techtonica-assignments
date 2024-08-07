class Shape {
  type = "square";
  coordinates = [
    { x: 0, y: 0 },
    { x: 0, y: 1 },
    { x: 1, y: 0 },
    { x: 1, y: 1 },
  ];
  color = "blue";

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

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class Grid {
  grid = new Array();

  constructor() {
    for (let y = 0; y < 20; y++) {
      const row = new Array();
      for (let x = 0; x < 10; x++) {
        row.push(new Cell(x, y));
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

  dropPieces() {
    this.occupiedSpaces.forEach((cell) => {
      this.fillSpace(cell.x, cell.y + 1, cell.color);
    });
  }
}

function insertShape(shape, grid) {
  shape.coordinates.forEach((coordinate) => {
    grid.fillSpace(coordinate.x, coordinate.y, shape.color);
  });
}

function printGrid(grid) {
  console.log("____________");
  grid.grid.forEach((row) => {
    let rowArr = ["|"];
    row.forEach((cell) =>
      cell.empty === true ? rowArr.push(" ") : rowArr.push("X")
    );
    console.log(rowArr.join("") + "|");
  });
  console.log("____________");
}

let testGrid = new Grid();
let testSquare = new Shape();

printGrid(testGrid);
insertShape(testSquare, testGrid);
printGrid(testGrid);
testGrid.dropPieces();
printGrid(testGrid);
console.log(testGrid.grid);