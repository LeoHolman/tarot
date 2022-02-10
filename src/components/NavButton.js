import React from 'react';
// styling
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
    button: {
        padding: '8px 20px',
    }
});

export const NavButton = ({label, onClick}) => {
    const classes = useStyles();
    return (
        <button className={classes.button} onClick={onClick}>{label}</button>
    )
}