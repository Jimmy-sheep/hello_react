import React, { useState } from 'react';
import { Toolbar, makeStyles, IconButton, Drawer } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import HomeButton from './HomeButton';
import PagesList from './PagesList';

const HeaderMobile = () => {
    const [state, setState] = useState({
        drawerOpen: false,
    });

    const { drawerOpen } = state;

    const handleDrawerOpen = () =>
        setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
        setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
        <Toolbar>
            <IconButton
                {...{
                    edge: 'start',
                    color: 'inherit',
                    'aria-label': 'menu',
                    'aria-haspopup': 'true',
                    onClick: handleDrawerOpen,
                }}
            >
                <MenuIcon />
            </IconButton>
            <Drawer
                {...{
                    anchor: 'left',
                    open: drawerOpen,
                    onClose: handleDrawerClose,
                }}
            >
                <div>{PagesList()}</div>
            </Drawer>
            <div>{HomeButton()}</div>
        </Toolbar>
    );
};

export default HeaderMobile;