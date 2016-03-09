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
  renderRows(element) {
    if (!this.props.gameBoard) {
      return <tr><td><h2>Please choose a gameboard size!</h2></td></tr>
    }
    return this.props.gameBoard.map((rows, rowIndex) => {

      console.log(element.key);
      console.log(element.props);
      // element.props.key = rowIndex;
      return element;
    });
  }

  render() {
    return (
    <table className="game-board">
      <tbody>
        {this.renderRows(<GameRow />)}
      </tbody>
    </table>
    );
  }
}

function mapStateToProps (state) {
  console.log(state);
  return {
    gameBoard: state.gameBoard, 
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({squareClick: squareClick}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(GameBoard);