import React from 'react';
// styling
import { makeStyles } from "@mui/styles";

// components
import { TarotCard } from './TarotCard';

const useStyles = makeStyles({
    mindBodySpiritSpread: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
    }
})
export const MindBodySpiritSpread = ({cards}) => {
    const classes = useStyles();
    return (
        <div className={classes.mindBodySpiritSpread}>
            {cards && 
                <>
                <div></div>
                <TarotCard
                  key={`${cards[0].number}-of-${cards[0].suit}-${cards[0].name}`}
                  card={cards[0]}
                />
                <div></div>
                <TarotCard
                  key={`${cards[1].number}-of-${cards[1].suit}-${cards[1].name}`}
                  card={cards[1]}
                />
                <div></div>
                <TarotCard
                  key={`${cards[2].number}-of-${cards[2].suit}-${cards[2].name}`}
                  card={cards[2]}
                />
                </>
            
            }

        </div>
    )
}