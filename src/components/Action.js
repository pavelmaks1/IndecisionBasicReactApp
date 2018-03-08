import React from 'react';
import ReactDOM from 'react-dom';

const Action = (props) => (
    <div>
        <button
            className="big-button" 
            onClick={props.handlePick} 
            disabled={!props.hasOptions}>
        What should i do?</button>
    </div>
);

export default Action;