import React, {Component} from 'react';
import cellGenerator from './cellGenerator.js';
import Board from './Board.js';
import Button from './Button.js';
import Display from './Display.js';

class Game extends Component {
  constructor(props){
    super(props);
    this.state = {generation: 0}
  };

componentDidMount(){
  this.pause = false;
}
  stop = _ => {
    this.refs.board.removeTimer();
    this.pause = true;
  }

  start = _ => {
    this.refs.board.setTimer(100);
    this.pause = false;
  }

  setPause = pause => {pause ?
    this.start() : this.stop()
  }

  newGeneration = _ => this.setState(prevState => ({generation: prevState.generation +=1}))

  render(){
    return (
      <div>
        <Board liveCells={cellGenerator()} ref="board" newGeneration={this.newGeneration}/>
        <Button onClick={()=>this.setPause(this.pause)} text="pause" />
        <Display generation={this.state.generation} />
      </div>
    )
  }
};

export default Game;
