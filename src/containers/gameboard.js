import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';

import { squareClick } from '../actions/actions_index';
import renderSquares from '../components/gamesquare';

class GameBoard extends Component {
  constructor(props){
    super(props);
    this.state = {};   
  }  
  handleRowClick(event) {
    let row = event.target;

    this.props.squareClick(row, this.props.gameBoard);
  }
  renderRows() {
    let props = this.props;
    if (!props.gameBoard) {
      return <tr><td><h2>Please choose a gameboard size!</h2></td></tr>
    }
    return _.map(props.gameBoard.rows, (val) => {
      return (
        <tr key={val.index}
          id={val.index}
          className="game-row"
          X_count={val.X_count}
          O_count={val.O_count}
          onClick={this.handleRowClick.bind(this)}
        >
          {renderSquares(val.squares)}
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
function mapStateToProps (state) {

  return {
    gameBoard: state.gameBoard
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({squareClick: squareClick}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(GameBoard);