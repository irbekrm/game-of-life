import React from 'react';

const Button = props => (<div class={`button ${props.selectedButton ? "selected" : ""}`}
 onClick={props.onClick}>{props.text}</div>);

export default Button;
