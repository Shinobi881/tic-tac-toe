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
