import React, { Component } from 'react';
import Dialog from 'material-ui/lib/dialog';

// Dialog for win 
export default class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      win: false,
      message: 'Please play again!'
    };
  }

  render() {
    return (
      <div>
        <Dialog
          onRequestClose={this.handleClose}
          open={this.state.open}
        >
          {this.state.message}
        </Dialog>
      </div>
    )
  }
}