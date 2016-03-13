import React, {Component} from 'react';
import {connect} from 'react-redux';
import {squareClick} from '../actions/actions_index';
import {bindActionCreators} from 'redux';
import GameRow from './gamerow';
import  newRow from '../components/gamerow';
import _ from 'lodash';

import {makeRows, makeBoard, getBoardSize, initialState} from '../actions/actions_index';

class GameBoard extends Component {
  constructor(props){
    super(props);
    this.state = {
      clickCount: 2,
      currentPiece: 'X',
      //winner: this.props.gameBoard.winner
    };   
  }
  renderSquares(data) {
    // console.log(data)
    return data.map((square, squareIndex) => {
      // console.log(square)
      return (
        <td 
          className="game-square"             
          key={square.position}
          id={square.position} 
          value={square.gamePiece}
        >
          {square.gamePiece}
        </td>
      )
    })
  }
  handleRowClick(event) {
    // event.stopPropagation()
    let row = event.target;
    let state = this.state;
    this.setState({clickCount: this.state.clickCount++})
    console.log('State', this.state.clickCount)
    // this.state
    let clickCount = 2;

    if (state.clickCount % 2 !== 0) {
      this.setState({ currentPiece:'O' });
    } else if (state.clickCount % 2 === 0) {
      this.setState({ currentPiece:'X' });
    }

    // console.dir(row.parentNode)
    // console.log(row)
    // console.log(this)
    this.props.squareClick(row, this.props.gameBoard);
  }
  renderRows() {
    let props = this.props;
    if (!props.gameBoard) {
      return <tr><td><h2>Please choose a gameboard size!</h2></td></tr>
    }
    // console.log('props', props)
    return _.map(props.gameBoard.rows, (val) => {
        // console.log('val', val)
      return (
        <tr key={val.index}
          id={val.index}
          className="game-row"
          X_count={val.num_X}
          O_count={val.num_O}
          onClick={this.handleRowClick.bind(this)}
        >
          {this.renderSquares(val.squares)}
        </tr>
      )
        
      })
    
  }
 
  render() {
    if (!this.props.gameBoard) {
      return <h1>Please choose a gameboard size!</h1>
    }
    return (

    <table className="game-board">
      <tbody>        
        {this.renderRows()}  
      </tbody>
    </table>
    );
  }
}
// {this.props.gameBoard.rows.map(this.renderRows)}
function mapStateToProps (state) {

  return {
    gameBoard: state.gameBoard
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({squareClick: squareClick}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(GameBoard);