/*module.exports = */function solveSudoku(matrix) {
  
  //  Проверка, решен ли судоку
  let isSolved = function () {
    
    for (let i = 0; i < matrix.length; i++) {
      if (matrix[i].indexOf(0) > -1) {
        return false;
      }
    }

    return true;
    
  }

  //  Составляем прогноз на ячейки
  let prediction = function (row, col) {
    
    let variants = [1,2,3,4,5,6,7,8,9]; //  Массив возможных значений
    
    //  Удаляем цифры из столбца
    for (let i = 0; i < 9; i++) {
      if (variants.indexOf(matrix[i][col]) > -1 && Number.isInteger(matrix[i][col])) {
        variants.splice(variants.indexOf(matrix[i][col]), 1);
      }
    }

    //  Удаляем цифры из строки
    for (let i = 0; i < 9; i++) {
      if (variants.indexOf(matrix[row][i]) > -1 && Number.isInteger(matrix[row][i])) {
        variants.splice(variants.indexOf(matrix[row][i]), 1);
      }
    }
    
    matrix[row][col] = variants;
    
  }


  
  //  Составляем прогноз для всех ячеек
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] == 0) {
        prediction(i, j);
      }
    }
  }

  //  Если прогноз составляет одну ячейку, то вносим результат
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (Array.isArray(matrix[i][j])) {
        if (matrix[i][j].length == 1) {
          matrix[i][j] = matrix[i][j][0];
        }
      }
    }
  }
  
  
  
  console.table(matrix);
  console.table(matrix);
  
  
  return matrix;

}

var initial = [
  [5, 3, 4, 6, 7, 8, 9, 0, 0],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]
];

solveSudoku(initial);