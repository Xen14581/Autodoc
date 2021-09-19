import React from "react";
import Navbar from "../../components/Navbar";
import {
  makeStyles,
  Grid,
  Container,
  Typography,
  Divider,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
}));

const Dash = () => {
  const classes = useStyles();

  return (
    <>
      <Container style={{ height: "100vh" }}>
        <Navbar />
        <div className={classes.toolbar} />
        <Grid
          container
          spacing={4}
          alignItems="center"
          justifyContent="center"
          style={{ margin: "5% 0 0 0" }}
        >
          <Grid
            container
            item
            xs={12}
            md={8}
            lg={8}
            direction="column"
            spacing={4}
            alignItems="center"
            justifyContent="center"
          >
            <Grid item xs style={{ width: "90%" }}>
              <div className="neu-paper">
                <Grid
                  container
                  alignItems="center"
                  justifyContent="center"
                  direction="column"
                  style={{ padding: "8%" }}
                >
                  <Grid item style={{ padding: "0 0 3% 0" }}>
                    <Typography
                      variant="h5"
                      style={{
                        fontFamily: "Montserrat, sans serif",
                        fontWeight: "800",
                      }}
                    >
                      Past Appointments
                    </Typography>
                    <Divider />
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="h6"
                      style={{
                        fontFamily: "Montserrat, sans serif",
                        fontWeight: "800",
                      }}
                    >
                      You haven't finished any appointments yet! <br />
                      <Link
                        to="/appointments"
                        style={{ textDecoration: "None" }}
                      >
                        Book an appointment!
                      </Link>
                    </Typography>
                  </Grid>
                </Grid>
              </div>
            </Grid>
            <Grid item xs style={{ width: "90%" }}>
              <div className="neu-paper">
                <Grid
                  container
                  alignItems="center"
                  justifyContent="center"
                  direction="column"
                  style={{ padding: "8%" }}
                >
                  <Grid item style={{ padding: "0 0 3% 0" }}>
                    <Typography
                      variant="h5"
                      style={{
                        fontFamily: "Montserrat, sans serif",
                        fontWeight: "800",
                      }}
                    >
                      AI diagnosis
                    </Typography>
                    <Divider />
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="h6"
                      style={{
                        fontFamily: "Montserrat, sans serif",
                        fontWeight: "800",
                      }}
                    >
                      Get a free health checkup from our AI!{" "}
                      <Link to="/checkup" style={{ textDecoration: "None" }}>
                        Go now!
                      </Link>
                    </Typography>
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </Grid>
          <Grid
            container
            item
            xs={12}
            md={4}
            lg={4}
            direction="column"
            spacing={4}
            // alignItems="center"
          >
            <Grid item>
              <div className="neu-paper">
                <Grid
                  container
                  alignItems="center"
                  justifyContent="center"
                  direction="column"
                  style={{ padding: "8% 1% 8% 1%" }}
                >
                  <Grid item style={{ padding: "0 0 3% 0" }}>
                    <Typography
                      variant="h5"
                      style={{
                        fontFamily: "Montserrat, sans serif",
                        fontWeight: "800",
                      }}
                    >
                      Upcoming Appointments
                    </Typography>
                    <Divider />
                  </Grid>
                  <Grid item>
                    <Calendar />
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Dash;
