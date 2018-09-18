module.exports = function solveSudoku(matrix) {

  //  Проверка, решен ли судоку
  let isSolved = function () {
    
    for (let i = 0; i < matrix.length; i++) {
      if (matrix[i].indexOf(0)) {
        return false;
      }
    }

    return true;
    
  }
  
  //  Функция проверки ряда
  let checkRow = function (number, row) {
    return matrix[row].indexOf(number) ? false : true;
  }

  //  Функция проверки столбца
  let checkCol = function (number, col) {
    for (let i = 0; i < matrix.length; i++) {
      if (matrix[i][col] == number) {
        return false;
      }
    }
    return true;
  }

  

}