import React from 'react';
import { Button } from '@material-ui/core';
import classes from './Button.module.scss';

const button = (prop: any) => (

    <Button className={classes.Button} variant="contained" color="primary">
        Hello World
    </Button>

)

export default button
