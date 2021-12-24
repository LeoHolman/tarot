import React from "react";

// styles
import { makeStyles } from "@mui/styles";

// components
import { TarotCard } from "./TarotCard";

const useStyles = makeStyles({
  board: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    columnGap: "2em",
    backgroundColor: "#111111",
    margin: "1em",
    padding: "3em 1em",
    borderRadius: "9px"
  }
});

export const TarotBoard = ({ cards }) => {
  const classes = useStyles();
  return (
    <div className={classes.board}>
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
  );
};
