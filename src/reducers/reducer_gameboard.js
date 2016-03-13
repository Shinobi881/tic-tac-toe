export default function(state = null, action) {
  // State argument is not the application state only the state this reducer is responsible for
  console.log(action.type)
  switch(action.type) {
    case 'MAKE_BOARD':
      return action.payload
    case 'SQUARE_CLICKED':
    








      //////////////// Check Horizontal win  //////////////////////
          // If gameClickCount === gameLength * 2
            // _.find(state.rows, function(val) {});
      //////////////// Check horizontal win //////////////////////
      
      ////////////// Check if already clicked ////////////////

      if (action.payload.value) {
        console.log('Click somewhere else', state.rows)

        return state
      } else if (state.winner) {
        alert('Please start a new game')
        return state;
      }

      ////////////// Check if already clicked ////////////////

      
      let newRows = state.rows.map((val) => val);   
      let newCols = state.columns.map((val) => val);  
      let piece = '';
      let count = state.clickCount + 1;
      let square = action.payload;
      let row = square.parentNode;
      let squareId = Number(square.id);
      let rowId = Number(row.id);
      let currentRow = newRows[rowId];
      let currentSquare = currentRow.squares[squareId]

      

      /////////// Tally Game Pieces /////////////////
      //   console.log(square.valueOf())
      //   console.dir(square)
      // if (square.value === 'X') {
      //   console.log(newRows[rowId].X_count)
      //   newRows[rowId].X_count++;
      // } else if (square.value === 'O') {
      //   newRows[rowId].O_count++;
      // }

      // console.log('Current row: ', newRows[rowId])
      /////////// Tally Game Pieces /////////////////

      currentSquare.gamePiece = state.currentPiece;

      // console.log('Game square: ', squareId);
      // console.dir(square);
      // console.log('Game row: ', rowId);
      // console.dir(row);      
      // console.log('SQ state', state)

      ////////////// Set Current Game Pieces ////////////////
      
      if (state.clickCount % 2 === 0) {
        newCols[squareId].X_count++;
        currentRow.X_count++;
        piece = 'O';
      } else if (state.clickCount % 2 !== 0) {
        newCols[squareId].O_count++;
        currentRow.O_count++;
        piece = 'X';
      }

      let newPayload = Object.assign({}, state, {
        clickCount: count,
        currentPiece: piece,
        rows: newRows,
        columns: newCols

      })

      ////////////// Set Current Game Pieces ////////////////

      
      /////////// Horizontal Win /////////////////////
      if (state.clickCount >= (state.size * 2)) {
        let checkHorXWin= _.find(newRows, (row) => { return row.X_count === row.length || row.O_count === row.length});
        
        if (checkHorXWin) {
          newPayload.winner = true;
          alert('X wins!');
          row.classList.add('game-winner');
          console.log(row)
          return newPayload;
        }

      }
      ////////////// Horizontal Win //////////////////
      
      ////////////// Vertical Win ////////////////////
      if (state.clickCount >= (state.size * 2)) {
        let checkVertWin = _.find(newCols, (col) => { return col.X_count === col.length || col.O_count === col.length });
        if (checkVertWin) {
          let winningColumn = document.getElementsByClassName('col-' + square.id);
          for (let i = 0; i < winningColumn.length; i++) {
            winningColumn[i].classList.add('game-winner');
          }
          newPayload.winner = true;
          alert('Win')
          console.log(newPayload)
          return newPayload;
        }
      }
      console.log('SQ state', state)
      ////////////// Vertical Win ////////////////////

      // console.log(newRows);
      
      // console.log('SQ action', action)

      return newPayload;
  }
  return state;
}
