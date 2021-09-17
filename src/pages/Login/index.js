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
import { Visibility, VisibilityOff } from "@material-ui/icons";
import placeholder from "../../assets/placeholder_robot.png";
import { GeoJsonGeometry } from "three-geojson-geometry";
import { Canvas, useFrame } from "@react-three/fiber";
import { useDispatch } from "react-redux";
import geojson from '../../components/geojson.json'

const Login = () => {
  const [login, setLogin] = useState({ email: "", password: "" });
  const [emailError, setEmailError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const history = useHistory();
  const emailRef = useRef();
  const passRef = useRef();
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const N = 4e4;
  const multiPoints = {
    type: "MultiPoint",
    coordinates: [...Array(N).keys()].map(() => [
      (Math.random() - 0.5) * 360,
      (Math.random() - 0.5) * 180,
    ]),
  };

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
    console.log(login);
    history.push("/dash");
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
            }}
          >
            <Grid item>
              <div className="header-bold" style={{ color: "white" }}>
                Autodoc
              </div>
            </Grid>
            <Grid item>
              <img src={placeholder} />
              {/* <Canvas>
                <ambientLight intensity={0.1} />
                <directionalLight position={[0, 0, 5]} />
                <line geometry={new GeoJsonGeometry(geojson, 50)}>
                  <lineBasicMaterial color="white" />
                </line>
              </Canvas> */}
            </Grid>
            <Grid item></Grid>
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
              borderRadius: "80px 0 0 0",
              width: "100%",
            }}
          >
            <Grid container item xs justifyContent="center" alignItems="center">
              <div
                className="neu-paper"
                style={{
                  height: "50%",
                  width: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Grid
                  container
                  direction="column"
                  alignItems="center"
                  style={{ padding: "3%" }}
                >
                  <Grid item xs={12} md={12} lg={12} style={{ width: "100%" }}>
                    <Typography
                      variant="h3"
                      style={{
                        fontFamily: "Montserrat, sans-serif",
                        fontWeight: "800",
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
                        labelWidth={70}
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
