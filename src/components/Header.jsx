import React from "react";
import { Button, Grid } from "@mui/material";
import "./carrarmania.css";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

function Header() {
  return (
    <>
      <Grid container className="header-container">
        {/* <Grid item>career maniaa</Grid> */}

        {/* <Grid container className="container1" > */}
        <Grid item>
          <Grid container>
            <Grid item className="imageDown">
              <img src="./logo.png" />
            </Grid>
            <Grid item className="headCar">
              CareerManiaa
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container className="hambarger" item>
            <MenuRoundedIcon />
          </Grid>
          <Grid container className="rightCont">
            <Grid item className="contact">
              Learn More
            </Grid>
            <Grid item className="contact">
              Example
            </Grid>
            <Grid item className="contact">
              Updates
            </Grid>
            <Grid item className="contact">
              Contact
            </Grid>
            <Grid item>
              <Button className="headbtn">Early access</Button>
            </Grid>
          </Grid>
        </Grid>
        {/* </Grid> */}
      </Grid>
    </>
  );
}

  export default Header;
