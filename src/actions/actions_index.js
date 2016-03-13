import _ from 'lodash';

export const SQUARE_CLICKED = 'SQUARE_CLICKED';
export const GET_BOARD_SIZE = 'GET_BOARD_SIZE';
export const MAKE_ROWS = 'MAKE_ROWS';
export const MAKE_BOARD = 'MAKE_BOARD';
export const INITIAL_STATE = 'INITIAL_STATE';


//////////////////// BOARD HELPERS ///////////////
const makeSquare = (position) => {
  return {
    position: position,
    gamePiece: ''
  };
}

const rowCreator = (num, callback) => {
  return _.times(num, (i) => callback(i));
}
////////////////////////////////////////////////////

const makeRows = (rowSize) => {
  return {
    squares: rowCreator(rowSize, makeSquare), 
    index: 0, rowClickCount: 0,
    count: 0, length: 0,
    X_count: 0, O_count: 0
  };
};

const resetWin = () => {
  let rows = document.getElementsByTagName('tr');
  let squares = document.getElementsByTagName('td');
  console.log(rows);
  rows.classList.remove('game-winner');
  squares.classList.remove('game-winner');
};

const boardCreator = () => {

};


function makeBoard(rowCreator, boardSize = null) {
  boardSize = Number(boardSize);

  let board = {
    rows: [], currentPiece: 'X',
    size: boardSize, tie: false,
    clickCount: 2, winner: false,
  };  

  board.diagonals = [
    {
      negative: {
        elements: [], X_count: 0,
        O_count: 0, length: boardSize        
      }
    },    
    {
      positive: {
        elements: [], X_count: 0,
        O_count: 0, length: boardSize
      }
    }
  ];

  board.columns = _.times(boardSize, (i) => {
    return {
      position: i, piece: '',
      elements: [], X_count: 0,
      O_count: 0, length: boardSize
    };    
  });
      
  
  // console.log(board.columns);

  for (var i = 0; i < boardSize; i++) {
    let newRow = rowCreator(boardSize);
    
    newRow.index = i;
    newRow.length = boardSize;
    board.rows.push(newRow);
  }

  board.rows = _.times(boardSize, (i) => {
    let newRow = rowCreator(boardSize);    
    
    newRow.index = i;
    newRow.length = boardSize;
    board.rows.push(newRow);
    
    return newRow;
  });
  
  return {
    type: MAKE_BOARD,
    payload: board
  }
}

function initialState() {  
  let test = makeBoard(makeRows, 3);

  return {
    type: INITIAL_STATE,
    payload: test
  };
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
