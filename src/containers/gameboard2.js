import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

// import GameSquare from './gamepiece';


class GameRow extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  renderSquares(rowSet, rowsIndex) {
    // console.log('rowSet: ', rowSet);
    return this.props.gameRow.map((square, squareIndex) => {
      return (
        <td 
          key={square[0]} 
          className="square-test" 
          
          onClick={() => this.props.squareClick(square)}
        >
          {square[1]}
        </td>
      )
    })
  }
  render() {
    return (
      <table className="game-board">
      <tbody>
      <tr className="game-row-test">
        {this.renderSquares()}     
      </tr>
      </tbody>
      </table>        
    );
  }
}

function mapStateToProps(state) {
 // console.log('gameRow state: ', state)
  return {
    gameRow: state.gameRow
  }
}

export default connect(mapStateToProps)(GameRow);
// export default GameRow;