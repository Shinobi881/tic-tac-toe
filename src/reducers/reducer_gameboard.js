const gameboard_reducer = () => {
  return [
    [[0],[0],[0]],
    [[0],[0],[0]],
    [[0],[0],[0]]
  ]
}

export default function(state = null, action) {
  // State argument is not the application state only the state this reducer is responsible for

  switch(action.type) {
    case 'INITIAL_STATE':
      console.log('it was the makeboard action: ', action.payload)
      return action.payload
    case 'MAKE_BOARD':
      return action.payload    
  }
  return state;
}

// export default gameboard_reducer;

// [
//     {row0:[[0],[0],[0]]},
//     {row1:[[0],[0],[0]]},
//     {row2:[[0],[0],[0]]}
// switch (expression) {
//   case label_1:
//     // statements_1
//     break;
//   default:
//     // statements_def
//     break;
// }