import React from 'react';
import renderSquares from './gamesquare';

export default (props, clickHandler) => {
  // let props = this.props;
  console.log(props)
  if (!props.gameBoard) {
    return <tr><td><h2>Please choose a gameboard size!</h2></td></tr>
  }
    console.log('loggin val', props.gameBoard.rows)
  return _.map(props.gameBoard.rows, (val) => {
    return (
      <tr key={val.index}
        id={val.index}
        className="game-row"
        X_count={val.X_count}
        O_count={val.O_count}
        onClick={clickHandler}
      >
        {renderSquares(val.squares)}
      </tr>
    )      
  })
}

