import React from 'react';
import renderSquares from './gamesquare';

// Gamerow component
export default (data, square) => {
  return (
    _.map(data.gameBoard.rows, (val) => {
      return (
        <tr key={val.index}
          id={val.index}
          className="game-row"
          X_count={val.X_count}
          O_count={val.O_count}          
        >
          {renderSquares(val.squares)}
        </tr>
      )      
    })
  );
}



