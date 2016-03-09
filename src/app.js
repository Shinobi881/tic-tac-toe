import React, {Component} from 'react';
import GameBoard from './containers/gameboard';
import BoardSize from './containers/board-size';


export default class App extends Component {
   render() { 
    return (
    <div>
      <BoardSize />
      <GameBoard />
    </div>
    );
  }
}

export default App;
