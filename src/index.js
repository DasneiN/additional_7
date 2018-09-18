module.exports = function solveSudoku(matrix) {

  let squaresValues = [],
      squaresCoords = [];

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

  //  Разбиваем матрицу на квадраты
  for (let z = 0; z < 3; z++) {
    for (let k = 0; k < 3; k++) {
      let arrValues = [],
          arrCoords = [];

      for (let i = 0; i < 3; i++) {

        for (let j = 0; j < 3; j++) {
          arrValues.push(matrix[k * 3 + i][z*3+j]);
          arrCoords.push([(k * 3 + i), (z * 3 + j)]);
        }

      }

      squaresValues.push(arrValues);
      squaresCoords.push(arrCoords);

    }
  }
  
  while (!isSolved) {

    
    
  }

}