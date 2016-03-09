export const SQUARE_CLICKED = 'SQUARE_CLICKED';
export const GET_BOARD_SIZE = 'GET_BOARD_SIZE';
export const MAKE_ROWS = 'MAKE_ROWS';
export const MAKE_BOARD = 'MAKE_BOARD';
export const INITIAL_STATE = 'INITIAL_STATE';

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
  
  return {
    type: MAKE_BOARD,
    payload: board
  }
}

function initialState() {  
  let test = makeBoard(makeRows, 3)

  return {
    type: INITIAL_STATE,
    payload: test
  }
}
function getBoardSize(size) {
  return {
    type: GET_BOARD_SIZE,
    payload: size
  }
}

function squareClick(square) {
  console.log(square)
  return {
    type: SQUARE_CLICKED,
    payload: square
  }
}

export {makeRows, makeBoard, getBoardSize, squareClick, initialState}
