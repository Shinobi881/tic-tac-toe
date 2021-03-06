import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';

import renderSquares from '../components/gamesquare';
import renderRows from '../components/gamerow';

import * as actions from '../actions/actions_index';
import * as actUtils from '../actions/action_utils';

// Gameboard container
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
    let square = event.target;
    
    if (props.gameBoard.clickCount >= (props.gameBoard.size * 2)) {
      props.checkWin(props.gameBoard);
    }
    props.squareClick(square, props.gameBoard);
  
  }
  
  // Render gameboard
  render() {
    if (!this.props.gameBoard) {
      return <h1>Please choose a gameboard size!</h1>
    }
    return (
      <table className="game-board" 
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