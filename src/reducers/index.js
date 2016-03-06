import { combineReducers } from 'redux';
import GameBoardReducer from './reducer_gameboard';

const rootReducer = combineReducers({
  gameBoard: GameBoardReducer
});

export default rootReducer;

