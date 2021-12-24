// data
import cards from "./constants/CardData.json";

// styling
import { makeStyles } from "@mui/styles";

// components
import { TarotBoard } from "./components/TarotBoard";

// utils
import { drawRandom } from "./utils/draw";

const useStyles = makeStyles({
  app: {
    textAlign: "center",
    backgroundColor: "#222222",
    fontSize: "calc(10px + 2vmin)",
    color: "#cccccc",
    minHeight: "100vh",
    width: "100%"
  },
  header: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  }
});

function App() {
  const classes = useStyles();

  return (
    <div className={classes.app}>
      <header className={classes.header}>
        <h1>Tarot Board</h1>
      </header>
      <TarotBoard cards={drawRandom(3, cards)} />
    </div>
  );
}

export default App;
