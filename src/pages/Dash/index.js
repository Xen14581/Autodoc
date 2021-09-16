import React from "react";
import Navbar from "../../components/Navbar";
import { makeStyles, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar
}))

const Dash = () => {
  const classes = useStyles();

  return (
    <>
      <Navbar />
      <div className={classes.toolbar} />
      <Grid container>
      </Grid>
    </>
  );
};

export default Dash;
