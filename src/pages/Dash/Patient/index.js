import React from "react";
import Navbar from "../../../components/Navbar";
import {
  Grid,
  Container,
  Typography,
  Divider,
  Paper,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Link, useHistory } from "react-router-dom";
import Calendar from "react-calendar";
import blob from '../../../assets/cal-bg.svg'
import "react-calendar/dist/Calendar.css";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Nov",
  "Dec",
];

const appointments = [
  {
    from_dt: new Date(2021, 9, 5, 10, 30),
    to_dt: new Date(2021, 9, 5, 11, 0),
    speciality: "Dermatologist",
    doctor: "Doctor's Name",
  },
  {
    from_dt: new Date(2021, 9, 7, 15, 0),
    to_dt: new Date(2021, 9, 7, 16, 0),
    speciality: "Optometrist",
    doctor: "Doctor's Name",
  },
  {
    from_dt: new Date(2021, 9, 8, 10, 30),
    to_dt: new Date(2021, 9, 8, 11, 0),
    speciality: "Dermatologist",
    doctor: "Doctor's Name",
  },
];

const Dash = () => {
  const history = useHistory();
  const mq12 = useMediaQuery("(max-width:1200px)");
  const mq9 = useMediaQuery("(max-width:900px)");
  return (
    <main>
      <Container
        style={{
          minHeight: "100vh",
          maxWidth: "100%",
          padding: "0%",
          margin: "0%",
        }}
      >
        <Navbar />
        <Grid container sx={{ minHeight: "100vh" }}>
          <Grid
            container
            item
            xs={8}
            direction="column"
            sx={{
              background: "linear-gradient(180deg, #00c6ff 0%, #0072ff 100%)",
              padding: `${mq9 ? '9%' : mq12 ? '8%' : '7%'} 2% 2% 2%`,
            }}
          >
            <Grid item xs={1}>
              <Typography
                component="h1"
                variant="h2"
                color="white"
                sx={{ fontFamily: "Montserrat" }}
              >
                Hello, User!
              </Typography>
            </Grid>
            <Grid item xs={5}>
              <Paper elevation={8}>
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
                      color="text.primary"
                      style={{
                        fontFamily: "Montserrat, sans serif",
                        fontWeight: "600",
                      }}
                    >
                      Past Appointments
                    </Typography>
                    <Divider />
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="h6"
                      color="text.secondary"
                      style={{
                        fontFamily: "Montserrat, sans serif",
                        fontWeight: "400",
                      }}
                    >
                      You haven't finished any appointments yet!
                      <Link
                        to="/book"
                        style={{ textDecoration: "None" }}
                      >
                        {"\nBook an appointment!"}
                      </Link>
                    </Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={5}>
              <Paper elevation={8}>
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
                      color="text.primary"
                      style={{
                        fontFamily: "Montserrat, sans serif",
                        fontWeight: "600",
                      }}
                    >
                      AI diagnosis
                    </Typography>
                    <Divider />
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="h6"
                      color="text.secondary"
                      style={{
                        fontFamily: "Montserrat, sans serif",
                        fontWeight: "400",
                      }}
                    >
                      Get a free health checkup from our AI!{" "}
                      <Link to="/checkup" style={{ textDecoration: "None" }}>
                        Go now!
                      </Link>
                    </Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
          <Grid
            container
            item
            xs={4}
            alignItems="center"
            justifyContent="space-evenly"
            direction="column"
            style={{
              padding: `${mq9 ? '9%' : mq12 ? '8%' : '7%'} 2% 2% 2%`,
              boxShadow: "3px 0px 30px -3px rgba(66,66,66,0.75)",
              minHeight: '100vh',
              height: '100%'
            }}
          >
            <Grid
              container
              item
              xs={7}
              justifyContent="space-around"
              alignItems="center"
            >
              <Grid
                item
                xs={12}
                sx={{
                  padding: "0 0 3% 0",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Typography
                  variant="h5"
                  color="Text.primary"
                  style={{
                    fontFamily: "Montserrat, sans serif",
                    fontWeight: "800",
                  }}
                >
                  Upcoming Appointments
                  <Divider />
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Calendar
                  tileClassName={({ date, view }) => {
                    return view === "month" &&
                      appointments.some(
                        (appointment) =>
                          appointment.from_dt.toDateString() ===
                          date.toDateString()
                      )
                      ? "appointment"
                      : "";
                  }}
                />
              </Grid>
            </Grid>
            {appointments.length >= 1 && (
              <Grid
                container
                item
                spacing={2}
                xs={5}
                justifyContent="center"
                alignItems="center"
                sx={{height: '100%'}}
              >
                <Grid
                  item
                  xs={12}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <Paper
                    elevation={2}
                    style={{
                      borderRadius: 15,
                      padding: "1%",
                      backgroundColor: '#0072ff',
                    }}
                  >
                    <Grid
                      container
                      justifyContent="space-between"
                      sx={{ width: "100%" }}
                    >
                      <Grid
                        container
                        item
                        xs={4}
                        md={1}
                        lg={2}
                        justifyContent="center"
                      >
                        <Grid item xs={12}>
                          <h3
                            style={{
                              textAlign: "center",
                              padding: "0",
                              margin: "0%",
                              fontWeight: 600,
                              color: 'white'
                            }}
                          >
                            {months[appointments[0].from_dt.getMonth()]}
                          </h3>
                        </Grid>
                        <Grid item xs={12}>
                          <h2
                            style={{
                              textAlign: "center",
                              padding: "0",
                              margin: "1%",
                              fontWeight: 600,
                              color: 'white'
                            }}
                          >
                            {appointments[0].from_dt.getDate()}
                          </h2>
                        </Grid>
                        <Grid item xs={12}>
                          <h3
                            style={{
                              textAlign: "center",
                              padding: "0",
                              margin: "0%",
                              fontWeight: 600,
                              color: 'white'
                            }}
                          >
                            {appointments[0].from_dt.getFullYear()}
                          </h3>
                        </Grid>
                      </Grid>
                      <Grid container item xs={8} md={9} lg={9}>
                        <Grid item xs={12}>
                          <h2
                            style={{
                              margin: "0",
                              padding: "0",
                              color: 'white'
                            }}
                          >
                            {appointments[0].doctor}
                          </h2>
                        </Grid>
                        <Grid item xs={12}>
                          <h4
                            style={{
                              margin: "0",
                              padding: "0",
                              color: 'white'
                            }}
                          >
                            {appointments[0].speciality} <br />
                            {`${appointments[0].from_dt
                              .toTimeString()
                              .slice(0, 5)} - ${appointments[0].to_dt
                              .toTimeString()
                              .slice(0, 5)}`}
                          </h4>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
                {appointments.length > 1 && (
                  <Grid
                    item
                    xs={12}
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    <Paper
                      elevation={2}
                      style={{ borderRadius: 15, padding: "1%", backgroundColor: '#0072ff' }}
                    >
                      <Grid
                        container
                        justifyContent="space-between"
                        sx={{ width: "100%" }}
                      >
                        <Grid
                          container
                          item
                          xs={4}
                          md={1}
                          lg={2}
                          justifyContent="center"
                        >
                          <Grid item xs={12}>
                            <h3
                              style={{
                                textAlign: "center",
                                padding: "0",
                                margin: "0%",
                                color: 'white'
                              }}
                            >
                              {months[appointments[1].from_dt.getMonth()]}
                            </h3>
                          </Grid>
                          <Grid item xs={12}>
                            <h2
                              style={{
                                textAlign: "center",
                                padding: "0",
                                margin: "1%",
                                color: 'white'
                              }}
                            >
                              {appointments[1].from_dt.getDate()}
                            </h2>
                          </Grid>
                          <Grid item xs={12}>
                            <h3
                              style={{
                                textAlign: "center",
                                padding: "0",
                                margin: "0%",
                                color: 'white'
                              }}
                            >
                              {appointments[1].from_dt.getFullYear()}
                            </h3>
                          </Grid>
                        </Grid>
                        <Grid container item xs={8} md={9} lg={9}>
                          <Grid item xs={12}>
                            <h2
                              style={{
                                margin: "0",
                                padding: "0",
                                color: 'white'
                              }}
                            >
                              {appointments[1].doctor}
                            </h2>
                          </Grid>
                          <Grid item xs={12}>
                            <h4
                              style={{
                                margin: "0",
                                padding: "0",
                                color: 'white'
                              }}
                            >
                              {appointments[0].speciality} <br />
                              {`${appointments[1].from_dt
                                .toTimeString()
                                .slice(0, 5)} - ${appointments[1].to_dt
                                .toTimeString()
                                .slice(0, 5)}`}
                            </h4>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Paper>
                  </Grid>
                )}
                {appointments.length > 2 && (
                  <Grid
                    item
                    xs={12}
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    <Typography
                      component="h1"
                      variant="h5"
                      sx={{ cursor: "pointer", fontFamily: 'Montserrat' }}
                      onClick={() => {
                        history.push("/appointments");
                      }}
                    >
                      See all appointments
                    </Typography>
                  </Grid>
                )}
              </Grid>
            )}
          </Grid>
        </Grid>
      </Container>
    </main>
  );
};

export default Dash;
