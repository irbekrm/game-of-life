import React, {Component} from 'react';
import cellGenerator from './cellGenerator.js';
import Board from './Board.js';
import Button from './Button.js';
import Display from './Display.js';

class Game extends Component {
  constructor(props){
    super(props);
    this.state = {generation: 0, pause: false}
  };


  stop = _ => {
    this.refs.board.removeTimer();
    this.setState({pause: true});
  }

  start = _ => {
    this.refs.board.setTimer(100);
    this.setState({pause: false});
  }

  setPause = pause => {pause ?
    this.start() : this.stop()
  }

  newGeneration = _ => this.setState(prevState => ({generation: prevState.generation +=1}));

  clear = _ => {this.setState({generation: 0});
    this.refs.board.clear()};

  reset = _ => {
    this.setState({generation: 0});

    this.refs.board.reset(cellGenerator(),100);
  }

  render(){
    return (
      <div>
        <Board liveCells={cellGenerator()} ref="board" newGeneration={this.newGeneration}/>
        <Button onClick={()=>this.setPause(this.state.pause)}
        text={this.state.pause?"start":"pause"} />
        <Button onClick={this.clear} text="clear" />
        <Button onClick={this.reset} text="reset" />
        <Display generation={this.state.generation} />
      </div>
    )
  }
};

export default Game;
