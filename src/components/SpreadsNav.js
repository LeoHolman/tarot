import React from 'react';
import { NavButton } from './NavButton';

// styling
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
    navContainer: {
        display: 'flex',
        justifyContent: 'space-around'
    }
})

export const SpreadsNav = () => {
    const classes = useStyles();
    return (
        <nav className={classes.navContainer}>
                <NavButton label="Past-Present-Future"></NavButton>
                <NavButton label="Mind-Body-Spirit"></NavButton>
                <NavButton label="Cause-Effect-Consequence"></NavButton>
        </nav>
    )
}