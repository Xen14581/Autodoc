import React, { useState, useRef } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import Navbar from "../../components/Navbar";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import MobileDatePicker from "@mui/lab/MobileDatePicker";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useSelector, useDispatch } from "react-redux";
import {
  UpdateProfilePic,
  ChangePassword,
  UpdateProfile,
} from "../../actions/auth";
import { baseurl } from "../../api/url";
import { styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: "center",
  paddingTop: theme.spacing(3),
  marginBottom: theme.spacing(2),
}));

const Profile = () => {
  document.title = 'My Profile - Autodoc'
  const user = useSelector((state) => state.auth);
  const tab = useMediaQuery("(max-width:630px)");
  const [image, setImage] = useState("");
  const imageInput = useRef(null);
  const dispatch = useDispatch();

  const width = window.innerWidth;
  const height = window.innerHeight;

  const [profile, setProfile] = useState({
    dob: user.dob,
    gender: user.gender,
    email: user.email,
  });
  const [changepass, setnewpass] = useState({
    old_password: "",
    new_password: "",
    confirm_password: "",
  });

  const changePfp = (image) => {
    setImage(image);
    const formData = new FormData();
    formData.append("image", image);
    dispatch(UpdateProfilePic(formData));
    setImage("");
  };

  const handleInput = (obj) => {
    const { name, value } = obj.target;
    setnewpass((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const ChangePass = () => {
    dispatch(
      ChangePassword(changepass, () =>
        setnewpass({
          old_password: "",
          new_password: "",
          confirm_password: "",
        })
      )
    );
  };

  const SaveProfile = () => {
    dispatch(
      UpdateProfile(profile, () => {
        setProfile({
          dob: user.dob,
          gender: user.gender,
          email: user.email,
        });
      })
    );
  };

  return (
    <main
      style={{
        height: "100%",
        minHeight: "100vh",
        padding: "0%",
        margin: "0%",
        maxWidth: "100%",
        background: "linear-gradient(180deg, #00c6ff 0%, #0072ff 100%)",
        overflow: "hidden",
      }}
    >
      <input
        ref={imageInput}
        type="file"
        style={{ display: "none" }}
        value={image}
        onChange={(e) => changePfp(e.target.files[0])}
        accept="image/png, image/jpeg, image/jpg , image/jfif"
      />
      <StyledToolbar />
      <Container
        style={{
          maxWidth: "100vw",
          height: "100%",
          padding: "0%",
          margin: "0%",
        }}
      >
        <Navbar />
        <Grid container justifyContent="center" spacing={3}>
          <Grid
            container
            item
            xs={12}
            lg={4}
            alignItems="center"
            justifyContent="center"
          >
            <Grid item>
              <Paper
                elevation={6}
                style={{
                  maxWidth: "100%",
                  padding: "4%",
                  borderRadius: 12,
                  height: "100%",
                }}
              >
                <Typography
                  variant="h4"
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
                    <Avatar
                      sx={{
                        width: (width / height) * 200,
                        height: (width / height) * 200,
                        bgcolor: "#5CB0FF",
                      }}
                      className="pfp"
                    >
                      <Avatar
                        alt="Profile Picture"
                        src={
                          user.profile_pic
                            ? baseurl + "/" + user.profile_pic
                            : ""
                        }
                        sx={{ width: "97%", height: "97%" }}
                      />
                      <div
                        className="pfp-overlay"
                        onClick={() => imageInput.current.click()}
                      >
                        <div style={{ width: "12%", height: "12%" }}>
                          <CameraAltIcon
                            style={{
                              fontSize: "xxx-large",
                              color: "white",
                              position: "fixed",
                            }}
                          />
                        </div>
                        <p>Change Profile Picture</p>
                      </div>
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
                        endAdornment: (
                          <Button variant="filled">Save Name</Button>
                        ),
                      }}
                    />
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
          <Grid
            container
            item
            xs={12}
            lg={7}
            direction="column"
            alignItems="center"
            spacing={2}
            sx={{
              height: "100%",
            }}
          >
            <Grid
              item
              xs={6}
              sx={{
                width: "100%",
                pl: "0 !important",
                display: "flex",
                alignItems: "center",
              }}
            >
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
                      {tab ? (
                        <MobileDatePicker
                          label="Date of Birth"
                          inputFormat="dd/MM/yyyy"
                          value={profile.dob}
                          onChange={(e) =>
                            setProfile((prev) => {
                              return {
                                ...prev,
                                dob: e,
                              };
                            })
                          }
                          renderInput={(params) => (
                            <TextField {...params} fullWidth />
                          )}
                          // disabled
                        />
                      ) : (
                        <DesktopDatePicker
                          label="Date of Birth"
                          inputFormat="dd/MM/yyyy"
                          value={profile.dob}
                          onChange={(e) =>
                            setProfile((prev) => {
                              return {
                                ...prev,
                                dob: e,
                              };
                            })
                          }
                          renderInput={(params) => (
                            <TextField {...params} fullWidth />
                          )}
                          // disabled
                        />
                      )}
                    </LocalizationProvider>
                  </Grid>
                  <Grid item xs={12} md={6} lg={6}>
                    <TextField
                      label="Gender"
                      value={user.gender}
                      fullWidth
                      disabled
                    />
                  </Grid>
                  <Grid item xs={12} md={6} lg={6}>
                    <TextField label="E-mail" value={user.email} fullWidth />
                  </Grid>
                  {user.role === "doctor" && (
                    <Grid item xs={12} md={6} lg={6}>
                      <TextField
                        label="Speciality"
                        value={user.speciality.speciality}
                        fullWidth
                        disabled
                      />
                    </Grid>
                  )}
                  <Grid
                    item
                    xs={12}
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <Button variant="contained" onClick={SaveProfile}>
                      Save Profile
                    </Button>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={6} sx={{ width: "100%", pl: "0 !important" }}>
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
                      name="old_password"
                      value={changepass.old_password}
                      sx={{ width: "70%" }}
                      onChange={handleInput}
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
                      name="new_password"
                      value={changepass.new_password}
                      sx={{ width: "70%" }}
                      onChange={handleInput}
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
                      name="confirm_password"
                      value={changepass.confirm_password}
                      sx={{ width: "70%" }}
                      onChange={handleInput}
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
                    <Button variant="contained" onClick={ChangePass}>
                      Change Password
                    </Button>
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
