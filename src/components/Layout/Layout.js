import React, { Component } from 'react';
import { connect } from 'react-redux';
import Aux from '../../hoc/Auxillary';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/Toolbar/SideDrawer/SideDrawer';


class Layout extends Component {

    state = {
        showSideDrawer: false,
    }

    SideDrawerClosedHandler = () => {
        this.setState({
            showSideDrawer: false,
        });
    }

    SideDrawerOpenHandler = () => {
 
        this.setState((prevState) => {
           return{showSideDrawer: !prevState.showSideDrawer}
        }
        );
    }

    render() {
        return(
            <Aux>
            <Toolbar
                isAuth={this.props.isAuthenticated}
                sideDrawerToggleClick={this.SideDrawerOpenHandler} />
            <SideDrawer isAuth={this.props.isAuthenticated} open={this.state.showSideDrawer} closed={this.SideDrawerClosedHandler} />
        <main className={classes.Content}>
            {this.props.children}
        </main>
        </Aux>
        );
    }

}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null,
    }
}

export default connect(mapStateToProps)(Layout);