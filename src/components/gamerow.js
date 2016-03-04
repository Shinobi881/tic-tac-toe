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
        <GamePiece id="game-square">Square</GamePiece>
        <GamePiece id="game-square">Square</GamePiece>
        <GamePiece id="game-square">Square</GamePiece>
      
      </tr>
        
    );
  }
}

export default GameRow;