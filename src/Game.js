import React, {Component} from 'react';
import cellGenerator from './cellGenerator.js';
import Board from './Board.js';

class Game extends Component {
  constructor(props){
    super(props);
  };

  render(){
    let c = cellGenerator();
    return (
      <Board liveCells={[80,81,82]} />
    )
  }
};

export default Game;
