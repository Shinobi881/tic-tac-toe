import _ from 'lodash';
import ACTIONS from './action_types';

// Dispatch the initial state action
export const initialState = () => {  
  let test = makeBoard(makeRows, 3);

  return {
    type: INITIAL_STATE,
    payload: test
  };
};

// Dispatch the user input action
export const getBoardSize = (size = 3) => {
  return {
    type: ACTIONS.GET_BOARD_SIZE,
    payload: size
  };
};

// Dispatch the board created event
export const boardCreated = (board = null) => {  
  return {
    type: ACTIONS.BOARD_CREATED,
    payload: board
  };
};

// Dispatch the square click event
export const squareClick = (square) => {
  return {
    type: ACTIONS.SQUARE_CLICKED,
    payload: square
  };
};

export const checkPlayCount = (state) => {
  return {
    type: ACTIONS.CHECK_PLAY_COUNT,
    payload: state
  }
}

export const checkWin = (state) => {
  return {
    type: ACTIONS.CHECK_WIN,
    payload: state
  }
}

export const xWinner = (state) => {
  return {
    type: ACTIONS.X_WINNER,
    payload: state
  }
}

export const oWinner = (state) => {
  return {
    type: ACTIONS.O_WINNER,
    payload: state
  }
}

// Data for each game square
export const createSquares = (position) => {
  return {
    position: position,
    gamePiece: ''
  };
};


export const createRows = (rowSize) => {
  return _.times(rowSize, (i) => {
    return {
      squares: _.times(rowSize, (j) => createSquares(j)), index: i, 
      rowClickCount: 0, count: 0, length: rowSize, X_count: 0, O_count: 0
    };
  });
};


// Data for gameboard columns
export const createColumns = (colSize) => {
  return _.times(colSize, (i) => {
    return {
      position: i, piece: '', elements: [], 
      X_count: 0, O_count: 0, length: colSize
    }; 
  });
};

// Data for gameboard diagonals
export const createDiagonals = (diagSize) => {
  return [
    { negative: { elements: [], X_count: 0, O_count: 0, length: diagSize } },    
    { positive: { elements: [], X_count: 0, O_count: 0, length: diagSize } }
  ];
};

// Creates data for the whole gameboard
export const createBoard = (boardSize = null) => {
  boardSize = Number(boardSize);
  return {
    currentPiece: 'X', size: boardSize, tie: false, clickCount: 2, winner: false,
    columns: createColumns(boardSize), diagonals: createDiagonals(boardSize),
    rows: createRows(boardSize)
  };  
};

export const resetWin = () => {
  let rows = document.getElementsByTagName('tr');
  let squares = document.getElementsByTagName('td');
  
  _.forEach(rows, (row) => {
    row.classList.remove('game-winner');    
  });

  _.forEach(squares, (square) => {
    square.classList.remove('game-winner');    
  });
};

