import React, {Component} from 'react';

class GamePiece extends Component {
  constructor(props){
        super(props);
        this.state = {};
  }
  render() {
    return (
      <td className="game-square"> Square</td>
    )
  }
}

export default GamePiece;