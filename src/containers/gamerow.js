import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {makeRows, makeBoard, getBoardSize, initialState} from '../actions/actions_index';

// import GameSquare from './gamepiece';

class GameRow extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  
  renderSquares(rowSet, rowsIndex) {
    console.log('rowSet: ', this.props.gameRow);
    if (!this.props.gameRow) {
      return (        
        <td><h2>Please choose a gameboard size!</h2></td>        
      )
    }

    let rowMap = [];
    this.props.gameRow.forEach(function (squareArr) {    
      rowMap = squareArr.row.map((square, squareIndex) => {
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
    })
    return rowMap;  
  }

  render() {
    return (
      <tr className="game-row-test">
        {this.renderSquares()}     
      </tr>           
    );
  }
}

function mapStateToProps(state) {
 console.log('gameRow state: ', state)
  return {
    gameRow: state.gameBoard,
    initialState: state.initialState
  }
}


export default connect(mapStateToProps)(GameRow);
// export default GameRow;