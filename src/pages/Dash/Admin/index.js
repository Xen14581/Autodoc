import React, { useState, useRef } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import FormHelperText from '@mui/material/FormHelperText';
import TimePicker from "@mui/lab/TimePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Navbar from "../../../components/Navbar";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: "center",
  paddingTop: theme.spacing(3),
  marginBottom: theme.spacing(2),
}));

const AdminDash = () => {
  document.title = "Admin Dash - Autodoc";
  const height = window.innerHeight;
  const [doc, setDoc] = useState({
    name: "",
    age: "",
    sex: "",
    speciality: "",
    email: "",
    ph_no: "",
    shift_from: new Date(),
    shift_to: new Date(),
    week_from: "",
    week_to: "",
  });

  const name_ref = useRef(null);
  const age_ref = useRef(null);
  const sex_ref = useRef(null);
  const spec_ref = useRef(null);
  const email_ref = useRef(null);
  const ph_no_ref = useRef(null);
  const shift_from_ref = useRef(null);
  const shift_to_ref = useRef(null);
  const week_from_ref = useRef(null);
  const week_to_ref = useRef(null);

  const handleInput = (obj) => {
    const { name, value } = obj.target;
    setDoc((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleChange = (event) => {
    setDoc((prev) => {
      return { ...prev, sex: event.target.value };
    });
  };

  const handleShift = (event, name) => {
    setDoc((prev) => {
      return { ...prev, [name]: event };
    });
  };

  return (
    <>
      <Navbar />
      <CssBaseline />
      <main
        style={{
          backgroundImage: "linear-gradient(180deg, #00c6ff 0%, #0072ff 100%)",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Container
          style={{
            height: { height },
            maxWidth: "100%",
            // padding: "0%",
            // margin: "0%",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            padding: "2% 0",
          }}
        >
          <StyledToolbar />
          <Paper
            elevation={12}
            sx={{
              width: "50%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "2%",
            }}
          >
            <div className="header-medium">
              Monitor Appointments
              <Divider />
            </div>
            <Grid container>
              <Grid
                item
                xs={12}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <div className="header-tiny">
                  Personal Details
                  <Divider />
                </div>
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
                  inputRef={name_ref}
                  label="Full Name"
                  name="name"
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
                <TextField
                  variant="outlined"
                  inputRef={age_ref}
                  label="Age"
                  name="age"
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
                    value={doc.sex}
                    label="Sex"
                    onChange={handleChange}
                    ref={sex_ref}
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
                md={6}
                lg={6}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <TextField
                  variant="outlined"
                  inputRef={spec_ref}
                  label="Speciality"
                  name="speciality"
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
                <TextField
                  variant="outlined"
                  inputRef={email_ref}
                  label="Email"
                  name="email"
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
                <TextField
                  variant="outlined"
                  inputRef={ph_no_ref}
                  label="Phone No."
                  name="ph_no"
                  onChange={handleInput}
                  style={{
                    margin: "3% 0",
                    width: "90%",
                  }}
                  align="left"
                />
              </Grid>
              <Grid container item xs={12}>
                <Grid
                  item
                  xs={12}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <div className="header-tiny">
                    Shift Timings
                    <Divider />
                  </div>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={6}
                  lg={6}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    padding: "3% 0",
                  }}
                >
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <TimePicker
                      label="From"
                      ref={shift_from_ref}
                      value={doc.shift_from}
                      onChange={(e) => handleShift(e, "shift_from")}
                      style={{
                        margin: "3% 0",
                        width: "90%",
                      }}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={6}
                  lg={6}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    padding: "3% 0",
                  }}
                >
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <TimePicker
                      label="To"
                      ref={shift_to_ref}
                      value={doc.shift_to}
                      onChange={(e) => handleShift(e, "shift_to")}
                      style={{
                        margin: "3% 0",
                        width: "90%",
                      }}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </Grid>
              </Grid>
              <Grid container item xs={12}>
                <Grid
                  item
                  xs={12}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <div className="header-tiny">
                    Workdays
                    <Divider />
                  </div>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={6}
                  lg={6}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <FormControl sx={{ width: "90%", margin: "3% 0" }}>
                    <InputLabel id="demo-simple-select-label">From</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={doc.week_from}
                      name="week_from"
                      label="From"
                      onChange={handleInput}
                      ref={week_from_ref}
                    >
                      <MenuItem value={"Monday"}>Monday</MenuItem>
                      <MenuItem value={"Tuesday"}>Tuesday</MenuItem>
                      <MenuItem value={"Wednesday"}>Wednesday</MenuItem>
                      <MenuItem value={"Thursday"}>Thursday</MenuItem>
                      <MenuItem value={"Friday"}>Friday</MenuItem>
                      <MenuItem value={"Saturday"}>Saturday</MenuItem>
                      <MenuItem value={"Sunday"}>Sunday</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={6}
                  lg={6}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <FormControl sx={{ width: "90%", margin: "3% 0" }}>
                    <InputLabel id="demo-simple-select-label">To</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={doc.week_to}
                      name="week_to"
                      label="To"
                      onChange={handleInput}
                      ref={week_to_ref}
                    >
                      <MenuItem value={"Monday"}>Monday</MenuItem>
                      <MenuItem value={"Tuesday"}>Tuesday</MenuItem>
                      <MenuItem value={"Wednesday"}>Wednesday</MenuItem>
                      <MenuItem value={"Thursday"}>Thursday</MenuItem>
                      <MenuItem value={"Friday"}>Friday</MenuItem>
                      <MenuItem value={"Saturday"}>Saturday</MenuItem>
                      <MenuItem value={"Sunday"}>Sunday</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <FormHelperText
                  id="outlined-weight-helper-text"
                  style={{
                    textAlign: "center",
                    color: "red",
                    fontSize: "1em",
                    marginBottom: "1%",
                    fontFamily: 'Montserrat'
                  }}
                >
                  * All fields are mandatory
                </FormHelperText>
              </Grid>
              <Grid
                item
                xs={12}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Button
                  variant="contained"
                  className="login-button"
                  onClick={() => {
                    // Submit();
                    console.log(doc);
                  }}
                  sx={{ width: "60%" }}
                >
                  Register Doctor
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </main>
    </>
  );
};

export default AdminDash;
