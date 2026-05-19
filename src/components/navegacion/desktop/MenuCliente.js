import {  Icon, Button } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import useStyles from '../../../theme/useStyle';

const MenuCliente = () => {

    const classes = useStyles();

    return(
        <>
            <Button color="inherit" className={classes.buttonIcon}>
                <Link className={classes.linkAppBarDesktop} to="/findMonographs">
                    <Icon className={classes.mr}>manage_search</Icon>
                        Find
                </Link>
            </Button>

        </>
    )
};

export default MenuCliente;