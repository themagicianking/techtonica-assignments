// NOTE ON GAMEPLAY: in tetris, everything lands where it lands. it drops down ONE if the row beneath it is cleared, it does not fall into the empty space.

// constructs a shape with the properties coordinates (an array of objects), a color (a string), and hasLanded (a boolean)
// for simplicity's sake, the only shapes i'm currently making are squares and rectangles
class Shape {
  hasLanded = false;
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
        this.type = 0;
        break;
      case 1:
        this.coordinates = [
          { x: 0, y: 0 },
          { x: 1, y: 0 },
          { x: 2, y: 0 },
          { x: 3, y: 0 },
        ];
        this.color = "purple";
        this.type = 1;
        break;
    }
  }

  // returns an array of objects containing the coordinates of the shape that are at the bottom row of the shape
  // todo: rename to bottom edge? come up with better name
  get bottomRow() {
    let row = [];
    this.coordinates.forEach((coordinate) => {
      let coordinateBelow = { x: coordinate.x, y: coordinate.y + 1 };
      // check to see if you can find the cell directly below in the shape
      // todo: refactor so it's not testing for double negatives
      let isNotInBottomRow = this.coordinates.find(
        (coordinate) =>
          JSON.stringify(coordinate) === JSON.stringify(coordinateBelow)
      );
      if (!isNotInBottomRow) {
        row.push(coordinate);
      }
    });
    return row;
  }

  // returns a boolean for if any part of the shape has reached 19 on the y axis or not
  get hasHitBottom() {
    return this.coordinates.some((coordinate) => coordinate.y === 19);
  }

  // takes an array of occupied spaces that do not belong to the shape and checks if any of those spaces are directly beneath the shape. returns a boolean
  hasOccupiedSpaceBeneath(occupiedNonShapeSpaces) {
    let hasOccupiedSpaceBeneath = false;
    let stringifiedOccupiedNonShapeSpaces = [];
    occupiedNonShapeSpaces.forEach((occupiedSpace) => {
      stringifiedOccupiedNonShapeSpaces.push(
        JSON.stringify({ x: occupiedSpace.x, y: occupiedSpace.y })
      );
    });
    this.bottomRow.forEach((cell) => {
      let cellBeneath = { x: cell.x, y: cell.y + 1 };
      if (occupiedNonShapeSpaces.length > 0) {
        let isPresentInOccupiedSpaces =
          stringifiedOccupiedNonShapeSpaces.includes(
            JSON.stringify(cellBeneath)
          );
        if (isPresentInOccupiedSpaces) {
          hasOccupiedSpaceBeneath = true;
        }
      }
    });

    return hasOccupiedSpaceBeneath;
  }

  // the shift methods are for translating the coordinates of the shape from left to right
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
    if (!this.hasHitBottom && !this.hasLanded) {
      this.coordinates.map((coordinate) => (coordinate.y = coordinate.y + 1));
    } else {
      return;
    }
  }

  rotateRight() {
    switch (this.type) {
      case 0:
        break;
      case 1:
        {
          // rotate the damn rectangle
          // if it's on its side (if bottomrow is four long) then move x to y and vice versa
          // if it's upright move y to x? i think?
          // nope
          // gotta fix it 
          if (this.bottomRow.length === 4) {
            this.coordinates.forEach((coordinate) => {
              let originalX = coordinate.x;
              let originalY = coordinate.y;
              coordinate.x = originalY;
              coordinate.y = originalX;
            });
          } else {
            this.coordinates.forEach((coordinate) => {
              let originalX = coordinate.x;
              let originalY = coordinate.y;
              coordinate.x = originalX + 1;
              coordinate.y = originalY + -1;
            });
          }
        }
        break;
    }

    // ok so for rectangles:
    // (0,0) (1, 0) (2, 0) (3,0)
    // (1, -1) (1, 0) (1, 1) (1, 2)
    // (x + 1, y - 1) (x, y) (x - 1, y + 1) (x - 2, y + 2)
    // (2, 0) (1, 0) (0, 0) (-1, 0)
    // (x + 1, y + 1) ()
  }
}

// constructs a cell object with properties empty (boolean), shape (string, default null) and color (string, default null)
// todo: determine whether shape property is redundant or if it can be used in a refactor
class Cell {
  empty = true;
  shape = null;
  color = null;

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

  // converts a cell from full to empty and resets color to null
  clear() {
    this.empty = true;
    this.shape = null;
    this.color = null;
  }
}

