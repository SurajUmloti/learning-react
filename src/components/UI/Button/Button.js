import React from 'react';
import classes from './Button.css';

const button = (props) => (
    <button
        className={[classes.Button, classes[props.type]].join(' ')}
        type={props.type}
        onClick={props.clicked}
    >
        {props.children}
    </button>
);

export default button;