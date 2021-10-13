import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import Navbar from "../../../components/Navbar";
import {
  Grid,
  Container,
  Box,
  Divider,
  Toolbar,
  Paper,
  CssBaseline,
  TextField,
  Avatar,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: "center",
  paddingTop: theme.spacing(3),
  marginBottom: theme.spacing(2),
}));

const DoctorDash = () => {
  document.title = "Dashboard - Autodoc";
  const tab = useMediaQuery("(max-width:680px)");
  const mob = useMediaQuery("(max-width:600px)");
  return (
    <>
      <Navbar />
      <CssBaseline />
      <main
        style={{
          height: "100%",
          padding: "0%",
          margin: "0%",
          maxWidth: "100%",
          background: "linear-gradient(180deg, #00c6ff 0%, #0072ff 100%)",
          overflow: "hidden",
        }}
      >
        <Container
          style={{
            padding: 0,
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <StyledToolbar />
          <Paper
            elevation={15}
            style={{ height: "85vh", width: "90%", padding: "3%", marginTop: mob ? '4%' : 0 }}
          >
            <Grid container justifyContent="center" spacing={2} sx={{width: '100%'}}>
              <Grid item xs={12}>
                <Typography
                  variant={ tab ? "h3" : "h2"}
                  sx={{
                    fontFamily: "Montserrat, sans serrif",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  Welcome, Doctor!
                </Typography>
                <Divider />
              </Grid>
              <Grid item xs={12}>
                <Typography
                  variant="h4"
                  sx={{ fontFamily: "Montserrat, sans serrif", pl: "3%" }}
                >
                  You have -
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography
                  variant="h2"
                  sx={{
                    fontFamily: "Montserrat, sans serrif",
                    fontWeight: "400",
                    pl: "15%",
                  }}
                  data-aos="fade-right"
                  data-aos-duration="1000"
                >
                  13
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: "Montserrat, sans serrif",
                    fontWeight: "400",
                    pl: "15%",
                  }}
                >
                  appointments
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography
                  variant="h2"
                  sx={{
                    fontFamily: "Montserrat, sans serrif",
                    fontWeight: "400",
                    pl: "15%",
                  }}
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-delay="500"
                >
                  3
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: "Montserrat, sans serrif",
                    fontWeight: "400",
                    pl: "15%",
                  }}
                >
                  free slots
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </main>
    </>
  );
};

export default DoctorDash;
