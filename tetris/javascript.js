// NOTE ON GAMEPLAY: in tetris, everything lands where it lands. it drops down ONE if the row beneath it is cleared, it does not fall into the empty space.

// creates an object with properties for shape type and a list of coordinates that it occupies as well as a color
class Shape {
  hasLanded = false;
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

  get dropLocation() {
    let coordinatesCopy = JSON.parse(JSON.stringify(this.coordinates));
    return coordinatesCopy.map(
      (coordinate) => (coordinate.y = coordinate.y + 1)
    );
  }

  // filter out specific coordinates that are stacked on top of each other
  get bottomRow() {
    let row = [];
    this.coordinates.forEach((coordinate) => {
      let coordinateBelow = { x: coordinate.x, y: coordinate.y + 1 };
      // check to see if you can find the cell directly below in the shape
      let isNotInBottomRow = this.coordinates.find(
        (coordinate) =>
          JSON.stringify(coordinate) === JSON.stringify(coordinateBelow)
      );
      if (!isNotInBottomRow) {
        row.push(coordinate);
      }
    });
    return row
  }

  // the hasLanded getter should take information given by the grid to determine whether the shape has hit another shape
  // if ANY cell in the bottom row of the shape has a full cell beneath it, the shape has landed
  // how to get bottom row? calculate bottom row?
  get hasLanded() {}

  // the shift methods are for translating the coordinates of the shape from left to right
  // todo: put long coordinates into variables
  shiftLeft() {
    let hasHitLeftSide = this.coordinates.some(
      (coordinate) => coordinate.x === 0
    );
    if (!hasHitLeftSide) {
      this.coordinates.map((coordinate) => (coordinate.x = coordinate.x - 1));
    } else {
      return;
    }
  }

  shiftRight() {
    let hasHitRightSide = this.coordinates.some(
      (coordinate) => coordinate.x === 9
    );
    if (!hasHitRightSide) {
      this.coordinates.map((coordinate) => (coordinate.x = coordinate.x + 1));
    } else {
      return;
    }
  }

  // the drop down method is for translating the coordinates down
  dropDown() {
    this.coordinates.map((coordinate) => (coordinate.y = coordinate.y + 1));
    // let hasHitBottom = this.coordinates.some(
    //   (coordinate) => coordinate.y === 19
    // );
    // if (!hasHitBottom && !this.hasLanded) {
    //   // move it down
    // } else if (hasHitBottom) {
    //   this.hasLanded = true;
    // } else {
    //   return;
    // }
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
  activeShape = null;

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

  // this getter returns an array of the positions of each occupied cell in the form of an array in which arr[0] is the x coordinate and arr[1] is the y coordinate. not sure this is necessary.
  // get occupiedSpacesCoordinates() {
  //   let coordinateArr = [];
  //   this.occupiedSpaces.forEach((cell) => coordinateArr.push([cell.x, cell.y]));
  //   return coordinateArr;
  // }

  get occupiedNonShapeSpaces() {
    let shapeCells = [];
    this.activeShape.coordinates.forEach((coordinate) => {
      let cell = this.grid[coordinate.y][coordinate.x];
      shapeCells.push(cell);
    });
    return this.occupiedSpaces.filter((space) => !shapeCells.includes(space));
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
    this.activeShape = shape;
    this.activeShapeLocation = JSON.parse(JSON.stringify(shape.coordinates));
  }

  dropActiveShape(shape) {}

  updateActiveShapeLocation() {
    this.activeShapeLocation.forEach((coordinate) => {
      let cell = this.grid[coordinate.y][coordinate.x];
      cell.clear();
    });
    this.insertActiveShape(this.activeShape);
    this.activeShapeLocation = JSON.parse(
      JSON.stringify(this.activeShape.coordinates)
    );
  }
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

function updateGrid() {
  if (testGrid.activeShape.hasLanded) {
    testGrid.insertActiveShape(new Shape(getRandomShapeType()));
  } else {
    // test to see if theres a shape below and if there is the shape has landed
    testGrid.activeShape.coordinates.map((coordinate) => {
      coordinate.y = coordinate.y + 1;
    });
    testGrid.activeShape.dropDown();
    testGrid.updateActiveShapeLocation();
    testGrid.updateCSSGrid();
  }
}

// window.setInterval(updateGrid, 500);

window.addEventListener("keydown", function (moveActiveShape) {
  switch (moveActiveShape.keyCode) {
    case 37:
      testGrid.activeShape.shiftLeft();
      testGrid.updateActiveShapeLocation();
      testGrid.updateCSSGrid();
      break;
    case 39:
      testGrid.activeShape.shiftRight();
      testGrid.updateActiveShapeLocation();
      testGrid.updateCSSGrid();
      break;
    case 40:
      testGrid.activeShape.dropDown();
      testGrid.updateActiveShapeLocation();
      testGrid.updateCSSGrid();
      break;
  }
});

console.log(testGrid.occupiedNonShapeSpaces);
