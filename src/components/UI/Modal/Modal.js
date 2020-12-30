import React, { Component } from 'react';
import classes from './Modal.module.css';
import Auxillary from '../../../hoc/Auxillary';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {

    componentDidUpdate() {
        console.log('Modal updated');
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show;
    }

    render() {
        return (
            <Auxillary>
            <Backdrop show={this.props.show} click={this.props.modalClosed} />
            <div style={{
                display: this.props.show ? 'block': 'none',
            }} className={classes.Modal}>
            {this.props.children}
            </div>
            </Auxillary>
        );
    }
}


export default Modal;