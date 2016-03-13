import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { makeRows, makeBoard, getBoardSize } from '../actions/actions_index';

// This class allows user to choose a board size, create, and start a new game
class BoardSize extends Component {
  constructor(props) {
    super(props);
    this.state = {size: ''};
  }
  // Binds changes to the form
  onInputChange(event) {
    this.setState({size: event.target.value });
  }
  // Events to execute on form submission
  onFormSubmit(event) {
    event.preventDefault();
    this.props.makeBoard(makeRows, this.state.size);
    this.props.getBoardSize(this.state.size);
    this.setState({size: ''});
  }
  // Render the form and submit button
  render() {
    return (
      <form onSubmit={this.onFormSubmit.bind(this)} className="input-group">
        <input 
          placeholder="Enter board size" 
          className="form-control"
          value={this.state.size}
          onChange={this.onInputChange.bind(this)}
        />
        <span className="input-group-btn">
          <button type="submit" className="board-size">Submit</button>
        </span>
      </form>
    )
  }  
}

function mapStateToProps(state) {
  return {
    size: state.boardSize
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ makeBoard, getBoardSize }, dispatch);
}

export default connect(null, mapDispatchToProps)(BoardSize);