import _ from 'lodash';

import ACTIONS from './action_types';


//////////////////// BOARD HELPERS ///////////////
const createSquares = (position) => {
  return {
    position: position,
    gamePiece: ''
  };
}

const makeRows = (rowSize) => {
  return {
    squares: _.times(rowSize, (i) => createSquares(i)), index: 0, 
    rowClickCount: 0, count: 0, length: 0, X_count: 0, O_count: 0
  };
};

const createRows = (rowSize) => {
  return _.times(rowSize, (i) => {
    return {
      squares: _.times(rowSize, (j) => createSquares(j)), index: i, 
      rowClickCount: 0, count: 0, length: rowSize, X_count: 0, O_count: 0
    };
  })
};



const createColumns = (colSize) => {
  return _.times(colSize, (i) => {
    return {
      position: i, piece: '', elements: [], 
      X_count: 0, O_count: 0, length: colSize
    }; 
  });
}

const createDiagonals = (diagSize) => {
  return [
    { negative: { elements: [], X_count: 0, O_count: 0, length: diagSize } },    
    { positive: { elements: [], X_count: 0, O_count: 0, length: diagSize } }
  ];
}

const createBoard = (boardSize = null) => {
  boardSize = Number(boardSize);
  return {
    currentPiece: 'X', size: boardSize, tie: false, clickCount: 2, winner: false,
    columns: createColumns(boardSize), diagonals: createDiagonals(boardSize),
    rows: createRows(boardSize)
  };  
};


const resetWin = () => {
  let rows = document.getElementsByTagName('tr');
  let squares = document.getElementsByTagName('td');
  console.log(rows);
  rows.classList.remove('game-winner');
  squares.classList.remove('game-winner');
};



function initialState() {  
  let test = makeBoard(makeRows, 3);

  return {
    type: INITIAL_STATE,
    payload: test
  };
}
function getBoardSize(size) {
  return {
    type: ACTIONS.GET_BOARD_SIZE,
    payload: size
  }
}

function boardCreated(board = null) {  
  return {
    type: ACTIONS.BOARD_CREATED,
    payload: board
  }
}

function squareClick(square) {
  return {
    type: ACTIONS.SQUARE_CLICKED,
    payload: square
  }
}

export { makeRows, boardCreated, getBoardSize, squareClick, initialState, createBoard }
