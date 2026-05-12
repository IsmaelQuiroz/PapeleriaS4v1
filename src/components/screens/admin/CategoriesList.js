import { Button, Container, Grid, Icon, TableCell, TableContainer, TableHead, TableRow, Typography, Table, TableBody } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import React, { useState, useEffect } from 'react';
import { deleteCategory, getCategories } from '../../../actions/CategoryActions';
import useStyles from '../../../theme/useStyle';


const CategoriesList = (props) => {
  
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
            const response = await getCategories();
            setCategoriesList(response.data);
       };
       
       getCategoriesList();
       
    },[categoriesList.length]);
    
    const classes = useStyles();
    return (
        <Container className={classes.containermt}>
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
                                    <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={ () => editItem(item.id)}>
                                            <Icon>edit</Icon>
                                    </Button>
                                    <Button
                                    variant="contained"
                                    color="secondary"
                                    onClick={ () => deleteItem(item.id)}>
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