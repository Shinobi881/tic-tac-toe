import React from 'react';

export default (data) => {
  console.log('data', data)

  return data.row.map((square, squareIndex) => {
    return (
      <td 
        key={square[0]} 
        className="square-test"             
        
      >
        {square[1]}
      </td>
    )
  })

}

