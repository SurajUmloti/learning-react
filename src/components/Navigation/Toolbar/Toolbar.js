import React from 'react';
import classes from './Toolbar.css';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = (props) => {
    return  <header className={classes.Toolbar}>
        <div onClick={props.open}>Menu</div>
        <div>Logo</div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
};

export default toolbar;