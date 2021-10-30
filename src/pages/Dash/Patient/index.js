import React, { useEffect } from "react";
import Navbar from "../../../components/Navbar";
import {
  Grid,
  Container,
  Typography,
  Divider,
  Paper,
  Toolbar,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { getAppointment } from "../../../actions/appointments";

const StyledToolbar = styled(Toolbar)(() => ({
  alignItems: "center",
}));

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
  'Oct',
  "Nov",
  "Dec",
];

function addHoursToDate(date) {
  const dat = new Date(date);
  dat.setMinutes(dat.getMinutes() + 30);
  dat.setHours(dat.getHours() + 5);
  return dat;
}

const Dash = () => {
  document.title = 'Dashboard - Autodoc'
  const history = useHistory();
  const mq9 = useMediaQuery("(max-width:899px)");
  const dispatch = useDispatch();
  const appointments = useSelector((state) => state.appointments.apps);

  useEffect(() => {
    dispatch(getAppointment());
  }, [dispatch]);

  return (
    <main>
      <Container
        style={{
          minHeight: "100vh",
          maxWidth: "100%",
          padding: "0%",
          margin: "0%",
          background: "linear-gradient(180deg, #00c6ff 0%, #0072ff 100%)",
        }}
      >
        <Navbar />
        <StyledToolbar />
        <Grid container sx={{ minHeight: "91vh" }}>
          <Grid
            container
            item
            xs={12}
            md={8}
            lg={8}
            direction={mq9 ? "row" : "column"}
            spacing={3}
            justifyContent="center"
            sx={{
              padding: `2%`,
            }}
          >
            <Grid item xs={12} md={1}>
              <Typography
                component="h1"
                variant="h2"
                color="white"
                sx={{ fontFamily: "Montserrat" }}
              >
                Hello, User!
              </Typography>
            </Grid>
            <Grid
              container
              item
              xs={10}
              spacing={4}
              direction={mq9 ? "column" : "row"}
            >
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
                        Book Appointments
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
                        Choose from the specialists on our site for your
                        treatments! <br />
                        <Link to="/book" style={{ textDecoration: "None" }}>
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
          </Grid>
          <Grid
            container
            item
            xs={12}
            md={4}
            lg={4}
            alignItems="center"
            justifyContent="space-evenly"
            direction="column"
            style={{
              padding: `2%`,
              boxShadow: "3px 0px 30px -3px rgba(66,66,66,0.75)",
              minHeight: "91.5vh",
              height: "100%",
              background: "whitesmoke",
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
                          addHoursToDate(
                            appointment.slot.date
                          ).toDateString() === date.toDateString()
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
                sx={{ height: "100%" }}
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
                      backgroundColor: "#0072ff",
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
                              color: "white",
                            }}
                          >
                            {
                              months[
                                addHoursToDate(
                                  appointments[0].slot.date
                                ).getMonth()
                              ]
                            }
                          </h3>
                        </Grid>
                        <Grid item xs={12}>
                          <h2
                            style={{
                              textAlign: "center",
                              padding: "0",
                              margin: "1%",
                              fontWeight: 600,
                              color: "white",
                            }}
                          >
                            {addHoursToDate(
                              appointments[0].slot.date
                            ).getDate()}
                          </h2>
                        </Grid>
                        <Grid item xs={12}>
                          <h3
                            style={{
                              textAlign: "center",
                              padding: "0",
                              margin: "0%",
                              fontWeight: 600,
                              color: "white",
                            }}
                          >
                            {addHoursToDate(
                              appointments[0].slot.date
                            ).getFullYear()}
                          </h3>
                        </Grid>
                      </Grid>
                      <Grid container item xs={8} md={9} lg={9}>
                        <Grid item xs={12}>
                          <h2
                            style={{
                              margin: "0",
                              padding: "0",
                              color: "white",
                            }}
                          >
                            {appointments[0].doctor_id.name}
                          </h2>
                        </Grid>
                        <Grid item xs={12}>
                          <h4
                            style={{
                              margin: "0",
                              padding: "0",
                              color: "white",
                            }}
                          >
                            {appointments[0].doctor_id.speciality.speciality} <br />
                            {`${appointments[0].slot.slot} ${
                              appointments[0].slot.slot.slice(0, 2) > 11
                                ? "pm"
                                : "am"
                            }`}
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
                      style={{
                        borderRadius: 15,
                        padding: "1%",
                        backgroundColor: "#0072ff",
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
                                color: "white",
                              }}
                            >
                              {
                                months[
                                  addHoursToDate(
                                    appointments[1].slot.date
                                  ).getMonth()
                                ]
                              }
                            </h3>
                          </Grid>
                          <Grid item xs={12}>
                            <h2
                              style={{
                                textAlign: "center",
                                padding: "0",
                                margin: "1%",
                                color: "white",
                              }}
                            >
                              {addHoursToDate(
                                appointments[1].slot.date
                              ).getDate()}
                            </h2>
                          </Grid>
                          <Grid item xs={12}>
                            <h3
                              style={{
                                textAlign: "center",
                                padding: "0",
                                margin: "0%",
                                color: "white",
                              }}
                            >
                              {addHoursToDate(
                                appointments[1].slot.date
                              ).getFullYear()}
                            </h3>
                          </Grid>
                        </Grid>
                        <Grid container item xs={8} md={9} lg={9}>
                          <Grid item xs={12}>
                            <h2
                              style={{
                                margin: "0",
                                padding: "0",
                                color: "white",
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
                                color: "white",
                              }}
                            >
                              {appointments[0].speciality} <br />
                              {`${appointments[1].slot.slot} ${
                                appointments[1].slot.slot.slice(0, 2) > 11
                                  ? "pm"
                                  : "am"
                              }`}
                            </h4>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Paper>
                  </Grid>
                )}
                {appointments.length > 0 && (
                  <Grid
                    item
                    xs={12}
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    <Typography
                      component="h1"
                      variant="h5"
                      sx={{ cursor: "pointer", fontFamily: "Montserrat" }}
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
