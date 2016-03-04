import React, {Component} from 'react';
import GamePiece from './gamepiece';

class GameRow extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  render() {
    return (
      <tr className="game-row">
        <GamePiece id="game-square" />
        <GamePiece id="game-square" />
        <GamePiece id="game-square" />      
      </tr>
        
    );
  }
}

export default GameRow;