import React, {Component} from 'react';
import {connect} from 'react-redux';
import {squareClick} from '../actions/actions_index';
import {bindActionCreators} from 'redux';

//import GameRow from './gamerow';
//import GamePiece from './gamepiece';


class GameBoard extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }


  renderSquares(rowSet, rowsIndex) {
    return rowSet.map((square, squareIndex) => {
      let squareKey = rowsIndex.toString() + squareIndex.toString();
      return (
        <td 
          key={squareKey} 
          className="square" 
          id={squareKey}
          onClick={() => this.props.squareClick(square)}
        >
          {rowSet[0]}
        </td>
      )
    })
  }
  renderRows() {
    console.log(this.props);
    return this.props.gameBoard.map((rows, rowIndex) => {
      return (
        <tr key={rowIndex}className="game-row">
          {this.renderSquares(rows, rowIndex)}
        </tr>
      )  
    });
  }

  render() {
    return (
    <table className="game-board">
      <tbody>
        {this.renderRows()}
      </tbody>
    </table>
    );
  }
}

function mapStateToProps (state) {
  return {
    gameBoard: state.gameBoard
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({squareClick: squareClick}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(GameBoard);


// <GameRow id="row-0" />
// <GameRow id="row-1" />
// <GameRow id="row-2" />