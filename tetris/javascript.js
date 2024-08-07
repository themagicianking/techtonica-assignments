// function createBackground() {
//   const backgroundContainer = document.querySelector(".puzzle-container");
//   for (let i = 0; i < 200; i++) {
//     let box = document.createElement("div")
//     box.classList.add("box");
//     backgroundContainer.appendChild(box);
//   }
// }

// createBackground();
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
    this.grid[x][y].empty = false;
    this.grid[x][y].color = color;
  }

  emptySpace(x, y) {
    this.grid[x][y].empty = true;
    this.grid[x][y].color = "none";
  }
}

let testGrid = new Grid();
testGrid.fillSpace(5, 0, "red");
console.log(testGrid.grid);
testGrid.emptySpace(5, 0);
console.log(testGrid.grid);
