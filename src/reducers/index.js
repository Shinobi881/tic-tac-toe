import { combineReducers } from 'redux';

import gameBoard from './reducer_gameboard';
// import boardSize from './reducer_boardsize';
import initialState from './reducer_initial_state';
import gameLogic from './reducer_game_logic';

const rootReducer = combineReducers({
  gameBoard,
  gameLogic,
  // boardSize,
  initialState
});

export default rootReducer;

