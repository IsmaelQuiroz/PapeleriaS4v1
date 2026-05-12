import { Container, Grid, Typography, TextField, FormControl, Select, MenuItem, InputLabel, CircularProgress, Button } from '@material-ui/core';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { getCategories } from '../../../actions/CategoryActions';
import { registerMonograph } from '../../../actions/MonographActions';
import useStyles from '../../../theme/useStyle';
 
const AddMonograph = () => {

    const[item, setItem] = useState({
        id: 0,
        title:'',
        code : 0,
        stock: 0,
        keyword : "",
        productId: 0,
        productName :"",
        categoryId: 0
    });

    //value selected
    const [categoryIdSelected, setCategoryIdSelected] = useState(""); 
    //Data from the API
    const [categoryData, setCategoryData] = useState([]);
    //Load handling status (optional)
    const [dataLoading, setDataLoading] = useState(true);

    useEffect(  () => {
        const getCategoryListData = async () => {
            const response = await getCategories();
            setCategoryData(response.data);
            setDataLoading(false);
        };
        
        getCategoryListData();
         //console.log("estado : ", categoryData);
    },[]) 
    
    const handleCategoryIdChange = event => {
        setCategoryIdSelected(event.target.value);   
    }

        //Monographs Data
        const handleChange = (e) => {
            const {name, value} = e.target;
            setItem({
                [name] : value
            });
        }

        const saveMonograph = async () => {
            item.categoryId = categoryIdSelected;
            const resultado = await registerMonograph(item);

            console.log('respuesta de AddProduct',resultado);
        }


    const cls = useStyles();

    return(
        <Container className={cls.containermt}>
            <Grid container justify="center">
                <Grid item sm={6} xs={12}>
                    <Typography variant="h4" className={cls.text_title}>Add Monographs</Typography>
             
                <form onSubmit={ (e) => e.preventDefault()} className={cls.form}>
                    <TextField 
                    label="Title"
                    variant="outlined"
                    name="title"
                    fullWidth
                    className={cls.gridmb}
                    InputLabelProps={
                        {shrink: true}
                    }
                    value={item.title}
                    onChange={handleChange}
                   />

                   <TextField
                   name="code"
                   label="Code"
                   variant="outlined"
                   onChange={handleChange}
                   value={item.code}
                   fullWidth
                   className={cls.gridmb}
                   InputLabelProps={
                        { shrink: true}
                   } 
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
                        { dataLoading ?  (
                            <MenuItem disabled>
                                <CircularProgress size={20} aria-label="Loading..." /> Loading...
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
                    label="Keyword"
                    name="keyword"
                    onChange={handleChange}
                    value={item.keyword}
                    fullWidth
                    className={cls.gridmb}
                    variant="outlined"
                    InputLabelProps={
                        {shrink : true}
                    }
                    />

                    <TextField
                    label="Producto Asociado"
                    name="productName"
                    value={item.productName}
                    fullWidth
                    onChange={handleChange}
                    disabled
                    variant="filled"
                    classes={cls.gridmb}
                    />

                    <Button variant="contained" color="primary" onClick={saveMonograph} spacing>
                        SAVE
                    </Button>

                </form>
                </Grid>
            </Grid>
        </Container>
    )
}

export default AddMonograph;