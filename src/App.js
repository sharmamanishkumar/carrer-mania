import logo from "./logo.svg";
import "./App.css";
import Main from "./components/Main";
import Card from "./components/Card";
import { Grid } from "@mui/material";
import "./components/carrarmania.css";

function App() {
  return (
    <>
      <Main />
      <Grid container className="carditem">
        <Grid item className="card-item">
          <Card
            title="Track your Batches"
            paraOne="Mastering the Art of Prompt Writing"
            paraTwo=" Prompt writing involves crafting clear and"
            paraThree="engaging prompts, while using images to"
            paraFour="create a visual representation of the idea or ..."
            cardImg="main2.png"
            btname="Join Discard"
            poliGoneIcon="card1poligon.png"
          />
        </Grid>
        <Grid item className="card-item">
          <Card
            title="Rapidly build your Team"
            paraOne="Streamlining Collaborative Workflows"
            paraTwo=" Use the Midjourney Bot on Discord to"
            paraThree="effortlessly generate designs and artworks"
            paraFour=" for your project. Simply enter a command ..."
            cardImg="card2.png"
            btname="Explore Now"
            poliGoneIcon="poligoncard2.png"
          />
        </Grid>
        <Grid item className="card-item">
          <Card
            title="Hybrid Work station "
            paraOne="Unraveling the Mystery of Version"
            paraTwo="Explore key concepts like versions"
            paraThree="parameters when using Midjourney. Versions"
            paraFour="refer to different variations of a design, ..."
            cardImg="card3.png"
            btname="View Documents"
            poliGoneIcon="poligoncrad3.png"
          />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
