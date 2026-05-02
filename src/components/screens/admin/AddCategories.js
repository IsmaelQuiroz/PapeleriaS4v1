import { Button, Container, Grid, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { registerCategory } from '../../../actions/CategoryActions';
import useStyles from '../../../theme/useStyle';

const AddCategories = () => {
    const[item, setItem] = useState({
        id: 0,
        name:''
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setItem({
            name : value
        })
    }

    const saveItem = async () => {
        const result = await registerCategory(item);
    }   

    const cls = useStyles();
    return(
        <Container className={cls.containermt}>
            <Grid container justify="center">
                <Grid item sm={6} xs={12}>
                    <Typography variant="h4" className={cls.text_title}>
                        Add Categories
                    </Typography>
                    <form onSubmit={ (e) => e.preventDefault() } className={cls.form}>
                        <TextField
                            label="Category Name"
                            variant="outlined"
                            fullWidth
                            className={cls.gridmb}
                            InputLabelProps={
                                {
                                    shrink: true
                                }
                            }
                            name="name"
                            value={item.name}
                            onChange={handleChange}
                        />

                        <Button variant="contained" color="primary" onClick={saveItem}>
                            ADD
                        </Button>
                    </form>                                      
                </Grid>
            </Grid>
        </Container>
    )
}


export default AddCategories;