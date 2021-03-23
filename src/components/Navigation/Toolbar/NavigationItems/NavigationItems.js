import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';
import Auxillary from '../../../../hoc/Auxillary';
const navigationItems = (props) => {

    let userItem = (<NavigationItem link="/auth">Sign In</NavigationItem>);

    if (props.isAuthenticated) {
        
        userItem =(<Auxillary><NavigationItem link="/orders">Orders</NavigationItem> <NavigationItem link="/logout">Logout</NavigationItem></Auxillary> );
    }


    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem link="/">Burger Builder</NavigationItem>
            {userItem}
        </ul>
    );
}

export default navigationItems;