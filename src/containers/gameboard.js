import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';

import renderSquares from '../components/gamesquare';
import renderRows from '../components/gamerow';
import { squareClick, checkPlayCount, checkWin } from '../actions/actions_index';
import * as actions from '../actions/actions_index';

class GameBoard extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectable: false
    };   
  }
  
  // Handle clicking on specific rows  
  handleRowClick(event) {
    let props = this.props
    let row = event.target;

    console.log(props)

    props.checkPlayCount(props.gameBoard);
    props.squareClick(row, props.gameBoard);
  }
  
  // Render gameboard
  render() {
    if (!this.props.gameBoard) {
      return <h1>Please choose a gameboard size!</h1>
    }
    return (
      <table className="game-board" selectable={this.state.selectable}
        onClick={this.handleRowClick.bind(this)}
      >
        <tbody>        
          {renderRows(this.props)}  
        </tbody>
      </table>
    );
  }
}

// Map the redux data to this.props
const mapStateToProps = (state) => {
  return {
    gameBoard: state.gameBoard
  };
}

// Map redux actions to this.prop
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
}

// Connect props to actions
export default connect(mapStateToProps, mapDispatchToProps)(GameBoard);