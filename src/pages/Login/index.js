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
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { Signin } from "../../actions/auth";
import autodoc from "../../assets/autodoc(1).svg";
import logo from "../../assets/Autodoc(2).svg";
import useMediaQuery from "@mui/material/useMediaQuery";

const Login = () => {
  const screen = useMediaQuery("(max-width:899px)");
  const [login, setLogin] = useState({ email: "", password: "" });
  const [emailError, setEmailError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const emailRef = useRef();
  const passRef = useRef();
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

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const Submit = () => {
    dispatch({ type: "LOAD" });
    dispatch(Signin(login, history, () => dispatch({ type: "LOAD" })));
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
              background: "linear-gradient(180deg, #00c6ff 0%, #0072ff 100%)",
              borderRadius: "0 80px 80px 0",
              display: screen ? "none" : "",
            }}
          >
            <Grid item>
              <img
                src={autodoc}
                alt=""
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
              backgroundColor: "#f3f3f3",
              borderRadius: screen ? "0" : "80px 0 0 0",
              width: "100%",
            }}
          >
            <Grid container item xs justifyContent="center" alignItems="center">
              <div
                className="neu-paper"
                style={{
                  width: "70%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: screen ? '0' : ''
                }}
              >
                <Grid
                  container
                  direction="column"
                  alignItems="center"
                  style={{ padding: "3%" }}
                >
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
                      Login
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={12} lg={12} style={{ width: "100%" }}>
                    <TextField
                      error={emailError}
                      helperText={emailError ? "Enter a valid email" : ""}
                      variant="outlined"
                      inputRef={emailRef}
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      autoFocus
                      onChange={handleInput}
                      style={{
                        margin: "5% 0",
                        width: "90%",
                      }}
                      align="left"
                    />
                  </Grid>
                  <Grid item xs={12} md={12} lg={12} style={{ width: "100%" }}>
                    <FormControl
                      // className={clsx(
                      //   classes.margin,
                      //   classes.textField
                      // )}
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
                        type={showPassword ? "text" : "password"}
                        onChange={handleInput}
                        name="password"
                        label="Password"
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
                      Login
                    </Button>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={12}
                    lg={12}
                    style={{ width: "100%", margin: "2% 0 2% 0" }}
                  >
                    <Typography variant="subtitle1">
                      New to this site?{" "}
                      <Link to="/register">Register now!</Link>
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

export default Login;
