import React, { useState, useRef } from "react";
import { useHistory, Link } from "react-router-dom";
import {
  TextField,
  Button,
  Grid,
  Container,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Typography,
} from "@mui/material";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import MobileDatePicker from "@mui/lab/MobileDatePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { SignUp } from "../../actions/auth";
import autodoc from "../../assets/autodoc(1).svg";
import logo from "../../assets/Autodoc(2).svg";
import useMediaQuery from "@mui/material/useMediaQuery";

const Register = () => {
  const dispatch = useDispatch();
  const tab = useMediaQuery("(max-width:630px)");
  const screen = useMediaQuery("(max-width:899px)");
  const [login, setLogin] = useState({
    name: "",
    dob: new Date(),
    email: "",
    password: "",
    ph_no: "",
    gender: "",
  });
  const [emailError, setEmailError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const history = useHistory();
  const nameRef = useRef();
  const emailRef = useRef();
  const passRef = useRef();
  const phoneRef = useRef();
  const sexRef = useRef();
  // const emailRegex =
  //   /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const handleInput = (obj) => {
    const { name, value } = obj.target;
    if (name === "email") {
      if (emailError) {
        setEmailError(!emailError);
      }
    }
    setLogin((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleChange = (event) => {
    setLogin((prev) => {
      return { ...prev, gender: event.target.value };
    });
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const Submit = () => {
    dispatch({ type: "LOAD" });
    dispatch(SignUp(login, history, () => {
      dispatch({ type: "LOAD" })
      setLogin({
        name: "",
        dob: new Date(),
        email: "",
        password: "",
        ph_no: "",
        gender: "",
      })
    }));
  };

  return (
    <>
      <Container
        style={{
          padding: "0%",
          margin: "0%",
          background: "linear-gradient(180deg, #00c5ff 0%, #f5f5f5 100%)",
        }}
      >
        <Grid container style={{ height: "100vh", width: "100vw" }}>
          <Grid
            container
            item
            xs={12}
            md={6}
            lg={6}
            direction="column"
            align="center"
            justifyContent="space-evenly"
            style={{
              background: `linear-gradient(180deg, #00c6ff 0%, #0072ff 100%)`,
              borderRadius: "0 80px 80px 0",
              display: screen ? "none" : ""
            }}
          >
            <Grid item>
              <img
                src={autodoc}
                alt="LOGO"
                style={{ width: "100%", height: "100%" }}
              />
            </Grid>
          </Grid>
          <Grid
            container
            item
            xs={12}
            md={6}
            lg={6}
            align="center"
            justifyContent="center"
            style={{
              backgroundColor: "#f5f5f5",
              borderRadius: screen ? '0' : "80px 0 0 0",
              width: "90%",
            }}
          >
            <Grid container item xs justifyContent="center" alignItems="center">
              <div
                className="neu-paper"
                style={{
                  width: "90%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: screen ? '0' : ''
                }}
              >
                <Grid container alignItems="center" style={{ padding: "3%" }}>
                  <Grid item xs={12}>
                    <img
                      src={logo}
                      style={{ height: "6em", display: screen ? "" : "none" }}
                      alt="LOGO"
                    />
                  </Grid>
                  <Grid item xs={12} md={12} lg={12} style={{ width: "100%" }}>
                    <Typography
                      variant="h3"
                      style={{
                        fontFamily: "Montserrat, sans-serif",
                        fontWeight: "500",
                      }}
                      color="rgba(0, 0, 0, 0.5)"
                    >
                      Register
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={6} lg={6} style={{ width: "50%" }}>
                    <TextField
                      variant="outlined"
                      inputRef={nameRef}
                      label="Full Name"
                      name="name"
                      value={login.name}
                      onChange={handleInput}
                      style={{
                        margin: "5% 0",
                        width: "90%",
                      }}
                      align="left"
                    />
                  </Grid>
                  <Grid item xs={12} md={6} lg={6} style={{ width: "50%" }}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      {tab ? (
                        <MobileDatePicker
                          label="Date of Birth"
                          inputFormat="dd/MM/yyyy"
                          value={login.dob}
                          onChange={(e) =>
                            setLogin((prev) => {
                              return {
                                ...prev,
                                dob: e,
                              };
                            })
                          }
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              fullWidth
                              style={{
                                margin: "5% 0",
                                width: "90%",
                              }}
                            />
                          )}
                        />
                      ) : (
                        <DesktopDatePicker
                          label="Date of Birth"
                          inputFormat="dd/MM/yyyy"
                          value={login.dob}
                          onChange={(e) =>
                            setLogin((prev) => {
                              return {
                                ...prev,
                                dob: e,
                              };
                            })
                          }
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              fullWidth
                              style={{
                                margin: "5% 0",
                                width: "90%",
                              }}
                            />
                          )}
                        />
                      )}
                    </LocalizationProvider>
                  </Grid>
                  <Grid item xs={12} md={6} lg={6} style={{ width: "50%" }}>
                    <TextField
                      error={emailError}
                      helperText={emailError ? "Enter a valid email" : ""}
                      variant="outlined"
                      inputRef={emailRef}
                      label="Email Address"
                      name="email"
                      value={login.email}
                      autoComplete="email"
                      onChange={handleInput}
                      style={{
                        margin: "5% 0",
                        width: "90%",
                      }}
                      align="left"
                    />
                  </Grid>
                  <Grid item xs={12} md={6} lg={6} style={{ width: "50%" }}>
                    <FormControl
                      variant="outlined"
                      style={{
                        margin: "5% 0",
                        width: "90%",
                      }}
                    >
                      <InputLabel htmlFor="outlined-adornment-password">
                        Password
                      </InputLabel>
                      <OutlinedInput
                        inputRef={passRef}
                        id="outlined-adornment-password"
                        label="Password"
                        type={showPassword ? "text" : "password"}
                        value={login.password}
                        onChange={handleInput}
                        name="password"
                        autoComplete="current-password"
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                            >
                              {showPassword ? (
                                <Visibility />
                              ) : (
                                <VisibilityOff />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
                      />
                    </FormControl>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={6}
                    lg={6}
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    <TextField
                      variant="outlined"
                      inputRef={phoneRef}
                      label="Phone No."
                      name="ph_no"
                      value={login.ph_no}
                      onChange={handleInput}
                      style={{
                        margin: "3% 0",
                        width: "90%",
                      }}
                      align="left"
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={6}
                    lg={6}
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    <FormControl sx={{ width: "90%", margin: "3% 0" }}>
                      <InputLabel id="demo-simple-select-label">Sex</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={login.gender}
                        label="Sex"
                        onChange={handleChange}
                        ref={sexRef}
                      >
                        <MenuItem value={"Male"}>Male</MenuItem>
                        <MenuItem value={"Female"}>Female</MenuItem>
                        <MenuItem value={"Other"}>Other</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={12}
                    lg={12}
                    style={{ width: "100%", margin: "5% 0 5% 0" }}
                  >
                    <Button
                      variant="contained"
                      className="login-button"
                      onClick={() => {
                        Submit();
                      }}
                    >
                      Register
                    </Button>
                  </Grid>
                  <Grid item xs={12} md={12} lg={12} style={{ width: "100%" }}>
                    <Typography variant="subtitle1">
                      Already a member? <Link to="/login">Login</Link>
                    </Typography>
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

export default Register;
