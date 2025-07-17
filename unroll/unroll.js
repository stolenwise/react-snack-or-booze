// Unroll the Square Array
// Result should be [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]

function unroll(squareArray) {
    let newArray = [];

    // Top row
    newArray.push(...squareArray.shift());

    //right column
    for (let row of squareArray) {
        if (row.length) newArray.push(row.pop());
    }

    //bottom row (reversed)
    if (squareArray.length) {
        newArray.push(...squareArray.pop().reverse());
    }

    //left column (reversed)
    for (let i = squareArray.length -1; i >= 0; i--) {
        if (squareArray[i].length) newArray.push(squareArray[i].shift());
    }

    //recursive call
    if (squareArray.length) {
        newArray.push(...unroll(squareArray));
    }


    return newArray;
}

const square = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
  ];

  console.log(unroll(square));

module.exports = unroll;
