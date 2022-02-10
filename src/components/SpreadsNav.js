import React from 'react';
import { NavButton } from './NavButton';

// styling
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
    navContainer: {
        display: 'flex',
        justifyContent: 'space-evenly'
    }
})

export const SpreadsNav = ({setSpread}) => {
    const classes = useStyles();
    const setPastPresentFuture = () => {
        setSpread('PastPresentFuture')
    };
    const setMindBodySpirit = () => {
        setSpread('MindBodySpirit')
    };
    const setCauseEffectConsequence = () => {
        setSpread('CauseEffectConsequence')
    };
    return (
        <nav className={classes.navContainer}>
                <NavButton label="Past-Present-Future" onClick={setPastPresentFuture}></NavButton>
                <NavButton label="Mind-Body-Spirit" onClick={setMindBodySpirit}></NavButton>
                <NavButton label="Cause-Effect-Consequence" onClick={setCauseEffectConsequence}></NavButton>
        </nav>
    )
}