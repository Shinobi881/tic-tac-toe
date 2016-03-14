import _ from 'lodash';
import * as utils from './reducer_utils';



export default function(state = null, action) {
  // State argument is not the application state only the state this reducer is responsible for
  // console.log(action.type)
  console.dir(utils)
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
      let positive = newDiags[1].positive;
      let negative = newDiags[0].negative;
      
      let count = state.clickCount + 1;
      let piece = '';

      
      let square = action.payload;
      let row = square.parentNode;
      
      let squareId = Number(square.id);
      let rowId = Number(row.id);
      
      let currentRow = newRows[rowId];
      let currentCol = newCols[squareId];
      let currentSquare = currentRow.squares[squareId];
      

      Object.freeze(state);
      currentSquare.gamePiece = state.currentPiece;

      const nextState = (state) => {
        const newDiags = state.diagonals.map((val) => val);
        
        return {
          newRows: state.rows.map((val) => val),
          newCols: state.columns.map((val) => val),
          positive: newDiags[1].positive,
          negative: newDiags[0].negative,
          count: state.clickCount + 1,
          newDiags: newDiags,
          size: state.size
        }
      }

      const stateMod = Object.freeze(nextState(state));


      const handleEl = (load) => {
        let squareEl = load.payload;
        let rowEl = squareEl.parentNode;

        return {
          square: squareEl,
          row: rowEl,
          squareId: Number(squareEl.id),
          rowId: Number(rowEl.id),
        }
      }

      let newEls = handleEl(action);

      // Check whether a click is a diagonal click
      const checkDiags = (state, els, piece) => {
        if (els.rowId === els.squareId) {
          utils.handleNegDiags(state.negative, [square, squareId], utils.gp(piece));
        }
        if (els.rowId + els.squareId === state.size - 1) {
          utils.handlePosDiags(positive, square, utils.gp(piece));
        }        
      }

      // Checking the click to see which piece is which
      if (state.clickCount % 2 === 0) {
        piece = 'O';
        utils.incrementCount(currentCol, currentRow, utils.gp('X'));       
        utils.checkDiags(stateMod, newEls, 'X');
      } else if (state.clickCount % 2 !== 0) {
        piece = 'X';        
        utils.incrementCount(currentCol, currentRow, utils.gp('O'));
        utils.checkDiags(stateMod, newEls, 'O');
      }

      // The modified state to return (will rename newState )
      let newPayload = Object.assign({}, state, {
        clickCount: count,
        currentPiece: piece,
        rows: newRows,
        columns: newCols,
        diagonals: newDiags,

      });

      
      // Check for a win 
      if (state.clickCount >= (state.size * 2)) {
        if (state.clickCount === (state.size * state.size) + 1) {
          return utils.catsGame(newPayload);
        }        
        utils.checkHorzWin(stateMod, newPayload, newEls);
        utils.checkVertWin(stateMod, newPayload, newEls);
        utils.diagonalWinChecker(stateMod, newPayload, 'negative');
        utils.diagonalWinChecker(stateMod, newPayload, 'positive');
      }
      
      // console.log('SQ state', state)
      // console.log('SQ action', action)

      return newPayload;
  }
  return state;
}
