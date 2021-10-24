import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { baseurl } from "../../../api/url";
import { getSingleDoctor } from "../../../actions/doctors";
import { getSlots, createAppointments } from "../../../actions/appointments";
import Grid from "@mui/material/Grid";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import MobileDatePicker from "@mui/lab/MobileDatePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import { toast } from "react-toastify";
import useMediaQuery from "@mui/material/useMediaQuery";
import { styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: "center",
  paddingTop: theme.spacing(3),
  marginBottom: theme.spacing(2),
}));

const Doctor = ({ id }) => {
  const [doc, setDoc] = useState({});
  const [slots, setSlots] = useState([]);
  const [app, setApp] = useState({
    date: new Date(),
    slot: "",
  });
  const dispatch = useDispatch();
  const history = useHistory();
  const tab = useMediaQuery("(max-width:630px)");

  const handleShift = (event, name) => {
    event.getDate() < new Date().getDate()
      ? toast.error("Please select date today or in the future.")
      : setApp((prev) => {
          return { ...prev, [name]: event };
        });
  };

  const handleSlot = (e) => {
    setApp((prev) => {
      return { ...prev, slot: e.target.value };
    });
  };

  const Submit = () => {
    if (app.slot === "") {
      toast.error("Please select a slot for appointment");
    } else {
      dispatch(createAppointments({ doctor_id: id, slot: app }));
      history.goBack();
    }
  };

  useEffect(() => {
    const getData = async () => {
      let data = await dispatch(getSingleDoctor(id));
      setDoc(data);
    };
    getData();
  }, [id, dispatch]);

  useEffect(() => {
    const getData = async () => {
      const data = await dispatch(getSlots(id, app.date));
      Array.isArray(data) && setSlots(data);
    };
    getData();
  }, [id, app.date, dispatch]);

  return (
    <>
      <div className="card-content-container-open">
        {tab && <StyledToolbar />}
        <motion.div
          className="card-content-open"
          layoutId={`card-container-${id}`}
          style={{ width: tab ? "100%" : "60%", height: "100%" }}
        >
          <motion.div
            className="card-image-container"
            layoutId={`card-image-container-${id}`}
          >
            <img
              className="card-image"
              src={`${baseurl}/${doc?.profile_pic}`}
              alt=""
            />
          </motion.div>
          <motion.div
            className="title-container"
            layoutId={`title-container-${id}`}
          >
            <span className="category">{doc?.speciality?.speciality}</span>
            <h2>{doc?.name}</h2>
          </motion.div>
          <motion.div className="content-container" animate>
            <Grid
              container
              spacing={1}
              justifyContent="center"
              style={{ padding: "4% 2%", width: "100%" }}
            >
              <Grid
                item
                xs={12}
                md={6}
                lg={6}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  {tab ? (
                    <MobileDatePicker
                      label="Appointment Date"
                      inputFormat="dd/MM/yyyy"
                      value={app.date}
                      onChange={(e) => handleShift(e, "date")}
                      renderInput={(params) => (
                        <TextField {...params} style={{ width: "90%" }} />
                      )}
                      style={{
                        margin: "3% 0",
                        width: "90%",
                      }}
                    />
                  ) : (
                    <DesktopDatePicker
                      label="Appointment Date"
                      inputFormat="dd/MM/yyyy"
                      value={app.date}
                      onChange={(e) => handleShift(e, "date")}
                      renderInput={(params) => (
                        <TextField {...params} style={{ width: "90%" }} />
                      )}
                    />
                  )}
                </LocalizationProvider>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                lg={6}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FormControl sx={{ width: "90%", margin: "3% 0" }}>
                  <InputLabel id="demo-simple-select-label">Slot</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={app.slot}
                    label="Slot"
                    onChange={handleSlot}
                  >
                    {slots.length === 0 ? (
                      <MenuItem value="">No Slots Available</MenuItem>
                    ) : (
                      slots.map((slot, index) => {
                        return (
                          !slot?.booked && (
                            <MenuItem key={index} value={slot?.slot}>
                              {slot?.slot}
                            </MenuItem>
                          )
                        );
                      })
                    )}
                  </Select>
                </FormControl>
              </Grid>
              <Grid
                item
                xs={12}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Button
                  variant="contained"
                  className="login-button"
                  onClick={() => {
                    Submit();
                  }}
                  sx={{ width: "60%" }}
                >
                  Book Appointment
                </Button>
              </Grid>
            </Grid>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.15 } }}
          transition={{ duration: 0.2, delay: 0.15 }}
          style={{ pointerEvents: "auto", height: "100%" }}
          className="overlay2"
          onClick={() => {
            history.goBack();
          }}
        ></motion.div>
      </div>
    </>
  );
};

export default Doctor;
