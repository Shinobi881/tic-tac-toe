import React, {Component} from 'react';
import GameBoard from './containers/gameboard';
import BoardSize from './containers/board-size';
import GameRow from './containers/gamerow';


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
// 
export default App;
