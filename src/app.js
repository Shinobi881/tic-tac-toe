import React, {Component} from 'react';
import GameBoard from './components/gameboard';


export default class App extends Component {
   render() { 
    return(
    <h3>
      <GameBoard />
    </h3>
    );
  }
}
