import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../Toolbar/NavigationItems/NavigationItems';
import DrawToggle from '../Toolbar/SideDrawer/DrawerToggle/DrawToggle';

const toolbar = (props) => {
    return (
        <header className={classes.Toolbar}>
            <DrawToggle  clicked={props.sideDrawerToggleClick} />
            <Logo height="80%" />
            <nav className={classes.DesktopOnly}>
                <NavigationItems />
            </nav>
        </header>
    );
}

export default toolbar;