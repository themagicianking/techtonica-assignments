// creates an object with properties for shape type and a list of coordinates that it occupies as well as a color
class Shape {
  // for simplicity's sake, the only shapes i'm currently making are squares and rectangles

  constructor(randomNum) {
    switch (randomNum) {
      case 0:
        this.coordinates = [
          { x: 0, y: 0 },
          { x: 0, y: 1 },
          { x: 1, y: 0 },
          { x: 1, y: 1 },
        ];
        this.color = "cyan";
        break;
      case 1:
        this.coordinates = [
          { x: 0, y: 0 },
          { x: 1, y: 0 },
          { x: 2, y: 0 },
          { x: 3, y: 0 },
        ];
        this.color = "purple";
        break;
    }
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
  shape = null;
  color = null;
  // fixed = false;

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  // converts a cell from empty to full and sets a color
  fill(shape) {
    this.empty = false;
    this.shape = shape;
    this.color = shape.color;
  }

  // converts a cell from full to empty
  clear() {
    this.empty = true;
    this.shape = null;
    this.color = null;
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

  // adds the grid to the css
  createCSSGrid() {
    const gridElement = document.getElementById("puzzle-container");
    this.grid.forEach((row) => {
      row.forEach((cell) => {
        let cssCell = document.createElement("div");
        cssCell.id = `${cell.x}, ${cell.y}`;
        cssCell.classList.add("cell");
        gridElement.appendChild(cssCell);
      });
    });
  }

  // updating the css grid
  updateCSSGrid() {
    this.grid.forEach((row) => {
      row.forEach((cell) => {
        let cssCell = document.getElementById(`${cell.x}, ${cell.y}`);
        if (cell.empty) {
          cssCell.style.backgroundColor = "inherit";
        } else {
          cssCell.style.backgroundColor = `${cell.color}`;
        }
      });
    });
  }

  // // looks at any given row of the grid and converts it to what it "should" be on the next tick; ie, it checks to see if there are any pieces above and drops them into itself. still need to get pieces to stay if the row is at the bottom of the grid.
  // pullPiecesIntoRow(rowNum) {
  //   // check to see what spaces are dropping down and drop them.
  //   let rowAbove = this.grid[rowNum - 1];
  //   rowAbove.forEach((cellAbove) => {
  //     if (cellAbove.empty) {
  //       return;
  //     } else {
  //       let cell = this.grid[rowNum][cellAbove.x];
  //       if (cell.empty) {
  //         cell.fill(cellAbove.shape);
  //         cellAbove.clear();
  //       } else {
  //       }
  //     }
  //   });
  // }

  // insertActiveShape generates a shape and then creates filled spaces starting from (0,0) in the 10 x 20 grid that correspond to that shape
  insertActiveShape(shape) {
    shape.coordinates.forEach((coordinate) => {
      let cell = this.grid[coordinate.y][coordinate.x];
      cell.fill(shape);
    });
  }

  updateShapeLocation(shape) {}
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

// // dropAllPieces drops every row in the grid once
// function dropAllPieces(grid) {
//   for (let i = grid.grid.length - 1; i >= 1; i--) {
//     grid.pullPiecesIntoRow(i);
//   }
// }

// completely refactor perform tick, todo: add performTick to grid class
function performTick() {
  // let gridBefore = JSON.stringify(testGrid.grid);
  // dropAllPieces(testGrid);
  // let gridAfter = JSON.stringify(testGrid.grid);
  // if (gridBefore === gridAfter) {
  // stop inserting and end game if there are any filled cells in the top row
  //   let hasShapesInTopRow =
  //     testGrid.grid[0].filter((cell) => !cell.empty).length > 0;
  //   if (hasShapesInTopRow) {
  //     alert("Game Over!");
  //   }
  //   let shape = new Shape(getRandomShapeType());
  //   testGrid.insertActiveShape(shape);
  // }
  // updateCSSGrid(testGrid.grid);
}

function getRandomShapeType() {
  let shapeCases = [0, 1];
  let num = Math.floor(Math.random() * shapeCases.length + 1);
  return shapeCases[num - 1];
}

let testGrid = new Grid();

testGrid.createCSSGrid();
testGrid.insertActiveShape(new Shape(getRandomShapeType()));
testGrid.updateCSSGrid();

// window.setInterval(performTick, 500);
