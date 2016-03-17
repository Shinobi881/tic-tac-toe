import _ from 'lodash';
import deepFreeze from 'deep-freeze';
import * as redUtils from './reducer_utils';
import * as actUtils from '../actions/action_utils';



export default (state = null, action) => {
  switch(action.type) {
    case 'BOARD_CREATED':
      return action.payload;
    case 'SQUARE_CLICKED':

      ////////////// Check if already clicked ////////////////
      redUtils.checkState(state, action.payload);

      //     console.log(state);
      // // There's already a winner
      // if (state.winner) {
      //   alert('Please start a new game');
      //   return state;
      // }  

      // // Cat's game! Start a new one!
      // if (state.tie) {
      //   alert('please start a new game');
      //   return state;
      // }

      // // You already played this square
      // if (action.payload.value) {
      //   console.log('Click somewhere else', state.rows);
      //   return state;
      // } 

      

      // State data for win checks
      let count = state.clickCount + 1;
      let piece = '';
      let newEls = redUtils.elUtil(action);
      const stateMod = redUtils.stateUtil(state, newEls);

      // deepFreeze(state); // Why are you not working?
      
      // Checking the click to see which piece is which
      if (state.clickCount % 2 === 0) {
        let currentCol = stateMod.currentCol;
        let currentRow = stateMod.currentRow;
        
        piece = 'O';
        redUtils.incrementCount(currentCol, currentRow, redUtils.gp('X'));       
        redUtils.checkDiags(stateMod, newEls, 'X');
      } else if (state.clickCount % 2 !== 0) {
        let currentCol = stateMod.currentCol;
        let currentRow = stateMod.currentRow;
        
        piece = 'X';        
        redUtils.incrementCount(currentCol, currentRow, redUtils.gp('O'));
        redUtils.checkDiags(stateMod, newEls, 'O');
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
          return redUtils.catsGame(newState);
        }        
        redUtils.checkHorzWin(stateMod, newState, newEls);
        redUtils.checkVertWin(stateMod, newState, newEls);
        redUtils.diagonalWinChecker(stateMod, newState, 'negative');
        redUtils.diagonalWinChecker(stateMod, newState, 'positive');
      }
      
      // console.log('SQ state', state)
      // console.log('SQ action', action)

      return newState;
  }
  return state;
}
