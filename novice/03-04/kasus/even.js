$(function() {
  let rows = 10;
  let cols = 10;
  let cells = [];
  let even = true;
  function createGrid(root) {
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        let cell = $("<div>").addClass("cell");
        cell.attr("data-row", i).attr("data-col", j);
        cells.push(cell);
        root.append(cell);
      }
    }
  }

  function updateState() {
    cells.forEach(function(cell) {
      let row = Math.floor(cell.data("row"));
      let col = Math.floor(cell.data("col"));
      let sum = row + col;
      let isEven = sum % 2 == 0;
      if (isEven === even) {
        cell.addClass("active");
      } else {
        cell.removeClass("active");
      }
    });
    even = !even;
  }

  setInterval(updateState, 500);

  let $root = $(".container");
  createGrid($root);
});
