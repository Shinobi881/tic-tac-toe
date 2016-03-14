import 'normalize.css';

import React, {Component} from 'react';
import AppBar from 'material-ui/lib/app-bar';
import Toolbar from 'material-ui/lib/toolbar/toolbar';
import ToolbarGroup from 'material-ui/lib/toolbar/toolbar-group';
import ToolbarSeparator from 'material-ui/lib/toolbar/toolbar-separator';
import ToolbarTitle from 'material-ui/lib/toolbar/toolbar-title';

import GameBoard from './containers/gameboard';
import BoardSize from './containers/boardsize';

export default class App extends Component {
   render() { 
    return (
    <div>
      <AppBar title="Tic-Tac-Toe" />
      <div className="input">
        <BoardSize />
      </div>
      <div className="game-container">
        <GameBoard /> 
      </div>

    </div>
    );
  }
}
