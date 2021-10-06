import React from "react";
import { AppBar, Grid, Toolbar, useMediaQuery } from "@material-ui/core";
import { Link } from "react-router-dom";
import Hamburger from "hamburger-react";
import { useDispatch, useSelector } from "react-redux";
import placeholder from "../../assets/placeholder_robot.png";

const Navbar = () => {
  const val = useSelector((state) => state.hamburger.Open);
  const dispatch = useDispatch();
  return (
    <AppBar
      position="fixed"
      id="mynav"
      style={{
        backgroundColor: "white",
        zIndex: "100",
        boxShadow: `0 2px 4px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 8%)`,
        webbkitBoxShadow: `-1px 7px 28px -1px rgba(0,0,0,0.15)`,
        MozBoxShadow: `-1px 7px 28px -1px rgba(0,0,0,0.15)`,
      }}
    >
      <Toolbar>
        <Grid
          container
          spacing={1}
          style={{ height: "96%" }}
          alignItems="center"
          justifyContent="flex-end"
        >
          <Grid item xs={4} md={6} lg={6}>
            <Link to="/">
              <img src={placeholder} style={{ height: "4em" }} alt="LOGO" />
            </Link>
          </Grid>
          <Grid container item xs={8} md={6} lg={6} justifyContent="flex-end">
            <Hamburger
              toggled={val}
              toggle={() => dispatch({ type: "TOGGLE" })}
              rounded
              direction="right"
              color="rgb(2, 36, 96)"
              size={20}
            />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
