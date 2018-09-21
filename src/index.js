module.exports = function solveSudoku(matrix) {

  /*
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
  
  while (!isSolved()) {

    for (let i = 0; i < squaresValues.length; i++) {

      //  Find numbers that's not identified
      let notIdentifiedNumbers = [];
      for (let z = 1; z <= 9; z++) {
        if (squaresValues[i].indexOf(z) < 0) {
          notIdentifiedNumbers.push(z);
        }
      }
      console.log(notIdentifiedNumbers);
      

      //  Find variants
      for (let k = 0; k < notIdentifiedNumbers.length; k++) {

        let arr = [],
            arrCoords = [];
        
        for (let j = 0; j < squaresValues[i].length; j++) {
          if (squaresValues[i][j] == 0) {
            arr.push((checkRow(notIdentifiedNumbers[k], squaresCoords[i][j][0]) && checkCol(notIdentifiedNumbers[k], squaresCoords[i][j][1]) ) );
            arrCoords.push(squaresCoords[i][j]);
          }
        }

        if (arr.indexOf(true) == arr.lastIndexOf(true)) {
          matrix[squaresCoords[i][arr.indexOf(true)][0]][squaresCoords[i][arr.indexOf(true)][1]] = notIdentifiedNumbers[k];
        }
        
      }

    }
    
  }

  console.log(matrix);
  */
  
  // return matrix;

  let res = [];
  for (let j = 1; j <= 9; j++) {
    let arr = [];
    for (let i = 0; i < 9; i++) {
      arr.push((i + j) % 10);
    }
    res.push(arr);
  }

  console.log(res);
  
  return res;

}