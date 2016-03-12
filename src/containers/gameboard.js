import React, {Component} from 'react';
import {connect} from 'react-redux';
import {squareClick} from '../actions/actions_index';
import {bindActionCreators} from 'redux';
import GameRow from './gamerow';
import  newRow from '../components/gamerow';

import {makeRows, makeBoard, getBoardSize, initialState} from '../actions/actions_index';

class GameBoard extends Component {
  constructor(props){
    super(props);
    this.state = {};
    this.gameBoard = this.props.gameBoard;
    // console.log(this.gameboard)

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
  renderRows(props, index) {
    // console.log(props)
    // if (props) {
    //   return <tr><td><h2>Please choose a gameboard size!</h2></td></tr>
    // }
    // return props.map((rows, rowIndex) => {

      // console.log(element.key);
      // console.log('rows', rows);
      // element.props.key = rowIndex;
      // return <tr><td>props</td></tr>;
    // console.log('test', newRow(props))
    // });

    return (
      <tr key={index}>
        {newRow(props)}
      </tr>
    )
  }
  // renderSquares(rowSet, rowsIndex) {
  //   let rowMap = [];
  //   this.props.gameRow.forEach(function (squareArr) {    
  //     rowMap = squareArr.row.map((square, squareIndex) => {
  //       return (
  //         <td 
  //           key={square[0]} 
  //           className="square-test"             
  //           onClick={() => this.props.squareClick(square)}
  //         >
  //           {square[1]}
  //         </td>
  //       )
  //     })
  //   })
  //   return rowMap;  
  // }

  render() {
    if (!this.props.gameBoard) {
      return <h1>Please choose a gameboard size!</h1>
    }
    return (

    <table className="game-board">
      <tbody>
        {this.props.gameBoard.rows.map(this.renderRows)}
      </tbody>
    </table>
    );
  }
}

function mapStateToProps (state) {
  //console.log(state);
  return {
    gameBoard: state.gameBoard
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({squareClick: squareClick}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(GameBoard);