import _ from 'lodash';
import deepFreeze from 'deep-freeze';
import * as utils from './reducer_utils';



export default function(state = null, action) {
  switch(action.type) {
    case 'BOARD_CREATED':
      return action.payload;
    case 'SQUARE_CLICKED':

      ////////////// Check if already clicked ////////////////
      if (state.winner) {
        alert('Please start a new game');
        return state;
      }  
      if (state.tie) {
        alert('please start a new game');
        return state;
      }
      if (action.payload.value) {
        console.log('Click somewhere else', state.rows);

        return state;
      } 

      // State data for win checks
      let count = state.clickCount + 1;
      let piece = '';
      let newEls = utils.elUtil(action);
      const stateMod = utils.stateUtil(state, newEls);

      // deepFreeze(state); // Why are you not working?
      
      // Checking the click to see which piece is which
      if (state.clickCount % 2 === 0) {
        let currentCol = stateMod.currentCol;
        let currentRow = stateMod.currentRow;
        
        piece = 'O';
        utils.incrementCount(currentCol, currentRow, utils.gp('X'));       
        utils.checkDiags(stateMod, newEls, 'X');
      } else if (state.clickCount % 2 !== 0) {
        let currentCol = stateMod.currentCol;
        let currentRow = stateMod.currentRow;
        
        piece = 'X';        
        utils.incrementCount(currentCol, currentRow, utils.gp('O'));
        utils.checkDiags(stateMod, newEls, 'O');
      }

      // The modified state to return (will rename newState )
      let newState = {
        ...state,
        clickCount: count,
        currentPiece: piece,
        rows: stateMod.newRows,
        columns: stateMod.newCols,
        diagonals: stateMod.newDiags
      };
      
      // Check for a win 
      if (state.clickCount >= (state.size * 2)) {
        if (state.clickCount === (state.size * state.size) + 1) {
          return utils.catsGame(newState);
        }        
        utils.checkHorzWin(stateMod, newState, newEls);
        utils.checkVertWin(stateMod, newState, newEls);
        utils.diagonalWinChecker(stateMod, newState, 'negative');
        utils.diagonalWinChecker(stateMod, newState, 'positive');
      }
      
      // console.log('SQ state', state)
      // console.log('SQ action', action)

      return newState;
  }
  return state;
}
