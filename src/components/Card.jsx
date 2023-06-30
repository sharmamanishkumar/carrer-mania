import { Button, Grid } from "@mui/material";
import React from "react";
// import Main2 from "../images/main2.png";
import Card1poligon from "../images/card1poligon.png";
// import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import Line from "../images/Line.png";
function Card({
  title,
  paraOne,
  paraTwo,
  paraThree,
  paraFour,
  cardImg,
  btname,
  poliGoneIcon,
}) {
  return (
    <>
      <Grid container className="">
        <Grid item className="boxOne">
          <Grid container item className="imgBox">
            <img src={cardImg} className="img11" />
          </Grid>
          {/* <hr /> */}
          <Grid item className="poligone">
            <img src={poliGoneIcon} />
          </Grid>
          <Grid item className="glass">
            <h1>{title}</h1>
            <img src={Line} />
          </Grid>
          {/* <div className="cardline"></div> */}
          <Grid item className="descBox1">
            <p className="art">{paraOne}</p>
            <p className="containr">{paraTwo}</p>
            <p className="containr1">{paraThree}</p>
            <p className="containr1">{paraFour}</p>
            <Grid container className="btnCardCont">
              <Grid item className="btnCard1">
                <Button>
                  <div className="icon">
                    {/* <PlayCircleOutlineIcon /> */}
                    <p className="btnName"> {btname}</p>
                  </div>
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Card;
