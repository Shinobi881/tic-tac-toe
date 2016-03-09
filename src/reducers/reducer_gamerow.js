export default function newReducer(state = null, action) {
  switch (action.type) {
    case 'MAKE_ROWS':
      return action.payload
  }
  return state;
}