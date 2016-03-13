import _ from 'lodash';
export default function(state = null, action) {
  // State argument is not the application state only the state this reducer is responsible for
  console.log(action.type)
  switch(action.type) {
    case 'BOARD_CREATED':
      return action.payload
    case 'SQUARE_CLICKED':


      //////////////// Check Horizontal win  //////////////////////
          // If gameClickCount === gameLength * 2
            // _.find(state.rows, function(val) {});
      //////////////// Check horizontal win //////////////////////
      
      ////////////// Check if already clicked ////////////////
      if (state.winner) {
        alert('Please start a new game')
        return state;
      }  
      if (state.tie) {
        alert('please start a new game');
        return state;
      }
      if (action.payload.value) {
        console.log('Click somewhere else', state.rows)

        return state
      } 

      

      ////////////// Check if already clicked ////////////////

      
      let newRows = state.rows.map((val) => val);   
      let newCols = state.columns.map((val) => val);
      let newDiags = state.diagonals.map((val) => val);
      let piece = '';
      let count = state.clickCount + 1;
      let square = action.payload;
      let row = square.parentNode;
      let squareId = Number(square.id);
      let rowId = Number(row.id);
      let currentRow = newRows[rowId];
      
      let currentSquare = currentRow.squares[squareId];
      let currentCol = newCols[squareId];



      let positive = newDiags[1].positive;
      let negative =newDiags[0].negative;
      

      currentSquare.gamePiece = state.currentPiece;



      let middleSquare = Math.floor(state.size / 2);
      // console.log('middleSquare: ', middleSquare)
      // console.log('Game row: ', rowId);
      // console.dir(row);      
      // console.log('Game square: ', squareId);
      // console.dir(square);
      // console.log('SQ state', state)

      ////////////// Set Current Game Pieces ////////////////
      
     

      if (state.clickCount % 2 === 0) {
        currentCol.X_count++;
        currentRow.X_count++;
        piece = 'O';
        
        if (rowId === squareId) {
          negative.X_count++;
          negative.elements[squareId] = square;
        } 
        if (rowId + squareId === state.size - 1) {
          positive.X_count++;
          positive.elements.push(square);
        }
      } else if (state.clickCount % 2 !== 0) {
        currentCol.O_count++;
        currentRow.O_count++;
        piece = 'X';
        
        if (rowId === squareId) {
          negative.O_count++;
          negative.elements.push(square);
          console.log(newDiags[0].negative);
        } 
        if (rowId + squareId === state.size - 1) {
          positive.O_count++;
          positive.elements.push(square);
        }
      }

      let newPayload = Object.assign({}, state, {
        clickCount: count,
        currentPiece: piece,
        rows: newRows,
        columns: newCols,
        diagonals: newDiags
      });

      ////////////// Set Current Game Pieces ////////////////

      const catsGame = (state = null) => {
        state.tie = true;
        alert('cat\'s game' );        
        return state;
      }
      // console.log(newDiags[0])
      /////////// Horizontal Win /////////////////////
      if (state.clickCount === (state.size * state.size) + 1) {
        return catsGame(newPayload);
      }

      if (state.clickCount >= (state.size * 2)) {
        let checkHorXWin= _.find(newRows, (row) => { return row.X_count === row.length || row.O_count === row.length});
        
        if (state.clickCount === (state.size * state.size) + 1) {
          newPayload.tie = true;
          console.log(newPayload.tie)
          alert('cat\'s game' );
          
          return newPayload;
        }
        
        if (checkHorXWin) {
          newPayload.winner = true;
          row.classList.add('game-winner');
          alert('X wins!');
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

      ////////////// Diagonal Win ////////////////////
        // Negative diagnonal
          // If rowId === squareId increment negDiagX_count
      
        // Positive diagonal
      if (state.clickCount >= (state.size * 2)) {
        let negative = newPayload.diagonals[0].negative;
        let positive = newPayload.diagonals[1].positive;
        let middleSquare = Math.floor(state.size / 2);
        // if (negative.elements.length === state.size) {
        if (negative.X_count === negative.length || negative.O_count === negative.length ) {
          negative.elements.forEach((el) => el.classList.add('game-winner'));
          newPayload.winner = true;
          alert('Win')
          console.log(newPayload)
          return newPayload;
        }
        if ((positive.X_count === positive.length || positive.O_count === positive.length) ) {
          positive.elements.forEach((el) => el.classList.add('game-winner'));
          newPayload.winner = true;
          alert('Win')
          console.log(newPayload)
          return newPayload;
        }
      }
      ////////////// Diagonal Win ////////////////////


      // console.log(newRows);
      
      // console.log('SQ action', action)

      return newPayload;
  }
  return state;
}
