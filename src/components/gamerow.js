import React from 'react';

export default (data) => {
  let rowMap = [];
  console.log('newProps', data)
    
    rowMap = data.row.map((square, squareIndex) => {
      return (

        <td 
          key={square[0]} 
          className="square-test"             
          onClick={() => this.props.squareClick(square)}
        >
          {square[1]}
        </td>
      )
    })
  console.log(rowMap)
  return rowMap;

}

