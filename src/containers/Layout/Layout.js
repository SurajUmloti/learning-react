import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {

    state = {
        showSideDrawer: false
    }

    SideDrawerToggle = (drawerState) => {
        this.setState({showSideDrawer: drawerState});
    }

    render() {
        return (
            <Aux>
                {/* <div>Toolbar, Sidebar, Backdrop</div> */}
                <Toolbar open={() => this.SideDrawerToggle(true)}/>
                <SideDrawer show={this.state.showSideDrawer} 
                    closed={() => this.SideDrawerToggle(false)}
                />
                <main className={classes.Page}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

export default Layout;