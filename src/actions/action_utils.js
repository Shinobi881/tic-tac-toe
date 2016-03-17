// export const resetWin = () => {
//   let rows = document.getElementsByTagName('tr');
//   let squares = document.getElementsByTagName('td');
//   console.log(rows);
//   rows.classList.remove('game-winner');
//   squares.classList.remove('game-winner');
// };

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