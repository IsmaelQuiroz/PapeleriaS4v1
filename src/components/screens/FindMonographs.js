import { Button, Container, Grid, Icon, TableCell, TableContainer, TableHead, TableRow, Typography, Table, TableBody } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import React, { useState, useEffect } from 'react';
import useStyles from '../../theme/useStyle';


const FindMonographs = (props) => {
  
        //Respuesta del server
        const [paginatedList, setListaPaginada] = useState({
            count: 0,
            pageIndex: 0,
            pageSize:0,
            pageCount: 0,
            data:[]
        });

        const [requestCategories, setRequestCategories] = useState({
            pageIndex : 1,
            pageSize: 5,
            search:''
        });

    const addItem =() => {
        props.history.push("/admin/addMonograph");
    }

    const editItem = (id) => {
        props.history.push("admin/editCategory"+id);
    }

    //for page change
    const handleChange = (event, value) => {
        setRequestCategories( (anterior) => ({
            ...anterior,
            pageIndex: value
        }));
    };

    //update list of categories
    useEffect( () => {

    },[requestCategories]);
    
    const classes = useStyles();
    return (
        <Container className={classes.containermt}>
            <Grid container>
                <Grid item lg={6} sm={6} xs={12}>
                    <Typography variant="h4" className={classes.text_title}>Search Monographs</Typography>
                </Grid>
                <Grid item lg={6} sm={6} xs={12}>
                    <Button variant="contained"
                        color="inherit"
                        className={classes.buttonAgregar}
                        onClick={addItem}>
                            <Icon>add</Icon>
                            Add Monograph
                    </Button>
                </Grid>
            </Grid>

            {/**Agregar aqui control de busqueda de Monografias y su boton a la derecha */}

            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Code</TableCell>
                            <TableCell>Title Name</TableCell>
                            <TableCell>Category</TableCell>
                            <TableCell>Keyword</TableCell>
                            <TableCell>Id</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {paginatedList.data.map( (item) => (
                            <TableRow key={item.id}>
                                <TableCell>{item.code}</TableCell>
                                <TableCell>{item.name}</TableCell>
                                <TableCell>{item.category}</TableCell>
                                <TableCell>{item.Keyword}</TableCell>
                                <TableCell>{item.id}</TableCell>
                                <TableCell>
                                    <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={ () => editItem(item.id)}>
                                            <Icon>edit</Icon>
                                    </Button>
                                    <Button
                                    variant="contained"
                                    color="secondary">
                                          <Icon>delete</Icon>  
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ) )}
                    </TableBody>
                </Table>
            </TableContainer>
            <Pagination count={paginatedList.pageCount} page={paginatedList.pageIndex} onChange={handleChange}/>
        </Container>
    )
}

export default FindMonographs;