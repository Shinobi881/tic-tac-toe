import React, {Component} from 'react';

class GamePiece extends Component {
  constructor(props){
    super(props);
    this.state = { piece: '' };
  }
  onSquareClick(event) {
    this.setState({ piece: 'X' })
    event.target.textContent = this.state.piece;
    console.log(this)

  }
  render() {
    return (
      <td className="game-square" onClick={this.onSquareClick.bind(this)}>
        {this.state.piece}
      </td>
    )
  }
}
// this.onSquareClick(null, this)
export default GamePiece;