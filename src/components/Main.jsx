import React from "react";
import "./carrarmania.css";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import handshake from "../images/handshake.png";
import Header from "../components/Header";

// import  from "../images/main2.png";
function Main() {
  return (
    <>
      <Grid container className="image-container">
        <Grid item className="banner">
          <Header />
          <div className="updivBlur">
            <Grid container className="banner-text">
              <Grid container className="intri">
                <Grid item className="intridusing">
                  <p className="intro">
                    <span>
                      <img src="wave.png" alt="" className="img1" />
                    </span>
                    Introducing Next Generation Classroom
                  </p>
                </Grid>
              </Grid>
              <p className="heading">Make Your</p>
              <Grid container className="mobivhead">
                <p className="heading1">Classroom</p>
                <p className="hybrid"> Hybrid</p>
                {/* <Grid item>
                <p className="heading">Make Your</p>
              </Grid>
              <Grid item>
                <p className="heading1">Classroom</p>
                <p className="hybrid"> Hybrid</p>
              </Grid> */}
              </Grid>

              <Grid />
              <Grid container direction="column">
                <Grid item>
                  <p className="desc">
                    Explore CareerManiaa's Hybrid Learning Stations. Create a
                    dedicated online space in your classroom where students can
                    access online materials, participate in online discussions,
                    or work on individualized online activities. Ideally, these
                    workstations should be equipped with computers or tablets
                    and provide a sufficient degree of privacy for focused work.
                  </p>
                </Grid>
                <Grid item className="btnitem">
                  <Button className="btn">
                    <img src={handshake} alt="" />
                    Claim Demo
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </div>
          <div className="bottomBox">
            <div className="linemainbig">
              {/* <h1 color="white">vkljvkvnkvl</h1> */}
              <hr />
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  );
}
export default Main;
