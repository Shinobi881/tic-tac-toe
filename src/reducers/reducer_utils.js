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

export const gp = piece => piece += '_count';

export const incrementCount = (thing1, thing2, type) => {
  thing1[type]++;
  thing2[type]++;
}

export const handleNegDiags = (thing1, arr, type) => {
  thing1[type]++;
  thing1.elements[arr[1]] = arr[0];
}

export const handlePosDiags = (thing1, el, type) => {
  thing1[type]++;
  thing1.elements.push(el);
}



export const checkDiags = (state, els, piece) => {
  if (els.rowId === els.squareId) {
    handleNegDiags(state.negative, [els.square, els.squareId], gp(piece));
  }
  if (els.rowId + els.squareId === state.size - 1) {
    handlePosDiags(state.positive, els.square, gp(piece));
  }         
}

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
    alert('Winner!');
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
    
    for (let i = 0; i < winningColumn.length; i++) {
      winningColumn[i].classList.add('game-winner');
    }

    newLoad.winner = true;
    alert('Win')
    console.log('Vert newLoad',  newLoad)
    return newLoad;
  }
}

export const diagonalWinChecker = (state, newLoad, direction) => {
  let dObj = {};
  dObj[direction] = direction === 'negative' ? newLoad.diagonals[0][direction] : newLoad.diagonals[1][direction];

  if (dObj[direction].X_count === dObj[direction].length || dObj[direction].O_count === dObj[direction].length ) {
    dObj[direction].elements.forEach((el) => el.classList.add('game-winner'));
    newLoad.winner = true;
    alert('Win')
    console.log(newLoad)
    return newLoad;
  }
}


