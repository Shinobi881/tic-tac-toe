
export const SQUARE_CLICKED = 'SQUARE_CLICKED';
export const MAKE_BOARD = 'MAKE_BOARD';
export const MAKE_ROWS = 'MAKE_ROWS';

const board_size_input = 3;

function makeRows(rowSize) {
  let rowData = {
    row: [], index: 0,
    count: 0, length: 0,
    num_X: 0, num_O: 0
  };  

  for (var i = 0; i < rowSize; i++) {
     rowData.row.push([i, '']);
  }

  return rowData;
}


  
function makeBoard(rowCreator, boardSize) {
  let board = [];
  
  for (var i = 0; i < boardSize; i++) {
    let newRow = rowCreator(boardSize);
    
    newRow.index = i;
    newRow.length = boardSize;
    board.push(newRow);
  }
  
  console.dir(board);
  return {
    type: MAKE_BOARD,
    payload: board
  }
}

function squareClick(square) {
  return {
    type: SQUARE_CLICKED,
    payload: square
  }
}

export {makeRows, makeBoard, squareClick}
