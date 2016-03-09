import React, {Component} from 'react';
import {connect} from 'react-redux';
import {squareClick} from '../actions/actions_index';
import {bindActionCreators} from 'redux';
import GameRow from './gamerow';

import {makeRows, makeBoard, getBoardSize, initialState} from '../actions/actions_index';

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
       <GameRow />
      </tbody>
    </table>
    );
  }
}

function mapStateToProps (state) {
  return {
    gameBoard: state.gameBoard, 
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({squareClick: squareClick}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(GameBoard);