import { Button, Icon, ListItem, ListItemIcon, ListItemText, Menu, MenuItem } from '@material-ui/core';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import React from 'react';
import { useState } from 'react';
import useStyles from '../../../theme/useStyle';

const MenuAdmin = () => {

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    }

    const handleClose = () =>{
        setAnchorEl(null);
    }

    const cls = useStyles();
    return(
        <>
            <Button color='inherit' className={cls.buttonIcon}
            onClick={handleClick}>
                <div className={cls.linkAppBarDesktop}>
                    <Icon className={cls.mr}>admin_panel_settings</Icon>
                    Admin
                    <Icon>keyboard_arrow_down</Icon>
                </div>
            </Button>

            <Menu elevationm={2}
            anchorEl={anchorEl}
            getContentAnchorEl={null}
            anchorOrigin={
                {vertical: "bottom", horizontal:"center"}
            }
            transformOrigin={
                {vertical:"top", horizontal:"center"}
            }
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}>
                {/*Elementos Hijos */}
                <MenuItem className={cls.ListItem} onClick={handleClose}>
                    <Link className={cls.linkAppBarMobile} to="/admin/categories">
                        <ListItemIcon className={cls.ListItemIcon}>
                            <Icon>scatter_plot</Icon>
                        </ListItemIcon>
                        <ListItemText>
                            Categories
                        </ListItemText>
                    </Link>
                </MenuItem>

            </Menu>

        </>
    )
}

export default MenuAdmin;