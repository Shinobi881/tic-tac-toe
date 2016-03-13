export default function(state = null, action) {
  // State argument is not the application state only the state this reducer is responsible for
  console.log(action.type)
  switch(action.type) {
    case 'MAKE_BOARD':
      return action.payload
    case 'SQUARE_CLICKED':
      if (action.payload.value) {
        console.log('Click somewhere else', state)
        return state
      }

      let newRows = state.rows.map((val) => val);
      
      let piece = 'X'
      let count = state.clickCount + 1;
      let square = action.payload;
      let row = square.parentNode;
      let squareId = Number(square.id);
      let rowId = Number(row.id);

      let currentRow = newRows[rowId]

      console.log('Current row: ', currentRow.squares[squareId])

      newRows[rowId].squares[squareId].gamePiece = state.currentPiece;

      console.log('Game square: ', squareId);
      console.dir(square);
      console.log('Game row: ', rowId);
      console.dir(row);
      
      // console.log('SQ state', state)
      if (state.clickCount % 2 !== 0) {
        piece = 'O';
      } else if (state.clickCount % 2 === 0) {
        piece = 'X';
      }
      console.log('SQ action', action)

      return Object.assign({}, state, {
        clickCount: count,
        currentPiece: piece,
        rows: newRows

      })
  }
  return state;
}
