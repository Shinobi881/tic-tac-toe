import { combineReducers } from 'redux';
import GameBoardReducer from './reducer_gameboard';
import GameRowReducer from './reducer_gamerow';
import BoardSizeReducer from './reducer_boardsize';
import InitialState from './reducer_initial_state';

const rootReducer = combineReducers({
  gameBoard: GameBoardReducer,
  gameRow: GameRowReducer,
  boardSize: BoardSizeReducer,
  initialState: InitialState
});

export default rootReducer;