// creates a grid object with property grid (an array, later updated to a 2d array represeting a 10 * 20 grid), activeShape (a shape object, default null), occupiedSpaces (an array of objects), nonShapeOccupiedSpaces (an array of objects), and occupiedSpacesCoordinates (an array of arrays)
// todo: determine whether occupiedSpacesCoordinates is redundant
class Grid {
  grid = new Array();
  activeShape = null;

  // returns an array of cells identical to the cells that are currently full
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

  // returns an array of cells that are occupied but not part of the active shape
  get occupiedNonShapeSpaces() {
    let shapeCells = [];
    this.activeShape.coordinates.forEach((coordinate) => {
      let cell = this.grid[coordinate.y][coordinate.x];
      shapeCells.push(cell);
    });
    return this.occupiedSpaces.filter((space) => !shapeCells.includes(space));
  }

  // creates a 2d array; a 10 * 20 grid of cells
  // todo: come up with better name for grid property
  constructor() {
    for (let y = 0; y < 20; y++) {
      const row = new Array();
      for (let x = 0; x < 10; x++) {
        row.push(new Cell(x, y));
      }
      this.grid.push(row);
    }
  }

  // adds a representation of the grid object to the css
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

  // updates the css representation of the grid
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

  // todo: determine if pullPiecesIntoRow is redundant
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

  // generates a shape and then creates filled spaces starting from (0,0) in the 10 * 20 grid that correspond to that shape
  // todo: refactor method so it inserts shape one row at a time
  // todo: insert in the middle of the grid instead of top left
  insertActiveShape(shape) {
    this.activeShape = shape;
    shape.coordinates.forEach((coordinate) => {
      let cell = this.grid[coordinate.y][coordinate.x];
      cell.fill(shape);
    });
    this.activeShapeLocation = JSON.parse(JSON.stringify(shape.coordinates));
  }

  // updates the location of the active shape
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

// print grid is a helper so i can visualize and debug
// space strings represent empty cells and X strings represent one filled cell
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
// // todo: determine whether dropAllPieces is redundant
// function dropAllPieces(grid) {
//   for (let i = grid.grid.length - 1; i >= 1; i--) {
//     grid.pullPiecesIntoRow(i);
//   }
// }

// completely refactor perform tick, todo: add performTick to grid class
// function performTick() {
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
// }

// random number generator for each shape case
function getRandomShapeType() {
  let shapeCases = [0, 1];
  let num = Math.floor(Math.random() * shapeCases.length + 1);
  return shapeCases[num - 1];
}

let testGrid = new Grid();

testGrid.createCSSGrid();
testGrid.insertActiveShape(new Shape(getRandomShapeType()));
testGrid.updateCSSGrid();

// checks to see if the active shape has landed and inserts a new shape that becomes the active shape if it has
// if the active shape has not landed, checks whether the active shape has pieces beneath or has hit the bottom
// if it has done either, sets the active shape to hasLanded
// if it has done neither, it drops the active shape down one row and tells the grid and the css that the shape has dropped
function updateGrid() {
  if (testGrid.activeShape.hasLanded) {
    let piecesInTopRow = testGrid.occupiedSpaces.filter(
      (occupiedSpace) => occupiedSpace.y === 0
    );
    if (piecesInTopRow.length === 0) {
      testGrid.insertActiveShape(new Shape(getRandomShapeType()));
    } else {
      alert("GAME OVER!");
    }
  } else {
    if (
      testGrid.activeShape.hasOccupiedSpaceBeneath(
        testGrid.occupiedNonShapeSpaces
      ) ||
      testGrid.activeShape.hasHitBottom
    ) {
      testGrid.activeShape.hasLanded = true;
      testGrid.updateCSSGrid();
    } else {
      testGrid.activeShape.dropDown();
      testGrid.updateActiveShapeLocation();
      testGrid.updateCSSGrid();
    }
  }
}

// calls the updateGrid function every half second
window.setInterval(updateGrid, 500);

// listens for left, right, and down keybinds
// todo: refactor left and right shift methods so the active shape can't erase any shapes that are beside it
window.addEventListener("keydown", function (moveActiveShape) {
  switch (moveActiveShape.keyCode) {
    case 37:
      testGrid.activeShape.shiftLeft();
      testGrid.updateActiveShapeLocation();
      testGrid.updateCSSGrid();
      break;
    case 38:
      testGrid.activeShape.rotateRight();
      testGrid.updateActiveShapeLocation();
      testGrid.updateCSSGrid();
    case 39:
      testGrid.activeShape.shiftRight();
      testGrid.updateActiveShapeLocation();
      testGrid.updateCSSGrid();
      break;
    case 40:
      updateGrid();
      testGrid.updateActiveShapeLocation();
      testGrid.updateCSSGrid();
      break;
  }
});
