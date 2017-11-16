import React from 'react';

const Text = _ => (
<div>
  <div id="innerHeader">{`conway's game of life`}</div>
  <div id="innerHeader1">rules:</div>
  <div>each cell is in one of two states- dead or
  alive. a cell with less than two neighbours dies (underpopulation). a live cell
  with two or three neighbours lives. a live cell with more than three neighbours
  dies (overpopulation). a dead cell with exactly three neighbours becomes alive
  (reproduction).</div>
  <div>neigbours of a cell are horizontally, vertically and
  diagonally adjacent cells.</div>
  <div id="interaction">interaction:</div>
  <div>clicking on a dead cell will make it become
  alive (a new cell). clicking on a new cell will make it become 'old' cell. clicking
  on an 'old' cell will make it die.</div>
  <div>more in <a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life">
    wikipedia</a></div>
</div>);

export default Text;
