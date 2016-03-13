export default function(state = null, action) {
  // State argument is not the application state only the state this reducer is responsible for
  console.log(action.type)
  switch(action.type) {
    case 'MAKE_BOARD':
      return action.payload
    case 'SQUARE_CLICKED':
    








      //////////////// Check win //////////////////////
              // Check win function here
      //////////////// Check win //////////////////////
      
      ////////////// Check if already clicked ////////////////

      if (action.payload.value) {
        console.log('Click somewhere else', state.rows)

        return state
      }

      ////////////// Check if already clicked ////////////////

      
      let newRows = state.rows.map((val) => val);      
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
        currentRow.X_count++;
        piece = 'O';
      } else if (state.clickCount % 2 !== 0) {
        currentRow.O_count++;
        piece = 'X';
      }
      console.log(newRows);
      
      ////////////// Set Current Game Pieces ////////////////
      // console.log('SQ action', action)

      return Object.assign({}, state, {
        clickCount: count,
        currentPiece: piece,
        rows: newRows

      })
  }
  return state;
}
