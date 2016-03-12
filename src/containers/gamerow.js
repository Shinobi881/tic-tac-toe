import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import _ from 'lodash';

import {makeRows, makeBoard, getBoardSize, initialState} from '../actions/actions_index';

// import GameSquare from './gamepiece';



class GameRow extends Component {
  constructor(props){
    super(props);
    this.state = {key: ''};

    // let newRange = _.times(3, () => [0 + 1, '']);
    // console.log(newRange);
  }
  
  renderSquares(rowSet, rowsIndex) {
    let rowMap = [];
    this.props.gameRow.forEach(function (squareArr, i) {  
      // console.log(i)  
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
    // console.log('props', this.state)
    return (
      <tr key="" className="game-row-test">
        {this.renderSquares()}     
      </tr>           
    );
  }
}

function mapStateToProps(state) {
  return {
    gameRow: state.gameBoard,
    initialState: state.initialState
  }
}


export default connect(mapStateToProps)(GameRow);
