import React from "react";
import Navbar from "../../../components/Navbar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Backdrop from "@mui/material/Backdrop";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { useHistory, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { baseurl } from "../../../api/url";
import p from "../../../assets/brain-neural-net.jpg";

const Doctor = ({ id }) => {
  const doctor = {
    _id: "98890284nvjwrnvkbwue",
    name: "Dhrumil Vora",
    speciality: "Magician",
    src: "",
  };
  const history = useHistory();
  return (
    <>
      <div className="card-content-container-open">
        <motion.div className="card-content-open" layoutId={`card-container-${id}`} style={{width: '60%', height: '50%'}}>
          <motion.div
            className="card-image-container"
            layoutId={`card-image-container-${id}`}
          >
            <img
              className="card-image"
              // src={`${baseurl}/${doctor.src}`}
              src={p}
              alt=""
            />
          </motion.div>
          <motion.div
            className="title-container"
            layoutId={`title-container-${id}`}
          >
            <span className="category">{doctor.speciality}</span>
            <h2>{doctor.name}</h2>
          </motion.div>
          <motion.div className="content-container" animate></motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.15 } }}
          transition={{ duration: 0.2, delay: 0.15 }}
          style={{ pointerEvents: "auto", height: "100%" }}
          className="overlay2"
          onClick={() => {
            history.goBack()
          }}
        ></motion.div>
      </div>
    </>
  );
};

export default Doctor;
