module.exports = function solveSudoku(matrix) {
  
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