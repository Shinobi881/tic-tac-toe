import React, {Component} from 'react';

class GamePiece extends Component {
  constructor(props){
    super(props);
    this.state = { 
      piece: '',
      n_squares: 0
    };

  }
  creatSquares(num) {
    var squares = [];
    this.setState({n_squares: num});

    for (var i = 0; i < num; i++) {
      squares.push(
        `<td 
          className="game-square" 
          id=${num} 
          onClick={this.onSquareClick.bind(this)}
        >
          {this.state.piece}
        </td>`
      )
    }
    return sqaures; 

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
export default GamePiece;