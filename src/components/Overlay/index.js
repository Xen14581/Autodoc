import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Grid, useMediaQuery } from "@material-ui/core";
import { Logout } from "../../actions/auth";

const OverLay = () => {
  const val = useSelector((state) => state.hamburger.Open);
  const dispatch = useDispatch();
  const tab = useMediaQuery("(max-width:680px)");
  const user = useSelector((state) => state.auth);
  const history = useHistory();
  return (
    <>
      <div
        id="myNav"
        className="overlay"
        style={
          val
            ? { height: "100%", overflow: "none" }
            : { height: "0%", overflow: "hidden" }
        }
      >
        <div className="overlay-content">
          <Link to='/profile' onClick={() => dispatch({ type: "TOGGLE" })}>
            My Profile
          </Link>
          <Link to='/checkup' onClick={() => dispatch({ type: "TOGGLE" })}>
            AI Checkup
          </Link>
          <Link to='/appointments' onClick={() => dispatch({ type: "TOGGLE" })}>
            Appointments
          </Link>
          <Link to='/doctorsnotes' onClick={() => dispatch({ type: "TOGGLE" })}>
            Notes by Doctor
          </Link>
          <Link to='/prescriptions' onClick={() => dispatch({ type: "TOGGLE" })}>
            Prescriptions
          </Link>
          {/* {user.firstName ? ( */}
            <Grid
              container
              direction="column"
              alignItems="center"
              justifyContent="center"
              spacing={0}
            >
              <Grid
                item
                xs={12}
                container
                alignItems="center"
                justifyContent="center"
              >
                <button
                  className="button"
                  style={
                    tab
                      ? {
                          fontSize: "1rem",
                          width: "50%",
                          padding: "1%",
                        }
                      : {
                          fontSize: "1rem",
                          width: "20%",
                          padding: "1%",
                        }
                  }
                  onClick={() => {
                    Logout(dispatch, history);
                    dispatch({type: "TOGGLE"})
                  }}
                >
                  <b>LOG OUT</b>
                </button>
              </Grid>
            </Grid>
          {/* ) : (
            null
          )} */}
        </div>
      </div>
    </>
  );
};

export default OverLay;
