import { Container, FormControl, Grid, Select, TextField, Typography,InputLabel, MenuItem, CircularProgress, Button } from '@material-ui/core';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { getCategories } from '../../../actions/CategoryActions';
import { getMonographByIdAction, updateMonographAction } from '../../../actions/MonographActions';
import useStyles from '../../../theme/useStyle';

const EditMonograph = (props) => {
    const [item, setItem] = useState({
        id: 0,
        title:'',
        code : 0,
        stock: 0,
        keyword : "",
        productId: 1,
        productName :"Planillas o Monografías",
        categoryId: 0
    });

    const [categoryIdSelected, setCategoryIdSelected] = useState("");
    const [categoryData, setCategoryData] = useState([]);
    const [dataLoading, setDataLoading] = useState(true);

    const getCategoryListData = async() =>{
        const response = await getCategories();
        setCategoryData(response.data);        
        setDataLoading(false);
        //console.log("getCategoryListData",response.data);
    };

    useEffect( () => {
        getCategoryListData();     

        const id = props.match.params.id;
        const getMonographByIdAsync = async () => {
            const response = await getMonographByIdAction(id);
            setItem(response.data);
            setCategoryIdSelected(response.data.categoryId);
        }

        getMonographByIdAsync();
       
       // console.log("item.categoryId",item.categoryId);
        //setCategoryIdSelected(item.categoryId);

    },[]);

    const handleChange= (e) => {
        const { name , value} = e.target;
        setItem( prev => ({
            ...prev,
            [name]: value
        }) );
    }

    const handleCategoryIdChange = event => {
        setCategoryIdSelected(event.target.value);
    }

    const updateItem = async () => {
        //const id = props.match.params.id;
        item.categoryId = categoryIdSelected;
        const response = await updateMonographAction(item,item.id);
        props.history.push("/findMonographs");
    }

    const cancelAction = () => {
        props.history.push("/findMonographs");
    }

    const cls = useStyles();
    return(
        <Container className={cls.containermt}>
            <Grid container justify="center">
                <Grid item sm={6} xs={12}>
                    <Typography variant="h4" className={cls.text_title}>Edit Monograph</Typography>

                <form onSubmit={ (e) => e.preventDefault()} className={cls.form}>
                    <TextField
                    label="Title"
                    name="title"
                    value={item.title}
                    onChange={handleChange}
                    fullWidth
                    className={cls.gridmb}
                    InputLabelProps ={
                        {shrink : true}
                    }
                    variant="outlined"
                    />

                    <TextField
                    label="Code"
                    name="code"
                    value={item.code}
                    onChange={handleChange}
                    variant="outlined"
                    fullWidth
                    className={cls.gridmb}
                    InputLabelProps={
                        {shrink : true}
                    }
                    />   

                    <TextField 
                    label="Keyword"
                    name="keyword"
                    onChange={handleChange}
                    value={item.keyword}
                    fullWidth
                    className={cls.gridmb}
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true
                    }}
                    />

                    <FormControl className={cls.formControl}>
                        <InputLabel id="category-select-label">Select Category</InputLabel>
                        <Select
                            labelId="category-select-label"
                            id="category-select"
                            value={categoryIdSelected}
                            onChange={handleCategoryIdChange}
                            label="Select Category"
                        >
                            {dataLoading ? (
                                <MenuItem disabled>
                                    <CircularProgress size={20} aria-label="Loading..."/>Loading...
                                </MenuItem>
                            ) : (
                                categoryData.map((itemCategory) => (
                                    <MenuItem key={itemCategory.id} value={itemCategory.id}>
                                        {itemCategory.name}
                                    </MenuItem>
                                ))
                            )}
                        </Select>
                    </FormControl> 

                    <TextField 
                    label="Stock"
                    name="stock"
                    value={item.stock}
                    onChange={handleChange}
                    fullWidth
                    className={cls.gridmb}
                    variant='outlined'
                    InputLabelProps={{
                        shrink: true
                    }}
                    />

                    <TextField
                    label="Producto Asociado"
                    name="productName"
                    value={item.productName}
                    fullWidth
                    disabled
                    variant="filled"
                    />

                <Button variant="contained" color="primary" onClick={updateItem} spacing className={cls.buttonAnterior}>
                    SAVE
                </Button>
                <Button variant="contained" color="secundary" onClick={cancelAction}>
                    CANCEL
                </Button>
                    
                </form>

                </Grid>
            </Grid>
        </Container>
    )
};

export default EditMonograph;