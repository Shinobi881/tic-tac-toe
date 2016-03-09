import { combineReducers } from 'redux';
import GameBoardReducer from './reducer_gameboard';
import GameRowReducer from './reducer_gamerow';

const rootReducer = combineReducers({
  gameBoard: GameBoardReducer,
  gameRow: GameRowReducer
});

export default rootReducer;

