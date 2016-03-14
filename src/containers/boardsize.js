import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/Raised-Button';

import { boardCreated, getBoardSize, createBoard, resetWin } from '../actions/actions_index';

// This class allows user to choose a board size, create, and start a new game
class BoardSize extends Component {
  constructor(props) {
    super(props);
    this.state = {
      size: '', 
      gameCount: 0,
      error: ''
    };
  }

  // Binds changes to the form
  onInputChange(event) {
    
    this.setState({size: event.target.value });
  }

  // Events to execute on form submission
  onFormSubmit(event) {
    event.preventDefault();
    
    this.state.gameCount >= 1 ? resetWin() : null;      
    this.setState({
      gameCount: this.state.gameCount + 1
    });

    this.props.getBoardSize(this.state.size);
    this.props.boardCreated(createBoard(this.state.size));
    this.setState({size: ''});
  }

  // Render the form and submit button
  render() {
    return (
      <form onSubmit={this.onFormSubmit.bind(this)} className="input-group">
        <TextField  
          className="form-control"
          errorText={this.state.error}
          floatingLabelText="Enter a size > 2"
          type="number"
          autoComplete="off"
          value={this.state.size}
          onChange={this.onInputChange.bind(this)}
        />
        <span className="play-game">
          <RaisedButton secondary={true} type="submit" label="New Game" className="board-size" />
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