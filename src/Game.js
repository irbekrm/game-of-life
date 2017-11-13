import React, {Component} from 'react';
import cellGenerator from './cellGenerator.js';
import Board from './Board.js';

class Game extends Component {
  constructor(props){
    super(props);
  };

  render(){
    let c = cellGenerator();
    console.log(`c is ${c}`);
    return (
      <Board liveCells={c} />
    )
  }
};

export default Game;
