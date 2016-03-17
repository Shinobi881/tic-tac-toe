import _ from 'lodash';
import ACTIONS from './action_types';

// Dispatch the initial state action
export const initialState = () => {  
  let test = makeBoard(makeRows, 3);

  return {
    type: INITIAL_STATE,
    payload: test
  };
};

// Dispatch the user input action
export const getBoardSize = (size = 3) => {
  return {
    type: ACTIONS.GET_BOARD_SIZE,
    payload: size
  };
};

// Dispatch the board created event
export const boardCreated = (board = null) => {  
  return {
    type: ACTIONS.BOARD_CREATED,
    payload: board
  };
};

// Dispatch the square click event
export const squareClick = (square) => {
  return {
    type: ACTIONS.SQUARE_CLICKED,
    payload: square
  };
};

export const checkPlayCount = (square) => {
  return {
    type: ACTIONS.CHECK_PLAY_COUNT,
    payload: square
  }
}

export const checkWin = (state) => {
  return {
    type: ACTIONS.CHECK_WIN,
    payload: state
  }
}

export const xWinner = (state) => {
  return {
    type: ACTIONS.X_WINNER,
    payload: state
  }
}

export const oWinner = (state) => {
  return {
    type: ACTIONS.O_WINNER,
    payload: state
  }
}


