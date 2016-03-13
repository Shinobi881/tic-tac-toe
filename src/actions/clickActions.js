import actions from './actions_index';
const squareClick(square) {
  return {
    type: SQUARE_CLICKED,
    payload: square
  }
}