import { Button, Container, Grid, TextField, Typography } from '@material-ui/core';
import React from 'react'
import { useEffect, useRef } from 'react';
import { useState } from 'react';
import { getCategoryById, updateCategories } from '../../../actions/CategoryActions';
import useStyles from '../../../theme/useStyle';

const EditCategory = (props) => {
    const inputReff = useRef(null);
    const [category, setCategory] = useState({
        id: 0,
        name: ""
    });

    useEffect( () => {
        const id = props.match.params.id;
        const getCategoryByIdAsync =  async () => {
            const response = await getCategoryById(id);
            console.log("response.data By ID",response.data);
            setCategory(response.data);
        }

        getCategoryByIdAsync();
        inputReff.current.focus();
    },[])

    const updateItem = async () => {
        //console.log("id from state", category.id); --6
        //const id = props.match.params.id; 
        //console.log("id from url",id) --6
        const response = await updateCategories(category, category.id);
        props.history.push("/admin/categories/");
    }

    const handleChange =(e) => {
        const { name, value } = e.target;
        setCategory( (prev) => ({
            ...prev,
            [name] : value
        }));
    }

    const cls = useStyles();
    return (
        <Container className={cls.containermt}>
            <Grid container justify="center">
                <Grid item lg={6} sm={12}>
                    <Typography variant="h4" className={cls.text_title}>
                        Edit Category
                    </Typography>
               
                <form onSubmit={ (e) => e.preventDefault()} className={cls.form}>
                    <TextField 
                        label="Name"
                        variant="outlined"
                        value={category.name}
                        fullWidth
                        name="name"
                        className={cls.gridmb}
                        InputLabelProps={{
                            shrink: true
                        }}
                        onChange={handleChange}
                        inputRef={inputReff}
                    />
                    <Button variant="contained"
                    color="primary"
                    onClick={updateItem} >
                    UPDATE
                    </Button>
                </form>
                </Grid>
            </Grid>
        </Container>
    )
}

export default EditCategory;