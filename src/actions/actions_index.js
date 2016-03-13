import _ from 'lodash';

export const SQUARE_CLICKED = 'SQUARE_CLICKED';
export const GET_BOARD_SIZE = 'GET_BOARD_SIZE';
export const MAKE_ROWS = 'MAKE_ROWS';
export const MAKE_BOARD = 'MAKE_BOARD';
export const INITIAL_STATE = 'INITIAL_STATE';


//////////////////// BOARD HELPERS ///////////////
const createSquares = (position) => {
  return {
    position: position,
    gamePiece: ''
  };
}

////////////////////////////////////////////////////

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

// board.rows = _.times(boardSize, (i) => {
//     let newRow = rowCreator(boardSize);    
    
//     newRow.index = i;
//     newRow.length = boardSize;
//     board.rows.push(newRow);
    
//     return newRow;
//   });

const resetWin = () => {
  let rows = document.getElementsByTagName('tr');
  let squares = document.getElementsByTagName('td');
  console.log(rows);
  rows.classList.remove('game-winner');
  squares.classList.remove('game-winner');
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



// function makeBoard(rowCreator, boardSize = null) {
function makeBoard(board = null) {
  // console.log(board)
  // boardSize = Number(boardSize);

  // let board = {
  //   rows: [], currentPiece: 'X', size: boardSize, 
  //   tie: false, clickCount: 2, winner: false
  // };  

  // board.diagonals = [
  //   {
  //     negative: {
  //       elements: [], X_count: 0,
  //       O_count: 0, length: boardSize        
  //     }
  //   },    
  //   {
  //     positive: {
  //       elements: [], X_count: 0,
  //       O_count: 0, length: boardSize
  //     }
  //   }
  // ];

  // board.columns = _.times(boardSize, (i) => {
  //   return {
  //     position: i, piece: '', elements: [], 
  //     X_count: 0, O_count: 0, length: boardSize
  //   };    
  // });

  // board.rows = createRows(boardSize);
  // console.log(board.rows)

  // board.rows = _.times(boardSize, (i) => {
  //   let newRow = rowCreator(boardSize);    
    
  //   newRow.index = i;
  //   newRow.length = boardSize;
  //   board.rows.push(newRow);
    
  //   return newRow;
  // });
  
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

export { makeRows, makeBoard, getBoardSize, squareClick, initialState, createBoard }
