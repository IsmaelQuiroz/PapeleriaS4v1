import { Button, Container, Grid, Icon, TableCell, TableContainer, TableHead, TableRow, Typography, Table, TableBody, Dialog, DialogTitle, DialogContent,DialogContentText,DialogActions } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import React, { useState, useEffect } from 'react';
import { deleteCategory, getCategories } from '../../../actions/CategoryActions';
import useStyles from '../../../theme/useStyle';
import { useStatateValueMy } from '../../../contexto/mystore';


const CategoriesList = (props) => {
    const [{openSnackBarFormMain}, dispatch] = useStatateValueMy();
    const [open, setOpen] = useState(false);
    const [idToDelete, setIdToDelete] = useState(0);
    //Respuesta del server
    const [categoriesList, setCategoriesList] = useState([]);

    // const [paginatedList, setListaPaginada] = useState({
    //     count: 0,
    //     pageIndex: 0,
    //     pageSize:0,
    //     pageCount: 0,
    //     data:[]
    // });

    // const [requestCategories, setRequestCategories] = useState({
    //     pageIndex : 1,
    //     pageSize: 5,
    //     search:''
    // });

    const handleClickOpen = (id) => {
        setIdToDelete(id);
        setOpen(true);
    }

    const handleClose = () => {
        setIdToDelete(0);
        setOpen(false);
    }

    const handleDelete = () => {
        deleteItem(idToDelete);
        setOpen(false);
    }

    const addItem =() => {
        props.history.push("/admin/addCategory");
    }

    const editItem = (id) => {
        props.history.push("/admin/category/"+id);
    }

    const deleteItem = async (id) => {
        const response = await deleteCategory(id);
        if(response.data){
            const categoriesListRefresh = await getCategories();
            setCategoriesList(categoriesListRefresh.data);
        }
    }

    //for page change
    // const handleChange = (event, value) => {
    //     setRequestCategories( (anterior) => ({
    //         ...anterior,
    //         pageIndex: value
    //     }));
    // };

    //update list of categories
    useEffect( () => {
             
    const getCategoriesList = async  () => {
        try{
                const response = await getCategories();
                if(response == null){
                    dispatch({
                        type: "OPEN_SNACKBAR",
                        openMensaje: {
                            open: true,
                            mensaje:" No fue posible procesar la solicitud",
                            error: true
                        }
                    })
                }
                else{
                    setCategoriesList(response.data);
                }                
        }
       catch(error){
         console.log("el error: ",error);
        }
    };
       
    getCategoriesList();
     
       
    },[categoriesList.length]);
    
    const classes = useStyles();
    return (
        <Container className={classes.containermt}>

    <Dialog open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                role="alertdialog">
            <DialogTitle id="alert-dialog-title">
                    {"Confirm Deletion"}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Monographs related to this category, it will be automatically updated to "General" category
                    Are you sure to Delete this Category? 
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button color="primary" onClick={handleClose} autoFocus >
                    Cancel
                </Button>
                <Button color="secondary" onClick={handleDelete}>
                    Confirm Elimination
                </Button>
            </DialogActions>
    </Dialog>

            <Grid container>
                <Grid item lg={6} sm={6} xs={12}>
                    <Typography variant="h4" className={classes.text_title}>Categories</Typography>
                </Grid>
                <Grid item lg={6} sm={6} xs={12}>
                    <Button variant="contained"
                        color="inherit"
                        className={classes.buttonAgregar}
                        onClick={addItem}>
                            <Icon>add</Icon>
                            Add Category
                    </Button>
                </Grid>
            </Grid>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Category Name</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        { console.log("datos", categoriesList)}   
                        { categoriesList.map( (item) => (
                            <TableRow key={item.id}>
                                <TableCell>{item.id}</TableCell>
                                <TableCell>{item.name}</TableCell>
                                <TableCell>
                                    <Button className={classes.iconTableBox}
                                    variant="contained"
                                    color="primary"
                                    onClick={ () => editItem(item.id)}>
                                            <Icon>edit</Icon>
                                    </Button>
                                    <Button className={classes.iconTableBox}
                                    variant="contained"
                                    color="secondary"
                                    onClick={ () => handleClickOpen(item.id)}>
                                          <Icon>delete</Icon>  
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ) )}
                    </TableBody>
                </Table>
            </TableContainer>
            {/* <Pagination count={paginatedList.pageCount} page={paginatedList.pageIndex} onChange={handleChange}/> */}
        </Container>
    )
}

export default CategoriesList;