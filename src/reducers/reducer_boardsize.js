// function makeRows(rowSize) {

//   // let row1 = rowCreator(rowSize, makeSquare1);
//   let row2 = rowCreator(rowSize, makeSquare2);

//   // console.log('newRow1', row1)
//   // console.log('newRow2', row2)  

//   return {
//     row: rowCreator(rowSize, makeSquare2), 
//     index: 0,
//     count: 0, length: 0,
//     num_X: 0, num_O: 0
//   };
// }

// function makeSquare2 (position) {
//   return [position, ''];  
// }

// function rowCreator(num, callback) {
//   let row = [];
  
//   for (var i = 0; i < num; i++) {
//     row.push(callback(i));
//   }
//   return row;
// }

// function makeBoard(rowCreator, boardSize) {
//   let board = [];
  
//   for (var i = 0; i < boardSize; i++) {
//     let newRow = rowCreator(boardSize);
    
//     newRow.index = i;
//     newRow.length = boardSize;
//     board.push(newRow);
//   }
  
//   return board
// }

// export default function(state = null, action) {
//   return makeBoard(3);
// }