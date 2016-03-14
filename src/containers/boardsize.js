import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { boardCreated, getBoardSize, createBoard, resetWin } from '../actions/actions_index';

// This class allows user to choose a board size, create, and start a new game
class BoardSize extends Component {
  constructor(props) {
    super(props);
    this.state = {
      size: '', 
      gameCount: 0
    };
  }

  // Binds changes to the form
  onInputChange(event) {
    this.setState({size: event.target.value });
  }

  // Events to execute on form submission
  onFormSubmit(event) {
    event.preventDefault();
    if (this.state.gameCount >= 1) {
      resetWin();
    }
    this.setState({
      gameCount: this.state.gameCount + 1
    })

    console.log(this.state.gameCount)

    this.props.getBoardSize(this.state.size);
    this.props.boardCreated(createBoard(this.state.size));
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

// Map properties and actions to Redux reducer
function mapStateToProps(state) {
  return {
    size: state.boardSize
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ boardCreated, getBoardSize }, dispatch);
}

export default connect(null, mapDispatchToProps)(BoardSize);