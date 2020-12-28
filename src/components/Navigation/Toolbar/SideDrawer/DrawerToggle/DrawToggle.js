import React from 'react';
import classes from './DrawToggle.module.css';

const drawToggle = (props) => {
    return (
        <div className={classes.DrawToggle} onClick={props.clicked}>
            <p>MENU</p>
        </div>
    );
}

export default drawToggle;