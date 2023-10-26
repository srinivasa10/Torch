/*
This is my  attempt at filling up a magic square. 
A magic square is a 9x9 grid where all rows, all columns and 
each diagonal add up to the same number.
*/


/** This is a helper function to print the grid.
 * @param {Array} square a 2-d array which represents the magic square
 */
function displayGrid(square) {
    console.log("-------------")
    for (let i = 0; i < square.length; i++) {
        let row = square[i]
        let rowString = ""
        for (let j = 0; j < row.length; j++) {
            rowString += ("| " + row[j] + " ")
        }
        console.log(rowString + "|")
        if (i === square.length - 1) {
            console.log("-------------")
        } else {
            console.log("----+---+---")
        }
    }
}

/** This is a helper function to check if a 3x3 grid is a magic square.
 * @param {Array} square a 2-d array which represents the magic square
 * @returns {boolean} true if it's a magic square, false otherwise
 */
function isMagicBox(square) {
    // Calculate the expected sum of rows, columns, and diagonals
    let total = 15; // The sum of rows, columns, and diagonals in a 3x3 magic square.

    // Checking rows and columns
    for (let i = 0; i < square.length; i++) {
        let rowSum = 0
        let colSum = 0
        for (let j = 0; j < square[i].length; j++) {
            rowSum += square[i][j]
            colSum += square[j][i]
        }
        if (rowSum !== total || colSum !== total) {
            return false
        }
    }

    // Checking diagonals
    let diagonal1Sum = square[0][0] + square[1][1] + square[2][2]
    let diagonal2Sum = square[0][2] + square[1][1] + square[2][0]

    return diagonal1Sum === total && diagonal2Sum === total
}

/** This is a helper function stolen from 
 * "https://www.w3resource.com/javascript-exercises/fundamental/javascript-fundamental-exercise-136.php"
 * to generate permutations
 * @param {String} str 
 * @returns an array containing all permutations of the string
 */
function stringPermutations(str) {
    if (str.length <= 2) return str.length === 2 ? [str, str[1] + str[0]] : [str];
    return str
      .split('')
      .reduce(
        (acc, letter, i) =>
          acc.concat(stringPermutations(str.slice(0, i) + str.slice(i + 1)).map(val => letter + val)),
        []
      );
  };
//calling the stringPermutations to calculate the permutations
let allPermutations = stringPermutations("123456789")
function generateRandomGrid() {
   
    let randomNumber = Math.floor(Math.random() * (9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1))

    let splitPermutation = allPermutations[randomNumber].split("")

    let returnArray = []
    let count = 0
    for (let i = 0; i < 3; i++) {
        let newArray = []
        for (let j = 0; j < 3; j++) {
            newArray.push(Number(splitPermutation[count]))
            count++
        }
        returnArray.push(newArray)
    }

    return returnArray
}
/**
 * this is helper function to call the generateRandomGrid for generating grid
 * and checking is that grid is magicgrid or not by calling isMagicBox function
 * @returns boolean true or false
 */
function findAndPrintRandomMagicSquare() {
    while (true) {
        let grid = generateRandomGrid()
        if (isMagicBox(grid)) {
            return grid
        }
    }
}
/**
 * this is main function to call the helping functions
 */
function main(){
    let magicSquare = findAndPrintRandomMagicSquare()
    console.log("Random Magic Square:")
    displayGrid(magicSquare)

}

main() //calling main function