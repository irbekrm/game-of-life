import React from 'react';

const ExampleCell = props => (<div id="example"><div id={props.id}></div><div>{" " + props.text}</div></div>);

export default ExampleCell;
