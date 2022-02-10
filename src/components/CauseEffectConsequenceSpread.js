import React from 'react';

// components
import { TarotCard } from "./TarotCard";
// styles
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
    spreadAlignment: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        columnGap: "2em",
    }
});

export const CauseEffectConsequence = ({cards}) => {
    const classes = useStyles();

    return (
        <div className={classes.spreadAlignment}>
        {cards &&
            cards.map(card => {
              return (
                <TarotCard
                  key={`${card.number}-of-${card.suit}-${card.name}`}
                  card={card}
                />
              );
            })}
</div>
    )
}