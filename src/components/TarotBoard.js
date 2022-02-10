import React, { useState} from "react";

// styles
import { makeStyles } from "@mui/styles";

// components
import { PastPresentFutureSpread } from "./PastPresentFutureSpread";
import { MindBodySpiritSpread } from "./MindBodySpiritSpread";
import { CauseEffectConsequence } from "./CauseEffectConsequenceSpread";

const useStyles = makeStyles({
  board: {
    backgroundColor: "#111111",
    margin: "1em",
    padding: "3em 1em",
    borderRadius: "9px"
  }
});

const renderSpread = (spreadType, cards) => {
  switch(spreadType){
    case 'PastPresentFuture':
      return <PastPresentFutureSpread cards={cards} />
    case 'MindBodySpirit':
      return <MindBodySpiritSpread cards={cards} />
    case 'CauseEffectConsequence':
      return <CauseEffectConsequence cards={cards} />
    default:
      return <PastPresentFutureSpread cards={cards} />
  }
}

export const TarotBoard = ({ cards, spread }) => {
  const classes = useStyles();
  return (
    <div className={classes.board}>
      {spread && renderSpread(spread, cards)
      }
    </div>
  );
};
