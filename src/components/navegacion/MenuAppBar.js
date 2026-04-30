import { AppBar, Container, Drawer, Icon, IconButton, Link, List, Toolbar, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import useStyles from '../../theme/useStyle';
import MenuMovil from './movil/MenuMovil';

const MenuAppBar = () => {
    const classes = useStyles();

    const [open, setOpen] = useState(false);
    const openToggle = () => {
        setOpen(true);
    }
    const closeToggle = () => {
        setOpen(false);
    }

    return(
        <div>
            <AppBar position="static" className={classes.appBar}>
                <Container>
                    <Toolbar>
                        <div className={classes.sectionMobile}>
                            <IconButton color='inherit' onClick={openToggle}>
                                <Icon fontSize='large'>menu</Icon>
                            </IconButton>
                        </div>
                        {/*aqui va el Drawer*/}
                        <Drawer open={open} onClose={closeToggle}>
                            <div className={classes.list}>
                                <List>
                                    <MenuMovil clickHandler={closeToggle}/>
                                </List>
                            </div>
                        </Drawer>

                        <div className={classes.grow}>
                           <Link to="/" color="inherit" className={classes.linkAppBarLogo} underline="none">
                                <Icon className={classes.mr} fontSize="large">store</Icon>
                                <Typography variant="h5">PapeleríaS4 SHOP</Typography>
                           </Link> 
                        </div>
                        <div className={classes.sectionDesktop}>
                            Menu Cliente
                            Menu Admin
                        </div>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    )
}

export default MenuAppBar;