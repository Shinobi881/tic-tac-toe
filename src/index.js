import React from 'react';
import ReactDOM from 'react-dom';

import GameBoard from './components/gameboard';
import './stylesheets/main.scss';

const test = 'test';

const App = () => {
   return (
    <h1>
      <GameBoard />
    </h1>
    );
}

ReactDOM.render(<App />, document.querySelector('.container'));
