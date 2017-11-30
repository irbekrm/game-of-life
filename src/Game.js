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
    this.currentSpeed = 1000;
  }

  stop = _ => {
    this.refs.board.removeTimer();
    this.setState({pause: true});
  }

  start = _ => {
    this.refs.board.setTimer(this.currentSpeed);
    this.setState({pause: false});
  }

  setPause = pause => {pause ?
    this.start() : this.stop()
  }

  newGeneration = _ => this.setState(prevState => ({generation: prevState.generation +=1}));

  clear = _ => {this.setState({generation: 0, pause: true});
    this.refs.board.clear()};

  reset = _ => {
    this.setState({generation: 0, pause: false});
    this.currentSpeed = 1000;

    this.refs.board.reset(cellGenerator());
  }

  changeSpeed = (newSpeed,x) => {
    this.currentSpeed = newSpeed;
    !this.state.pause && this.refs.board.resetSpeed(newSpeed);
  }

  render(){
    let speeds = {"slow": 1000, "medium": 500, "fast": 100},
      currentSpeed = this.currentSpeed;
    return (
      <div id="container">
        <div id="top">
          <div id="header">game of life</div>
          <div id="generation">
            <Display generation={this.state.generation} />
          </div>
        </div>
        <div id="middle">
          <div id="left">
            <div id="innerControls">
              <Button onClick={()=>this.setPause(this.state.pause)}
              text={this.state.pause?"start":"pause"} />
              <Button onClick={this.clear} text="clear" />
              <Button onClick={this.reset} text="reset" />
            </div>
              <div id="speed">
              <span id="speedLabel">set the speed: </span>
                {Object.keys(speeds).map(e => (
                <Button onClick={(x) => this.changeSpeed(speeds[e],x)} text={e}
                selectedButton={speeds[e]==currentSpeed} /> ))}
            </div>
          </div>
          <Board liveCells={cellGenerator()} ref="board" id="board"
          newGeneration={this.newGeneration} speed={this.currentSpeed}/>
          <Text />
        </div>
        <div id="cellTypes">
          <div>
          <ExampleCell id="dead" text="dead cell" />
          <ExampleCell id="old" text="surviving cell" />
          <ExampleCell id="new" text="newly created cell" />
          </div>
        </div>
      </div>
    )
  }
};

export default Game;
