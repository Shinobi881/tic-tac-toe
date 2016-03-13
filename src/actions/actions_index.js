import _ from 'lodash';

export const SQUARE_CLICKED = 'SQUARE_CLICKED';
export const GET_BOARD_SIZE = 'GET_BOARD_SIZE';
export const MAKE_ROWS = 'MAKE_ROWS';
export const MAKE_BOARD = 'MAKE_BOARD';
export const INITIAL_STATE = 'INITIAL_STATE';


//////////////////// BOARD HELPERS ///////////////
function makeSquare1 (position) {
  return {
    position: position,
    gamePiece: ''
  };
}

function makeSquare2 (position) {
  return [position, ''];  
}

function rowCreator(num, callback) {
  let row = [];
  
  for (var i = 0; i < num; i++) {
    row.push(callback(i));
  }
  return row;
}

////////////////////////////////////////////////////

function makeRows(rowSize) {

  let row1 = rowCreator(rowSize, makeSquare1);
  let row2 = rowCreator(rowSize, makeSquare2);

  // console.log('newRow1', row1)
  // console.log('newRow2', row2)  

  return {
    squares: rowCreator(rowSize, makeSquare1), 
    index: 0, rowClickCount: 0,
    count: 0, length: 0,
    num_X: 0, num_O: 0
  };
}

function makeBoard(rowCreator, boardSize = 3) {
  let board = {
    rows: [],
    winner: false,
    size: boardSize
  };
  board.rows = [];
  board.winner = false;
  board.clickCount = 2;
  board.currentPiece = 'X';
  
  for (var i = 0; i < boardSize; i++) {
    let newRow = rowCreator(boardSize);
    
    newRow.index = i;
    newRow.length = boardSize;
    board.rows.push(newRow);
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


  return {
    type: SQUARE_CLICKED,
    payload: square
  }
}

export {makeRows, makeBoard, getBoardSize, squareClick, initialState}
