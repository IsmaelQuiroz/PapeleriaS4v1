import {
  Avatar,
  Collapse,
  Icon,
  List,
  ListItem,
  ListItemText,
  Link,
  ListItemIcon,
} from "@material-ui/core";
import React from "react";
import { useState } from "react";
import useStyles from "../../../theme/useStyle";

const MenuMovil = (props) => {
  const defaultImage =
    "https://i.pinimg.com/736x/88/52/7d/88527d9e87b400a4f5f78b3da0208e1b.jpg";
  const [openCliente, setOpenCliente] = useState(false);
  const [openAdmin, setOpenAdmin] = useState(false);
  const [openTools, setOpenTools] = useState(false);

  const handleClickCliente = () => {
    setOpenCliente((prevOpen) => !prevOpen);
  };

  const handleClickAdmin = () => {
    setOpenAdmin((prevOpen) => !prevOpen);
  };

  const handleClickTools = () => {
    setOpenTools( (prevOpen) => !prevOpen);
  };

  const classes = useStyles();
  return (
    <>
      <ListItem button onClick={handleClickCliente} className={classes.ListItem}>
        <div className={classes.linkAppBarMobile}>
          <Avatar
            alt="mi imagen"
            className={classes.avatarPerfilAppBar}
            src={defaultImage}
          />
          <ListItemText>No Sesion</ListItemText>
          <Icon>keyboard_arrow_down</Icon>
        </div>
      </ListItem>
      <Collapse component="li" in={openCliente} timeout="auto" unmountExit>
        <List disablePadding>
          <ListItem button className={classes.listSubItem} onClick={props.clickHandler}>
            <Link className={classes.linkAppBarMobile} to="/perfil">
              <ListItemIcon className={classes.ListItemIcon}>
                <Icon>person</Icon>
              </ListItemIcon>
              <ListItemText>Mi Perfil</ListItemText>
            </Link>
          </ListItem>  
        </List>
      </Collapse>

      {/*Starts ADMIN*/}

      <ListItem button onClick={handleClickAdmin} className={classes.ListItem}>
        <div className={classes.linkAppBarMobile}>
          <ListItemIcon className={classes.ListItemIcon}>
            <Icon>admin_panel_settings</Icon>
          </ListItemIcon>
          <ListItemText>Admin</ListItemText>
          <Icon>keyboard_arrow_down</Icon>
        </div>
      </ListItem>
      <Collapse component="li" in={openAdmin} timeout="auto" unmountOnExit>
        <List disablePadding>
          <ListItem button className={classes.listSubItem} 
            onClick={props.clickHandler}>{/**click para que se oculte el menu */}
            <Link className={classes.linkAppBarMobile} to="/admin/Usuarios">
              <ListItemIcon className={classes.ListItemIcon}>
                <Icon>group</Icon>
              </ListItemIcon>
              <ListItemText>Usuarios</ListItemText>
            </Link>
          </ListItem>
          <ListItem button className={classes.listSubItem} onClick={props.clickHandler}>
            <Link className={classes.linkAppBarMobile} to="/admin/listaCategorias">
              <ListItemIcon className={classes.ListItemIcon}>
                <Icon>scatter_plot</Icon>
              </ListItemIcon>
              <ListItemText>Categories</ListItemText>
            </Link>
          </ListItem>
          <ListItem button className={classes.listSubItem} onClick={props.clickHandler} >
            <Link className={classes.linkAppBarMobile} to="/admin/listaMonographs" >
              <ListItemIcon className={classes.ListItemIcon}>
                <Icon>toc</Icon>
              </ListItemIcon>
              <ListItemText>Monographs</ListItemText>
            </Link>
          </ListItem>
        </List>
      </Collapse>

      {/*Ends ADMIN */}


    {/*TOOLS */}
    <ListItem button onClick={handleClickTools} className={classes.ListItem}>
        <div className={classes.linkAppBarMobile}>
            <ListItemIcon className={classes.ListItemIcon}>
                <Icon>home_repair_service_icon</Icon>
            </ListItemIcon>
            <ListItemText>Tools</ListItemText>
            <Icon>keyboard_arrow_down</Icon>
        </div>
    </ListItem>
    <Collapse component="li" in={openTools} timeout="auto" unmountOnExit>
        <List disablePadding>
        <ListItem button className={classes.listSubItem} onClick={props.clickHandler}>
            <Link className={classes.linkAppBarMobile} to="/findMonographs">
                <ListItemIcon className={classes.ListItemIcon}>
                    <Icon>manage_search</Icon>
                </ListItemIcon>
                <ListItemText>Find</ListItemText>
            </Link>
        </ListItem>
        </List>
    </Collapse>

       
    {/******/}

    </>
  );
};

export default MenuMovil;
