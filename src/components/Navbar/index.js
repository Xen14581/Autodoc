import React, { useState } from "react";
import {
  AppBar,
  Grid,
  Toolbar,
  useMediaQuery,
  Button,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import { Link, useHistory } from "react-router-dom";
import Hamburger from "hamburger-react";
import { useDispatch, useSelector } from "react-redux";
import logo from "../../assets/Autodoc(2).svg";
import { Logout } from "../../actions/auth";
import { baseurl } from "../../api/url";

const Navbar = () => {
  const val = useSelector((state) => state.hamburger.Open);
  const user = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const [anchor, setAnchor] = useState(null);
  const tab = useMediaQuery("(max-width:630px)");

  return (
    <AppBar
      position="fixed"
      id="mynav"
      style={{
        backgroundColor: "white",
        zIndex: 21,
        boxShadow: `0 2px 4px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 8%)`,
        webbkitBoxShadow: `-1px 7px 28px -1px rgba(0,0,0,0.15)`,
        MozBoxShadow: `-1px 7px 28px -1px rgba(0,0,0,0.15)`,
      }}
    >
      <Toolbar>
        {tab ? (
          <Grid container spacing={1} alignItems="center">
            <Grid item xs={4}>
              <Hamburger
                toggled={val}
                toggle={() => dispatch({ type: "TOGGLE" })}
                rounded
                direction="right"
                color="rgb(2, 36, 96)"
                size={20}
              />
            </Grid>
            <Grid
              item
              xs={4}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Link to="/dash">
                <img src={logo} style={{ height: "4em" }} alt="LOGO" />
              </Link>
            </Grid>
            <Grid
              item
              xs={4}
              style={{ display: "flex", justifyContent: "flex-end" }}
            >
              <div>
                <Avatar
                  alt="profile pic"
                  src={baseurl + "/" + user.profile_pic}
                  onClick={(e) => {
                    setOpen(!open);
                    setAnchor(e.currentTarget);
                  }}
                  aria-controls="basic-menu"
                  aria-haspopup="true"
                  style={{ cursor: "pointer" }}
                />
                <Menu
                  open={open}
                  anchorEl={anchor}
                  onClose={() => setOpen(!open)}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem onClick={() => history.push("/profile")}>
                    Profile
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      Logout(dispatch, history);
                    }}
                  >
                    Logout
                  </MenuItem>
                </Menu>
              </div>
            </Grid>
          </Grid>
        ) : (
          <Grid
            container
            spacing={1}
            style={{ height: "96%" }}
            alignItems="center"
            justifyContent="flex-end"
          >
            <Grid item xs={1}>
              <Link to="/dash">
                <img src={logo} style={{ height: "4em" }} alt="LOGO" />
              </Link>
            </Grid>
            <Grid container item xs={11} justifyContent="flex-end">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                }}
              >
                {user.role !== "admin" ? (
                  <>
                    <Button
                      onClick={() => history.push("/checkup")}
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItens: "center",
                        borderBottom:
                          history.location.pathname === "/checkup"
                            ? "2px solid #0072ff"
                            : "",
                      }}
                    >
                      AI Checkup
                    </Button>
                    <Button
                      onClick={() => history.push("/book")}
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItens: "center",
                        borderBottom:
                          history.location.pathname === "/book"
                            ? "2px solid #0072ff"
                            : "",
                      }}
                    >
                      Book Appointment
                    </Button>
                    <Button
                      onClick={() => history.push("/appointments")}
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItens: "center",
                        borderBottom:
                          history.location.pathname === "/appointments"
                            ? "2px solid #0072ff"
                            : "",
                      }}
                    >
                      Appointments Chat
                    </Button>
                    <Button
                      onClick={() => history.push("/history")}
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItens: "center",
                        borderBottom:
                          history.location.pathname === "/history"
                            ? "2px solid #0072ff"
                            : "",
                      }}
                    >
                      Appointments History
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      onClick={() => history.push("/edit-speciality")}
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItens: "center",
                        borderBottom:
                          history.location.pathname === "/edit-speciality"
                            ? "2px solid #0072ff"
                            : "",
                      }}
                    >
                      Edit Specialities
                    </Button>
                    <Button
                      onClick={() => history.push("/manage-doc")}
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItens: "center",
                        borderBottom:
                          history.location.pathname === "/manage-doc"
                            ? "2px solid #0072ff"
                            : "",
                      }}
                    >
                      Manage Doctors
                    </Button>
                  </>
                )}
                <div>
                  <Avatar
                    alt="profile pic"
                    src={baseurl + "/" + user.profile_pic}
                    onClick={(e) => {
                      setOpen(!open);
                      setAnchor(e.currentTarget);
                    }}
                    aria-controls="basic-menu"
                    aria-haspopup="true"
                    style={{ cursor: "pointer" }}
                  />
                  <Menu
                    open={open}
                    anchorEl={anchor}
                    onClose={() => setOpen(!open)}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                  >
                    <MenuItem onClick={() => history.push("/profile")}>
                      Profile
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        Logout(dispatch, history);
                      }}
                    >
                      Logout
                    </MenuItem>
                  </Menu>
                </div>
              </div>
            </Grid>
          </Grid>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
