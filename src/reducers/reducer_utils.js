import _ from 'lodash';

// Copies the current state modifies it and returns 
export const stateUtil = (input, el) => {
  const newState = {...input};
  const newDiags = newState.diagonals.map((val) => val),
        newRows = newState.rows.map((val) => val),
        newCols = newState.columns.map((val) => val),        
        currentRow = newRows[el.rowId],
        currentCol = newCols[el.squareId],
        currentSquare = currentRow.squares[el.squareId];
        
        currentSquare.gamePiece = newState.currentPiece;              
  
  return {
    positive: newDiags[1].positive, currentRow: newRows[el.rowId],
    negative: newDiags[0].negative, currentCol: newCols[el.squareId],
    newRows: newRows, newCols: newCols, newDiags: newDiags, 
    size: newState.size, count: newState.clickCount + 1         
  };
}

// Handles the data of the element(s) that were clicked
export const elUtil = (load) => {
  let squareEl = load.payload;
  let rowEl = squareEl.parentNode;

  return {
    square: squareEl,
    row: rowEl,
    squareId: Number(squareEl.id),
    rowId: Number(rowEl.id),
  }
}

// Just a simple help, largely useless
export const gp = piece => piece += '_count';

// Increments the X or O count
export const incrementCount = (thing1, thing2, type) => {
  thing1[type]++;
  thing2[type]++;
}

// Process negative diagonals
export const handleNegDiags = (thing1, arr, type) => {
  thing1[type]++;
  thing1.elements[arr[1]] = arr[0];
}

// Process positive diagonals
export const handlePosDiags = (thing1, el, type) => {
  thing1[type]++;
  thing1.elements.push(el);
}

// Checks for diagonal clicks and processes them 
export const checkDiags = (state, els, piece) => {
  if (els.rowId === els.squareId) {
    handleNegDiags(state.negative, [els.square, els.squareId], gp(piece));
  }
  if (els.rowId + els.squareId === state.size - 1) {
    handlePosDiags(state.positive, els.square, gp(piece));
  }         
}

// Cat's game function
export const catsGame = (state = null) => {
  state.tie = true;
  alert('cat\'s game' );        
  return state;
}

// Check Horizontal win scenarios
export const checkHorzWin = (state, newLoad, els) => {
        // console.log(state)        
  let checkWin = _.find(state.newRows, (row) => { 
    let XHWin = row.X_count === row.length;
    let OHWin = row.O_count === row.length;
    return XHWin || OHWin
  });

  if (checkWin) {
    newLoad.winner = true;
    els.row.classList.add('game-winner');
    alert('WINNER!');
    return newLoad;
  }
}

// Vertical win function
export const checkVertWin = (state, newLoad, els) => {
  // console.log(state)        
  let checkWin = _.find(state.newCols, (col) => { 
    let XVWin = col.X_count === col.length;
    let OVWin = col.O_count === col.length;
    return XVWin || OVWin; 
  });
  
  if (checkWin) {
    let winningColumn = document
        .getElementsByClassName('col-' + els.square.id);

    _.times(winningColumn.length, (i) => {
      winningColumn[i].classList.add('game-winner');
    })

    newLoad.winner = true;
    alert('WINNER!')
    console.log('Vert newLoad',  newLoad)
    return newLoad;
  }
}

// Checks for and processes a diagonal win scenario
export const diagonalWinChecker = (state, newLoad, direction) => {
  let dObj = {},
      negDiagWin = newLoad.diagonals[0][direction],
      posDiagWin = newLoad.diagonals[1][direction];
  
  dObj[direction] = direction === 'negative' ? negDiagWin : posDiagWin;
  
  let XDiagWin = dObj[direction].X_count === dObj[direction].length,
      ODiagWin = dObj[direction].O_count === dObj[direction].length;  

  if (XDiagWin || ODiagWin ) {
    dObj[direction].elements.forEach((el) => el.classList.add('game-winner'));
    newLoad.winner = true;
    alert('WINNER')
    return newLoad;
  }
}

// Check if a square is playable
export const checkState = (stateObj, actionLoad) => {
  // We already have a winner, start a new game
  if (stateObj.winner) {
    alert('Please start a new game!');
    return stateObj;
  }  else if (stateObj.tie) {
    alert('Please start a new game!');
    return stateObj;
  } else if (actionLoad.value) {
    console.log('Please choose another square!', stateObj.rows);

    return stateObj;
  } else {
    return stateObj;
  }
}


