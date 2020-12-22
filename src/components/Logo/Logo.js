import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png';
import classes from './Logo.module.css';

const logo = (props) => {
    return (
    <div className={classes.Logo} 
    style={{
        height: props.height,
        marginBottom: props.marginBottom,
    }}>
        <img src={burgerLogo} alt="Baker's Burger" />
    </div>  
    );
};

export default logo;