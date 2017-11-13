import React, {Component} from 'react';
import cellGenerator from './cellGenerator.js';
import Board from './Board.js';
import Button from './Button.js';

class Game extends Component {
  constructor(props){
    super(props);
    this.setState({pause: false})
  };
  setPause = _ => window.clearInterval(this.refs.board.timer);

  render(){
    let c = cellGenerator();
    return (
      <div>
        <Board liveCells={cellGenerator()} ref="board" />
        <Button onClick={this.setPause} text="pause" />
      </div>
    )
  }
};

export default Game;
