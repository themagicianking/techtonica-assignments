// creates an object with properties for shape type and a list of coordinates that it occupies as well as a color
class Shape {
  // for simplicity's sake, the only shape i'm currently making is a square
  type = "square";
  coordinates = [
    { x: 0, y: 0 },
    { x: 0, y: 1 },
    { x: 1, y: 0 },
    { x: 1, y: 1 },
  ];
  color = "blue";

  updateLocation() {
    // tells the shape where it is
  }

  // the shift methods are for translating the coordinates of the shape from left to right; i want to use this to translate player input
  shiftLeft() {
    this.coordinates.map((item) => (item.x = item.x - 1));
  }

  shiftRight() {
    this.coordinates.map((item) => (item.x = item.x + 1));
  }

  // the drop down method is for translating the coordinates down; i'm unsure if this method is redundant because of the row drop method in the grid class but i think it may be useful for if i implement the ability to make a shape move down faster
  dropDown() {
    this.coordinates.map((item) => (item.y = item.y + 1));
  }
}

// the cell class creates one cell for the grid with properties for whether it is empty or not, the color (this will always be none if it is empty), and the x and y coordinates
class Cell {
  empty = true;
  color = "none";
  // fixed = false;

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  // aboveCellLocation gives the coordinates of whichever cell would be above this one. the location may not exist (if there's negative coordinates)
  get aboveCellLocation() {
    return [this.x, this.y - 1];
  }

  // belowCellLocation gives the coordinates of whichever cell would be below this one. the location may not exist if the y index is over 19.
  get belowCellLocation() {
    return [this.x, this.y + 1];
  }
}

// the grid class creates and handles a 10 x 20 grid of cells
class Grid {
  grid = new Array();

  // this getter returns an array of cells identical to the cells that are currently not empty in the grid
  get occupiedSpaces() {
    const spaces = new Array();

    this.grid.forEach((row, yIndex) => {
      let xIndices = [];
      row.forEach((cell, index) => {
        if (!cell.empty) {
          xIndices.push(index);
        }
      });
      xIndices.forEach((index) => spaces.push(this.grid[yIndex][index]));
    });

    return spaces;
  }

  // this getter returns an array of the positions of each occupied cell in the form of an array in which arr[0] is the x coordinate and arr[1] is the y coordinate
  get occupiedSpacesCoordinates() {
    let coordinateArr = [];
    this.occupiedSpaces.forEach((cell) => coordinateArr.push([cell.x, cell.y]));
    return coordinateArr;
  }

  // builds a 2d array; a 10 x 20 grid of cells
  constructor() {
    for (let y = 0; y < 20; y++) {
      const row = new Array();
      for (let x = 0; x < 10; x++) {
        row.push(new Cell(x, y));
      }
      this.grid.push(row);
    }
  }

  // converts a cell from empty to full and sets a color
  fillSpace(x, y, color) {
    this.grid[y][x].empty = false;
    this.grid[y][x].color = color;
  }

  // converts a cell from full to empty
  emptySpace(x, y) {
    this.grid[y][x].empty = true;
    this.grid[y][x].color = "none";
  }

  // drops a cell down into an empty space below it
  dropCellIntoEmpty(x, y, color) {
    this.fillSpace(x, y + 1, color);
  }

  // looks at any given row of the grid and converts it to what it "should" be on the next tick; ie, it checks to see if there are any pieces above and drops them into itself. still need to get pieces to stay if the row is at the bottom of the grid.
  pullPiecesIntoRow(rowNum) {
    // check to see what spaces are dropping down and drop them.
    let rowAbove = this.grid[rowNum - 1];
    rowAbove.forEach((cellAbove) => {
      if (cellAbove.empty) {
        return;
      } else {
        let cell = this.grid[rowNum][cellAbove.x];
        if (cell.empty) {
          this.fillSpace(cell.x, cell.y, cellAbove.color);
          console.log(cell.color);
          this.emptySpace(cellAbove.x, cellAbove.y);
        } else {
        }
      }
    });
  }
}

// insertShape generates a shape and then creates filled spaces starting from (0,0) in the 10 x 20 grid that correspond to that shape
function insertShape(shape, grid) {
  shape.coordinates.forEach((coordinate) => {
    grid.fillSpace(coordinate.x, coordinate.y, shape.color);
  });
}

// print grid is just a helper so i can visualize and debug, currently space strings represent empty cells and X strings represent one filled cell
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

// dropAllPieces drops every row in the grid once
function dropAllPieces(grid) {
  for (let i = grid.grid.length - 1; i >= 1; i--) {
    grid.pullPiecesIntoRow(i);
  }
}

let testGrid = new Grid();
// printGrid(testGrid);
let testSquare = new Shape();
insertShape(testSquare, testGrid);
console.log(testGrid.occupiedSpaces);
// printGrid(testGrid);
// dropAllPieces(testGrid);
// dropAllPieces(testGrid);
// dropAllPieces(testGrid);
// dropAllPieces(testGrid);
// dropAllPieces(testGrid);
// dropAllPieces(testGrid);
// dropAllPieces(testGrid);
// dropAllPieces(testGrid);
// dropAllPieces(testGrid);
// dropAllPieces(testGrid);
// dropAllPieces(testGrid);
// dropAllPieces(testGrid);
// dropAllPieces(testGrid);
// dropAllPieces(testGrid);
// dropAllPieces(testGrid);
// dropAllPieces(testGrid);
// dropAllPieces(testGrid);
dropAllPieces(testGrid);
// dropAllPieces(testGrid);
// dropAllPieces(testGrid);
dropAllPieces(testGrid);
// dropAllPieces(testGrid);
dropAllPieces(testGrid);
// dropAllPieces(testGrid);
dropAllPieces(testGrid);
// dropAllPieces(testGrid);
// printGrid(testGrid);

// visualizing grid on the page
function createCSSGrid() {
  const gridElement = document.getElementById("puzzle-container");
  for (let y = 0; y < 20; y++) {
    for (let x = 0; x < 10; x++) {
      let cell = document.createElement("div");
      cell.id = `${x}, ${y}`;
      cell.classList.add("cell");
      gridElement.appendChild(cell);
    }
  }
}

createCSSGrid();

// updating the css
function updateCSSGrid(gridState) {
  gridState.forEach((row) => {
    row.forEach((cell) => {
      // console.log(cell.x, cell.y);
      let cssCell = document.getElementById(`${cell.x}, ${cell.y}`);
      if (cell.empty) {
        cssCell.style.backgroundColor = "inherit";
      } else {
        console.log("the cell is full");
        cssCell.style.backgroundColor = `${cell.color}`;
      }
    });
  });
}

function performTick() {
  dropAllPieces(testGrid);
  updateCSSGrid(testGrid.grid);
}

window.setInterval(performTick, 500);
