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

  get aboveCellLocation() {
    return [this.x, this.y - 1];
  }
}

class Grid {
  grid = new Array();

  get occupiedSpaces() {
    const spaces = new Array();

    this.grid.forEach((row, yIndex) => {
      let xIndices = [];
      row.forEach((cell, index) => {
        if (!cell.empty) {
          xIndices.push(index);
        }
      });
      xIndices.forEach((index) => spaces.push(new Cell(index, yIndex)));
    });

    return spaces;
  }

  get occupiedSpacesCoordinates() {
    let coordinateArr = [];
    this.occupiedSpaces.forEach((cell) => coordinateArr.push([cell.x, cell.y]));
    return coordinateArr;
  }

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

  dropRow(rowNum) {
    let row = this.grid[rowNum];
    row.forEach((cell) => {
      if (
        this.occupiedSpacesCoordinates.find(
          (coordinates) =>
            JSON.stringify(coordinates) ===
            JSON.stringify(cell.aboveCellLocation)
        )
      ) {
        this.fillSpace(cell.x, cell.y, cell.color);
      } else {
        this.emptySpace(cell.x, cell.y);
      }
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

function dropAllPieces(grid) {
  for (let i = grid.grid.length - 1; i >= 0; i--) {
    grid.dropRow(i);
  }
}

let testGrid = new Grid();
let testSquare = new Shape();

printGrid(testGrid);
insertShape(testSquare, testGrid);
printGrid(testGrid);
dropAllPieces(testGrid);
dropAllPieces(testGrid);
dropAllPieces(testGrid);
dropAllPieces(testGrid);
printGrid(testGrid);
