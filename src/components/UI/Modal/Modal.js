import React from 'react';
import classes from './Modal.module.css';
import Auxillary from '../../../hoc/Auxillary';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => {
    return (
        <Auxillary>
        <Backdrop show={props.show} click={props.modalClosed} />
        <div style={{
            display: props.show ? 'block': 'none',
        }} className={classes.Modal}>
        {props.children}
        </div>
        </Auxillary>
    );
};


export default modal;