# tic-tac-toe
*Just a simple tic-tac-toe-game*


##Description
- Components and containers: 
  - `gameboard.js` this component is can also be classified as a container, meaning it directly connects to a redux store. This component is the outermost container of a single gameboard. All of its' child components recieve their properties [`gamerow, gamesquare, gamepiece`] recieve their properties and interactions from the gamerow parent. 

  - The parent child relationship is as such:
    - `gameboard.js` => `gamerow.js` => `gamesquare.js` => `gamepiece.js` (custom gamepiece, not implemented)

- Actions:
  - The `actions_index.js' are the actions that the components respond to when dispatched. For example: when the gameboard `handleClick` function is invoked (central to the component only), it invokes a `squareClick` function which dispatched the `SQUARE_CLICKED` action type (yes, sounds a bit redundant). 

  *Unfortunately, I didn't have time to break up the utility actions from the dispatch actions.*

- Reducers:
  *`reducer.js` (where all the reducers are combined):*
    1. Listens for actions such as `SQUARE_CLICKED`
    2. Delegates to the reducer that handles it 
      - Delegated reducer copies the data from the current application state
      - Modifies the copied state with the data passed in to `squareClicked`
      - Returns a whole new state with the modified changes

  At the moment, `reducer_gameboard` handles ALL actions dispatched. I refactored once into `reducer_utils.js` but it needs a lot more. Take a look at `action_types` to get a better idea of how this should all work. Essentially, all the checks from `SQUARE_CLICKED` in gameboard reducer, should broken out into reducers that handle dispatched actions.

  The way it SHOULD all work: 
    - `SQUARE_CLICKED` checks, double clicks, winner, cat's game 
      - `CHECK_PLAY_TYPE` - dispated to check for diag, vert, horz, plays and handles the active game piece.
      - `CHECK_PLAY_COUNT` -  handles whether it's time to start checking for a winner.
        - `CHECK_WIN` - on each click after the minimum plays for a win is reached
        ...and more and more...

- If I had the time (just in general) -
  1. More refactoring on actions and reducers
  2. Testing 
  3. Custom game pieces
  4. Computer opponent AI
  5. Deploy and multiplayer via websockets
  6. Some keyframes and more animations, responsiveness, and better looking board

###Technologies

- ES2015
- React
- Redux
- Webpack
- Node
- Babel (stage-3, for ES6 spread operator)

##Requirements

Add JavaScript so an actual tic­tac­toe game can be played starting with a blank board. 
Each click on the board should alternate between X and O until someone wins or the game ends in a tie. Feel free to use jQuery or any JavaScript framework you like. Code quality is important. Please ensure that your code is DRY (Don’t Repeat Yourself), readable, formatted consistently, etc. Feel free to use online resources, but do not copy code. The code should work on the latest versions of Chrome, Firefox & Safari. Add JavaScript so an actual tic­tac­toe game can be played starting with a blank board. 


**Basic:**

- [x] Each click on the board should alternate between X and O until someone wins or the game ends in a tie.
- [x] Please ensure that your code is DRY (Don’t Repeat Yourself), readable, formatted consistently, etc.
- [x] The code should work on the latest versions of Chrome, Firefox & Safari.
- [x] Add JavaScript(ES2015) so an actual tic­tac­toe game can be played starting with a blank board.
- [x] The code should work on the latest versions of Chrome, Firefox & Safari.

**Bonus:**

- [ ] Use CSS to add more detail, animations or responsive design to the wireframe above
- [ ] Allow for more than one independent tic­tac­toe board to be on the same page
- [x] Add the ability to restart a game after it has ended
- [x] Use module loaders like webpack or browserify for dependency management
- [x] Support any NxN tic­tac­toe board
- [ ] Write error handling and/or tests

##Installation

*Before running you should have Webpack and Babel installed globally:*

`$ npm i -g webpack babel babel-core` 

*After completing the installation above. From your CLi:*

1. `$ npm i`
2. `$ npm start`
3. Then open a web browser to localhost:3000