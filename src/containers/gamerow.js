import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import _ from 'lodash';

import {makeRows, makeBoard, getBoardSize, initialState} from '../actions/actions_index';

class GameRow extends Component {
  constructor(props){
    super(props);
    this.state = {key: ''};
  }
  
  renderSquares(rowSet, rowsIndex) {
    let rowMap = [];
    this.props.gameRow.forEach(function (squareArr, i) {  
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
      <tr key="" className="game-row-test">
        {this.renderSquares()}     
      </tr>           
    );
  }
}

const mapStateToProps = (state) => {
  return {
    gameRow: state.gameBoard,
    initialState: state.initialState
  }
}


export default connect(mapStateToProps)(GameRow);
