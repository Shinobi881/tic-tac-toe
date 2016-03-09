import { combineReducers } from 'redux';
import GameBoardReducer from './reducer_gameboard';
// import GameRowsReducer from './reducer_gamerow';

const rootReducer = combineReducers({
  gameBoard: GameBoardReducer,
  // gameRows: GameRowsReducer
});

export default rootReducer;

