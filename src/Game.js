import React, {Component} from 'react';
import cellGenerator from './cellGenerator.js';
import Board from './Board.js';
import Button from './Button.js';
import Display from './Display.js';
import ExampleCell from './ExampleCell.js';
import Text from './Text.js';

class Game extends Component {
  constructor(props){
    super(props);
    this.state = {generation: 0, pause: false}
  };

  componentDidMount(){
    this.speed = 1000;
  }

  stop = _ => {
    this.refs.board.removeTimer();
    this.setState({pause: true});
  }

  start = _ => {
    this.refs.board.setTimer(this.speed);
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

    this.refs.board.reset(cellGenerator());
  }

  changeSpeed = newSpeed => {
    this.speed = newSpeed;
    this.refs.board.resetSpeed(newSpeed);
  }

  render(){
    return (
      <div id="container">
        <div id="header">game of life</div>
        <div id="controls">
          <Button onClick={()=>this.setPause(this.state.pause)}
          text={this.state.pause?"start":"pause"} />
          <Button onClick={this.clear} text="clear" />
          <Button onClick={this.reset} text="reset" />
        </div>
        <div id="middle">
        <div id="left">
        <div id="text">
          <Text />

        </div>
        </div>
        <Board liveCells={cellGenerator()} ref="board" id="board" newGeneration={this.newGeneration}/>
        <div id="speed">
        <div id="cellTypes">
        <ExampleCell id="dead" text="dead cell" />
        <ExampleCell id="old" text="surviving cell" />
        <ExampleCell id="new" text="newly created cell" />
        </div>
          <div id="speedLabel">set the speed: </div>
          <Button onClick={()=>this.changeSpeed(1000)} text="slow" />
          <Button onClick={()=>this.changeSpeed(500)} text="medium" />
          <Button onClick={()=>this.changeSpeed(100)} text="fast" />
        </div>
        </div>
        <div id="generation">
          <Display generation={this.state.generation} />
        </div>
      </div>
    )
  }
};

export default Game;
