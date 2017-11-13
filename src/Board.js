import React, {Component} from 'react';
import {select,selectAll} from 'd3';

class Board extends Component{
  constructor(props){
    super(props);
    this.state = {
      arr: Array.from({length: 4000}, (_, i) => +this.props.liveCells.includes(i))
    };
  };

  componentDidMount(){
    this.mounted = true;
    this.generate();
    this.setTimer(1000);
    this.generation = 0;
  }

  componentDidUpdate() {
    this.removeCells();
    this.generate();
  }

  setTimer = interval => {this.timer = window.setInterval(this.checkCells, interval); };
  removeTimer = _ => {window.clearInterval(this.timer)};

  removeCells = _ => {
    select("#wrapper")
      .selectAll("div")
        .remove()
  }
  generate = _ => {
    let self = this;

    select("#wrapper")
      .selectAll("div")
      .data(this.state.arr)
      .enter().append("div")
      .style("background-color", d => d ? "blue" : "green")
    };

  checkIfWithinRange = x => x >= 0 && x < 4000;

  getNeighbours = i => {
    let arr = [];
    [1,-1,80,-80,79,-79,81,-81].forEach(e => {
      this.checkIfWithinRange(e + i) && arr.push(i + e);
    });
    return arr;
  };
  countLivesAround = (surroundingCells, arr) =>
    surroundingCells.reduce((a,b) => a + arr[b],0);

  liveOrDie = (e, i, arr) => {
    let neighbours = this.getNeighbours(i);
    let livesAround = this.countLivesAround(neighbours,arr);

    return (
    e ? (livesAround == 2 || livesAround == 3) :
    livesAround == 3 );
  }

  checkCells = _ => {
    let oldCells = this.state.arr.slice(0);
    let liveCells = oldCells.map((e,i) => [e,i]).filter(x=>x[0]==1).map(y=>y[1]);
    let newCells = liveCells.concat(...liveCells.map(i => this.getNeighbours(i)));

    let newArr = oldCells.map((e,i) => newCells.includes(i) ?
      +this.liveOrDie(e,i,oldCells) : e );
    this.props.newGeneration();
    this.setState({arr: newArr});


  }

    render(){
      return(
        <div id="wrapper">
        </div>
      )
    }

};

export default Board;
