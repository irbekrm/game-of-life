import React from 'react';

const Button = props => (<button class={`button ${props.selectedButton ? "selected" : ""}`}
 onClick={props.onClick}>{props.text}</button>);

export default Button;
