import React from "react";
import Navbar from "../../../components/Navbar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { Link, useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import p from "../../../assets/brain-neural-net.jpg";
import { baseurl } from "../../../api/url";

const Specialities = () => {
  const history = useHistory();
  const specialities = [
    {
      _id: "831nf813nc9dnv839qf",
      name: "Cardiologist",
      src: "",
    },
    {
      _id: "9247rbfvf9q83nfq783",
      name: "Pediatrician",
      src: "",
    },
    {
      _id: "8245ffj85rh94wh8v9w4h",
      name: "Magician",
      src: "",
    },
    {
      _id: "N8QF938977G427o47t97h4",
      name: "Dentist",
      src: "",
    },
  ];
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
        <Container
          style={{
            paddingTop: "7%",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h2"
            sx={{ color: "white", fontFamily: "Montserrat, sans serrif" }}
          >
            Specialities
            <Divider sx={{ bgcolor: "white" }} />
          </Typography>
          <Grid
            container
            justifyContent="center"
            spacing={2}
            style={{ padding: "2%" }}
          >
            {specialities.map((spec) => {
              return (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={6}
                  lg={4}
                  key={spec._id}
                  style={{ height: "100%" }}
                >
                  <div
                    className="card-content-container"
                    onClick={() => history.push(`/book/${spec._id}`)}
                  >
                    <motion.div
                      className="card-content"
                      layoutId={`card-container-${spec._id}`}
                    >
                      <motion.div
                        className="card-image-container"
                        layoutId={`card-image-container-${spec._id}`}
                      >
                        <img
                          className="card-image"
                          // src={`${baseurl}/${spec.src}`}
                          src={p}
                          alt=""
                        />
                      </motion.div>
                      <motion.div
                        className="title-container"
                        layoutId={`title-container-${spec._id}`}
                      >
                        <h2>{spec.name}</h2>
                      </motion.div>
                    </motion.div>
                  </div>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </main>
    </>
  );
};

export default Specialities;
