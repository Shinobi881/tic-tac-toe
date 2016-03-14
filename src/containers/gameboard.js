import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Table from 'material-ui/lib/table/table';
import TableBody from 'material-ui/lib/table/table-body';
import TableRow from 'material-ui/lib/table/table-row';


import _ from 'lodash';

import { squareClick } from '../actions/actions_index';
import renderSquares from '../components/gamesquare';

class GameBoard extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectable: false
    };   
  }
  
  // Handle clicking on specific rows  
  handleRowClick(event) {
    let row = event.target;

    this.props.squareClick(row, this.props.gameBoard);
  }
  
  // Template for rendering rows
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
          selectable={this.state.selectable}
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
      <table className="game-board" selectable={this.state.selectable}>
        <tbody>        
          {this.renderRows()}  
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
  return bindActionCreators({squareClick: squareClick}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(GameBoard);