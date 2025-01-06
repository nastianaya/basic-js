const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  return matrix.map((row, i) =>
    row.map((elem, j) => {
      const topLeft = matrix[i - 1]?.[j - 1];
      const top = matrix[i - 1]?.[j];
      const topRight = matrix[i - 1]?.[j + 1];
      const right = matrix[i]?.[j + 1];
      const bottomRight = matrix[i + 1]?.[j + 1];
      const bottom = matrix[i + 1]?.[j];
      const bottomLeft = matrix[i + 1]?.[j - 1];
      const left = matrix[i]?.[j - 1];
      
      const res = [
        topLeft,
        top,
        topRight,
        right,
        bottomRight,
        bottom,
        bottomLeft,
        left
      ];

      return res.filter((mine) => mine).length;
    })
  );
}

module.exports = {
  minesweeper
};
