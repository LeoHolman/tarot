import React from "react";

// styles
import clsx from "clsx";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  card: {
    borderRadius: "9px",
    borderStyle: "solid",
    borderColor: "#eeeeee",
    padding: "2em 1em"
  }
});

// components
export const TarotCard = ({ card }) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.card, card.inverted && "inverted")}>
      <img className={"card-img"} />
      <h3 className={"card-name"}>{card.name}</h3>
      <p className={"card-text"}>{card.text}</p>
    </div>
  );
};
