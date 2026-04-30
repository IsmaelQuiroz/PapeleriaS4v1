import { AppBar, Container, Icon, IconButton, Link, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from '../../theme/useStyle';

const MenuAppBar = () => {
    const classes = useStyles();

    return(
        <div>
            <AppBar position="static" className={classes.appBar}>
                <Container>
                    <Toolbar>
                        <div className={classes.sectionMobile}>
                            <IconButton color='inherit'>
                                <Icon fontSize='large'>menu</Icon>
                            </IconButton>
                        </div>
                        {/*aqui va el Drawer*/}
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