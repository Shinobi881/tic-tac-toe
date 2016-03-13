import React from 'react';

export default (data) => {
  return data.map((square, squareIndex) => {
    return (
      <td 
        className={"game-square col-" + square.position}
        key={square.position}
        id={square.position} 
        value={square.gamePiece}
      >
        {square.gamePiece}
      </td>
    )
  })
}