import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../Toolbar/NavigationItems/NavigationItems';


const toolbar = (props) => {
    return (
        <header className={classes.Toolbar}>
            <div>Menu</div>
            <Logo height="80%" />
            <nav className={classes.DesktopOnly}>
                <NavigationItems />
            </nav>
        </header>
    );
}

export default toolbar;