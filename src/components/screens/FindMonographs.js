import { Button, Container, Grid, Icon, TableCell, TableContainer, TableHead, TableRow, Typography, Table, TableBody, TextField, Box, InputAdornment, IconButton, DialogContentText,DialogContent,DialogActions,Dialog,DialogTitle  } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import React, { useState, useEffect, useRef } from 'react';
import { deleteMonographAction, getMonographsListAction } from '../../actions/MonographActions';
import useStyles from '../../theme/useStyle';
import { Clear as ClearIcon}  from '@material-ui/icons';
//import { Search as SearchIcon}  from '@material-ui/icons';


const FindMonographs = (props) => {
        const [open, setOpen] = useState(false);
        const textFieldRef = useRef(null);
        const [idToDelete, setIdToDelete] = useState(0);

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

        //Icon on TextField
        const [filterValue, setFilterValue] = useState('');
        const handleClear = (event) => {
               setFilterValue('');         
        }

        //Respuesta del server
        const [paginationList, setPaginationList] = useState({
            count: 0,
            pageIndex: 0,
            pageSize:0,
            data:[],
            pageCount: 0
        });

        const [requestPagination, setRequestPagination] = useState({
            pageIndex : 1,
            pageSize: 3,
            search: '',
            keyword:''
        });

    const addItem =() => {
        props.history.push("/admin/addMonograph");
    }

    const editItem = (id) => {
        props.history.push("admin/editMonograph/"+id);
    }

    //for page change
    const handleChange = (event, value) => {
        setRequestPagination( (anterior) => ({
            ...anterior,
            pageIndex: value
        }));
        //fnPaginationResponse();
        console.log("requestPagination:", requestPagination);
    };

    const deleteItem = async (id) => {
        const response = await deleteMonographAction(id);
        if(response.data){
            const fnPaginationResponseRefresh = await getMonographsListAction(requestPagination);
            setPaginationList(fnPaginationResponseRefresh.data);
        }
    }

    const handleSubmit = (event) => {       
        event.preventDefault();
        //let criterioBusqueda =  document.getElementById('txtToSearch').value;
        let criterioBusqueda = textFieldRef.current.value;
        requestPagination.keyword = criterioBusqueda;
        requestPagination.search = criterioBusqueda;
        console.log("objeto request",requestPagination);
        fnPaginationResponse();
    }

    const fnPaginationResponse = async () => {
        const response = await getMonographsListAction(requestPagination);
        console.log("monografias", response.data);
        setPaginationList(response.data);
    };


    //update list of categories
    useEffect( () => {              
        //fnPaginationResponse();
        //setCriterioAndBusqueda();
        const efnPaginationResponse = async () => {
            const response = await getMonographsListAction(requestPagination);
            console.log("monografias", response.data);
            setPaginationList(response.data);
        };

        efnPaginationResponse();

    },[requestPagination]);
    
    const classes = useStyles();
    return (
         <Container className={classes.containermt}>

        {/* <Button variant="outlined" onClick={handleClickOpen}>
            Open alert Dialog
         </Button> */}
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
                    Are you sure to Delete this Monograph?, One time to deleted, It will can't revocery
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

            <Box component="form" onSubmit={handleSubmit}>
            <Grid container spacing={3}  className={classes.containerFilters}>
                <Grid item lg={2} sm={12} xs={12}>
                    <Typography variant="h6" className={classes.text_search}>Search by title/keyword:</Typography>
                </Grid>
                <Grid item lg={6} sm={12} xs={12}>
                    <TextField 
                    label="Input a title or keyword"
                    inputRef={textFieldRef}
                    fullWidth
                    variant="outlined"
                    className={classes.inputSearch}
                    value={filterValue}
                    onChange={(e) => setFilterValue(e.target.value)}
                    InputProps={{
                        // startAdornment: (
                        //     <InputAdornment position="start">
                        //            <SearchIcon/> 
                        //     </InputAdornment>
                        // ),
                        endAdornment: filterValue && (
                            <InputAdornment position="end">
                                <IconButton type="submit" onClick={handleClear} size="small">
                                    <ClearIcon/>
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                    />
                </Grid>
                <Grid item lg={2} sm={12} xs={12}>
                    <Button  variant="contained" 
                            color="primary"
                            className={classes.buttonSearch}
                            type="submit">
                        <Icon>search</Icon>        
                    </Button>
                </Grid>
            </Grid>
            </Box>

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
                        {paginationList.data.map( (item) => (
                            <TableRow key={item.id}>
                                <TableCell>{item.code}</TableCell>
                                <TableCell>{item.title}</TableCell>
                                <TableCell>{item.categoryName}</TableCell>
                                <TableCell>{item.keyword}</TableCell>
                                <TableCell>{item.id}</TableCell>
                                <TableCell class={classes.iconTableCell} >
                                    <Button className={classes.iconTableBox}
                                    variant="contained"
                                    color="primary"
                                    onClick={ () => editItem(item.id)}>
                                            <Icon>edit</Icon>
                                    </Button>

                                    <Button  className={classes.iconTableBox}
                                    variant="contained"
                                    color="secondary"
                                    onClick= { () => handleClickOpen(item.id) }>
                                          <Icon>delete</Icon>  
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ) )}
                    </TableBody>
                </Table>
            </TableContainer>
            <Pagination count={paginationList.pageCount} page={paginationList.pageIndex} onChange={handleChange}/>
        </Container>
    )
}

export default FindMonographs;