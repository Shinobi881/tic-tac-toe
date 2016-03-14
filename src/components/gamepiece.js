import React, { Component } from 'react';
import { connect } from 'react-redux';

// Custom game piece
class GamePiece extends Component {
  constructor(props){
    super(props);
    this.state = {};

  }
  render() {
    return (
      <div>
        <img alt="" src={} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    gameBoard: state.gameBoard
  }
}
export default connect(mapStateToProps)(GamePiece);