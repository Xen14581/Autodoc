import React, { useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import Navbar from "../../components/Navbar";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import MobileDatePicker from "@mui/lab/MobileDatePicker";
import { toast } from "react-toastify";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector(state => state.auth)
  const tab = useMediaQuery("(max-width:680px)");
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
        <Grid container>
          <Grid
            container
            item
            xs={12}
            md={5}
            lg={5}
            sx={{ padding: "7% 2% 2% 2%", height: "100%" }}
          >
            <Paper
              elevation={6}
              style={{ width: "100%", padding: "4%", borderRadius: 12 }}
            >
              <Typography
                variant="h3"
                textAlign="center"
                sx={{ fontFamily: "Montserrat" }}
              >
                Edit Profile
              </Typography>
              <Divider />
              <Grid container spacing={1}>
                <Grid
                  item
                  xs={12}
                  style={{
                    padding: "4%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Avatar sx={{ width: 400, height: 400, bgcolor: "#5CB0FF" }}>
                    <Avatar
                      alt="Profile Picture"
                      src=""
                      sx={{ width: "97%", height: "97%" }}
                    />
                  </Avatar>
                </Grid>
                <Grid
                  item
                  xs={12}
                  style={{
                    padding: "0 4% 4% 4%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <TextField
                    label="Full Name"
                    color="info"
                    value={user.name}
                    sx={{ width: "90%" }}
                    InputProps={{
                      endAdornment: <Button variant="filled">Save Name</Button>,
                    }}
                  />
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid
            container
            item
            xs={12}
            md={7}
            lg={7}
            direction="column"
            alignItems="center"
            spacing={2}
            sx={{
              padding: "8% 2% 2% 2%",
              height: "100%",
              margin: 0
            }}
          >
            <Grid item xs={6} sx={{ width: "100%" }}>
              <Paper elevation={6} style={{ height: "100%", borderRadius: 12 }}>
                <Grid
                  container
                  spacing={2}
                  sx={{ padding: "2% 4%", height: "100%" }}
                >
                  <Grid item xs={12}>
                    <Typography
                      variant="h4"
                      textAlign="center"
                      sx={{ fontFamily: "Montserrat" }}
                    >
                      Personal Details
                    </Typography>
                    <Divider />
                  </Grid>
                  <Grid item xs={12} md={6} lg={6}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DesktopDatePicker
                        label="Date of Birth"
                        inputFormat="dd/MM/yyyy"
                        value={new Date(user.dob)}
                        onChange={() => toast.error("You cannot change this.")}
                        renderInput={(params) => (
                          <TextField {...params} fullWidth />
                        )}
                        disabled
                      />
                      {/* <MobileDatePicker
                      label="Date of Birth"
                      inputFormat="dd/MM/yyyy"
                      value={user.dob}
                      renderInput={(params) => <TextField {...params} fullWidth />}
                      disabled
                    /> */}
                    </LocalizationProvider>
                  </Grid>
                  <Grid item xs={12} md={6} lg={6}>
                    <TextField
                      label="Gender"
                      value={
                        user.gender === "m"
                          ? "Male"
                          : user.gender === "f"
                          ? "Female"
                          : "Other"
                      }
                      fullWidth
                      disabled
                    />
                  </Grid>
                  <Grid item xs={12} md={6} lg={6}>
                    <TextField
                      label="E-mail"
                      value={user.email}
                      fullWidth
                      disabled
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <Button variant="contained">Save Profile</Button>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={6} sx={{ width: "100%" }}>
              <Paper elevation={6} style={{ height: "100%", borderRadius: 12 }}>
                <Grid
                  container
                  spacing={1}
                  sx={{ height: "100%", padding: "1% 4%" }}
                >
                  <Grid item xs={12}>
                    <Typography
                      variant="h4"
                      textAlign="center"
                      sx={{ fontFamily: "Montserrat" }}
                    >
                      Change Password
                    </Typography>
                    <Divider />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <TextField
                      label="Old Password"
                      type="password"
                      sx={{ width: "70%" }}
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <TextField
                      label="New Password"
                      type="password"
                      sx={{ width: "70%" }}
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <TextField
                      label="Confirm New Password"
                      type="password"
                      sx={{ width: "70%" }}
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Button variant="contained">Change Password</Button>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </main>
  );
};

export default Profile;
