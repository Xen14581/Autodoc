import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import Navbar from "../../components/Navbar";
import io from "socket.io-client";
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
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import bg from "../../assets/drawing-1.svg";
import Messages from "../../components/Messages";
import MessageInput from "../../components/MessageInput";
import Chats from "../../components/Chats";
import notSelected from "../../assets/online-doctor-animate.svg";
import { baseurl } from "../../api/url";
import useMediaQuery from "@mui/material/useMediaQuery";
import IconButton from "@mui/material/IconButton";
import { useDispatch } from "react-redux";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: "center",
  paddingTop: theme.spacing(3),
  marginBottom: theme.spacing(2),
}));

const Appointments = () => {
  document.title = "Appointments - Autodoc";
  const tab = useMediaQuery("(max-width:899px)");
  const dispatch = useDispatch();
  const selected = useSelector((state) => state.chat.selected);
  const user = useSelector((state) => state.auth);
  const [socket, setSocket] = useState();
  const [search, setSearch] = useState("");
  const ref = useRef();

  useEffect(() => ref.current?.scrollIntoView());

  useEffect(() => {
    // const newSocket = io(`http://${window.location.hostname}:8000`);
    const newSocket = io(`wss://api-autodoc.herokuapp.com`);
    setSocket(newSocket);
    return () => newSocket.close();
  }, [setSocket]);

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
        <Box
          style={{
            padding: 0,
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <StyledToolbar />
          <Paper elevation={15} style={{ height: "85vh", width: "90%" }}>
            <Grid container style={{ height: "100%" }}>
              <Grid
                container
                item
                xs={12}
                md={4}
                direction="column"
                style={{ display: tab && selected && "none", width: "100%" }}
              >
                <Grid
                  container
                  item
                  xs={3}
                  justifyContent="space-evenly"
                  direction="column"
                  style={{ paddingLeft: "10%", width: "100%" }}
                >
                  <Grid item xs={2}>
                    <div className="header-tiny" style={{ fontWeight: "1000" }}>
                      Appointments
                    </div>
                  </Grid>
                  <Grid item xs={1}>
                    <TextField
                      id="outlined-search"
                      label="Search"
                      type="search"
                      onChange={(e) => {
                        setSearch(e.target.value);
                      }}
                      InputProps={{
                        endAdornment: <SearchIcon />,
                      }}
                      style={{ width: "90%" }}
                    />
                  </Grid>
                </Grid>
                <Grid
                  container
                  item
                  xs={9}
                  justifyContent="center"
                  style={{ overflow: "auto" }}
                >
                  <Chats search={search} />
                </Grid>
                <Divider orientation="vertical" light={false} />
              </Grid>
              <Grid
                item
                xs={12}
                md={8}
                style={{ display: tab && !selected && "none" }}
              >
                {selected ? (
                  <div
                    style={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      background: "#ECECEC",
                    }}
                  >
                    <header style={{ height: "8%", marginTop: "1%" }}>
                      <Container sx={{ width: "100%", height: "100%" }}>
                        <Grid container spacing={1}>
                          {tab && (
                            <Grid item xs={2}>
                              <IconButton
                                size="large"
                                onClick={() => {
                                  dispatch({
                                    type: "SELECTEDCHAT",
                                    data: null,
                                  });
                                }}
                              >
                                <ArrowBackIcon />
                              </IconButton>
                            </Grid>
                          )}
                          <Grid item xs={2}>
                            <Avatar
                              alt="Remy Sharp"
                              src={
                                user.role === "patient"
                                  ? selected.participants.doctor_id.profile_pic
                                    ? baseurl +
                                      "/" +
                                      selected.participants.doctor_id
                                        .profile_pic
                                    : ""
                                  : user.role === "doctor" &&
                                    selected.participants.patient_id.profile_pic
                                  ? baseurl +
                                    "/" +
                                    selected.participants.patient_id.profile_pic
                                  : ""
                              }
                              sx={{ width: 40, height: 40 }}
                            >
                              {user.role === "patient"
                                ? selected.participants.doctor_id.profile_pic
                                  ? ""
                                  : selected.participants.doctor_id.name[0]
                                : user.role === "doctor" &&
                                  selected.participants.patient_id.profile_pic
                                ? ""
                                : selected.participants.patient_id.name[0]}
                            </Avatar>
                          </Grid>
                          <Grid item xs={8}>
                            <h3 style={{ margin: "1% 0" }}>
                              {user.role === "patient"
                                ? selected.participants.doctor_id.name
                                : user.role === "doctor" &&
                                  selected.participants.patient_id.name}
                            </h3>
                          </Grid>
                        </Grid>
                      </Container>
                    </header>
                    <Divider />
                    <div
                      style={{
                        height: "82%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginLeft: "0.2%",
                        backgroundImage: `url(${bg})`,
                        backgroundPositionX: "center",
                        backgroundPositionY: "top",
                        backgroundSize: "cover",
                      }}
                    >
                      <div
                        style={{
                          height: "100%",
                          width: "100%",
                          backgroundColor: "rgba(255, 255, 255, 0.4)",
                          overflow: "auto",
                        }}
                      >
                        {socket && <Messages socket={socket} />}
                        <div ref={ref} />
                      </div>
                    </div>
                    <Divider />
                    <footer
                      style={{
                        height: "10%",
                        display: "flex",
                        alignItems: "center",
                        padding: "1%",
                        justifyContent: "space-between",
                        background: "#ECECEC",
                      }}
                    >
                      {socket && <MessageInput socket={socket} />}
                    </footer>
                  </div>
                ) : (
                  <Grid container sx={{ height: "90%" }}>
                    <Grid
                      item
                      xs={12}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <object
                        type="image/svg+xml"
                        data={notSelected}
                        style={{ height: "auto", width: "60%" }}
                      >
                        <img src={notSelected} alt="not Selected" />
                      </object>
                      <Divider />
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Typography
                        component="h2"
                        variant="h5"
                        xs={{ width: "50%" }}
                      >
                        Click on an Appointment to open Chat!
                      </Typography>
                    </Grid>
                  </Grid>
                )}
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </main>
    </>
  );
};

export default Appointments;
