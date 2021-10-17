import React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typed from "react-typed";
import { useHistory } from "react-router-dom";
import bg from "../../assets/2328064.jpg";
import nn from "../../assets/brain-neural-net.jpg";
import bacefook from "../../assets/Bacefook.png";
import spyke from "../../assets/Logo-Dark-Square.jpg";
import logo from "../../assets/Autodoc(2).svg";

const theme = createTheme();

const Landing = () => {
  document.title="AUTODOC - Landing"
  const history = useHistory();
  return (
    <main style={{ width: "100%" }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar
          position="relative"
          sx={{ backgroundColor: "white", zIndex: "100" }}
        >
          <Toolbar>
            <Grid
              container
              // spacing={1}
              style={{ height: "96%" }}
              alignItems="center"
              // justifyContent="space-between"
            >
              <Grid item xs={1}>
                <Link to="/homepage">
                  <img src={logo} style={{ height: "4em" }} alt="LOGO" />
                </Link>
              </Grid>
              <Grid item xs={9}>
                <Typography
                  variant="h4"
                  component="span"
                  sx={{
                    color: "black",
                    fontFamily: "Montserrat",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  Autodoc
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Button
                  variant="contained"
                  onClick={() => history.push("/login")}
                >
                  <p style={{ fontFamily: "Montserrat" }}>Login / Register</p>
                </Button>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <main>
          {/* Hero unit */}
          <Box
            sx={{
              backgroundImage: `linear-gradient(transparent 0%, #eef 90%, #eef 100%), url(${bg})`,
              backgroundSize: "cover",
              backgroundPosition: "top",
              pt: 8,
              pb: 6,
              height: "80vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <Container
              maxWidth="sm"
              sx={{
                padding: "2%",
                marginLeft: "4%",
                background: "rgba(128,128,128,0.2)",
                backdropFilter: "blur(3px)",
              }}
              data-aos="fade-right"
              data-aos-duration="3000"
            >
              <Typography
                component="h1"
                variant="h2"
                align="left"
                color="text.primary"
                gutterBottom
                sx={{
                  fontFamily: "Montserrat",
                  fontWeight: "600",
                  color: "white",
                }}
              >
                AutoDoc
              </Typography>
              <Typography
                variant="h5"
                align="left"
                color="text.secondary"
                paragraph
                sx={{
                  fontFamily: "Montserrat",
                  fontWeight: "550",
                  color: "white",
                }}
              >
                We provide a convenient doctor appointment booking system to
                manage your health as efficiently as possible!
                <br />
                <Typed
                  strings={[
                    "",
                    "Good Health is what you deserve!",
                    "Good Health is what we provide!",
                    "",
                  ]}
                  typeSpeed={40}
                  backSpeed={40}
                  loop
                  smartBackspace
                />
              </Typography>
            </Container>
          </Box>
          <Box
            sx={{
              backgroundImage: `linear-gradient(#eef 0%, #fff 30%)`,
              backgroundSize: "cover",
              backgroundPosition: "top",
              pt: 4,
              pb: 6,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Container
              maxWidth="md"
              sx={{
                padding: "2%",
                marginLeft: "0 0 2% 0",
                py: 8,
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Grid container spacing={4}>
                <Grid item xs={12} sm={6} md={4}>
                  <div
                    style={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-anchor-placement="center-bottom"
                  >
                      <i class="fas fa-rocket fa-4x"></i>
                    <CardContent sx={{ flexGrow: 1, padding: '8% 0' }}>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="h2"
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          wordBreak: "break-word",
                          textAlign: "center",
                          fontFamily: "Montserrat",
                        }}
                      >
                        Built for Speed
                      </Typography>
                      <Divider />
                      <Typography
                        gutterBottom
                        variant="h6"
                        component="h2"
                        color= 'text.secondary'
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          wordBreak: "break-word",
                          textAlign: "center",
                          fontFamily: "Montserrat",
                        }}
                      >
                        Managing appointments has never been quicker!
                      </Typography>
                    </CardContent>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                <div
                    style={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-anchor-placement="center-bottom"
                  >
                      <i class="fas fa-running fa-4x"></i>
                    <CardContent sx={{ flexGrow: 1, padding: '8% 0' }}>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="h2"
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          wordBreak: "break-word",
                          textAlign: "center",
                          fontFamily: "Montserrat",
                        }}
                      >
                        Anytime. Anywhere.
                      </Typography>
                      <Divider />
                      <Typography
                        gutterBottom
                        variant="h6"
                        component="h2"
                        color= 'text.secondary'
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          wordBreak: "break-word",
                          textAlign: "center",
                          fontFamily: "Montserrat",
                        }}
                      >
                        Book an appointment or get a diagnosis on the go!
                      </Typography>
                    </CardContent>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                <div
                    style={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-anchor-placement="center-bottom"
                  >
                      <i class="fas fa-mobile fa-4x"></i>
                    <CardContent sx={{ flexGrow: 1, padding: '8% 0' }}>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="h2"
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          wordBreak: "break-word",
                          textAlign: "center",
                          fontFamily: "Montserrat",
                        }}
                      >
                        Extreme Access
                      </Typography>
                      <Divider />
                      <Typography
                        gutterBottom
                        variant="h6"
                        component="h2"
                        color= 'text.secondary'
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          wordBreak: "break-word",
                          textAlign: "center",
                          fontFamily: "Montserrat",
                        }}
                      >
                        With our easy to traverse UI, anyone can use this app!
                      </Typography>
                    </CardContent>
                  </div>
                </Grid>
              </Grid>
            </Container>
          </Box>
          <Box
            sx={{
              backgroundImage: `linear-gradient(90deg, transparent 0%, #eef 90%, #eef 100%), url(${nn})`,
              backgroundSize: "contain",
              backgroundPosition: "left-top",
              backgroundRepeat: "no-repeat",
              height: "65vh",
              pt: 8,
              pb: 6,
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              pr: 16,
            }}
          >
            <Container
              maxWidth="sm"
              sx={{
                padding: "2%",
                marginRight: "0%",
                background: "rgba(128,128,128,0.4)",
                backdropFilter: "blur(3px)",
              }}
              data-aos="zoom-out"
              data-aos-duration="2000"
              data-aos-anchor-placement="center-bottom"
            >
              <Typography
                component="h1"
                variant="h2"
                align="left"
                color="text.primary"
                gutterBottom
                sx={{
                  fontFamily: "Montserrat",
                  fontWeight: "600",
                  color: "white",
                }}
              >
                Quick Diagnosis
              </Typography>
              <Typography
                variant="h5"
                align="left"
                color="text.secondary"
                paragraph
                sx={{
                  fontFamily: "Montserrat",
                  fontWeight: "550",
                  color: "white",
                }}
              >
                Our state-of-the-art AI can quickly diagnose you for health
                issues without having to book an appointment with your doctor!
              </Typography>
            </Container>
          </Box>
          <Box
            sx={{
              pt: 4,
              pb: 6,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Container
              maxWidth="md"
              sx={{
                padding: "1% 0",
                margin: "0 2%",
                py: 8,
              }}
            >
              <Grid container>
                <Grid item xs={12} md={12} lg={12}>
                  <Typography
                    variant="h4"
                    component="h5"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      fontFamily: "Montserrat",
                      padding: "1%",
                    }}
                  >
                    Our Healthy Associates
                  </Typography>
                  <Divider />
                </Grid>
                <Grid item xs={12} md={6} lg={6} sx={{ padding: "4% 0" }}>
                  <Paper elevation={0}>
                    <Grid container spacing={2} direction="column">
                      <Grid
                        item
                        xs
                        sx={{ display: "flex", justifyContent: "center" }}
                      >
                        <Avatar
                          src={bacefook}
                          sx={{ width: 112, height: 112 }}
                        ></Avatar>
                      </Grid>
                      <Grid
                        item
                        xs
                        sx={{ display: "flex", justifyContent: "center" }}
                      >
                        <Typography
                          variant="h5"
                          component="h6"
                          sx={{ fontFamily: "Montserrat" }}
                        >
                          Bacefook
                        </Typography>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
                <Grid item xs={12} md={6} lg={6} sx={{ padding: "4% 0" }}>
                  <Paper elevation={0}>
                    <Grid container spacing={2} direction="column">
                      <Grid
                        item
                        xs
                        sx={{ display: "flex", justifyContent: "center" }}
                      >
                        <Avatar
                          src={spyke}
                          sx={{ width: 112, height: 112 }}
                        ></Avatar>
                      </Grid>
                      <Grid
                        item
                        xs
                        sx={{ display: "flex", justifyContent: "center" }}
                      >
                        <Typography
                          variant="h5"
                          component="h6"
                          sx={{ fontFamily: "Montserrat" }}
                        >
                          Spyke
                        </Typography>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
              </Grid>
            </Container>
          </Box>
        </main>
        {/* Footer */}
        <Divider />
        <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
          <Typography
            variant="h5"
            align="center"
            gutterBottom
            sx={{ fontFamily: "Montserrat", fontWeight: "400" }}
          >
            AUTODOC
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            color="text.secondary"
            component="p"
            sx={{ fontFamily: "Montserrat" }}
          >
            Bacefook & Co.
          </Typography>
        </Box>
        {/* End footer */}
      </ThemeProvider>
    </main>
  );
};

export default Landing;
