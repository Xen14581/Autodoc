import React, { useEffect } from "react";
import Navbar from "../../../components/Navbar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { baseurl } from "../../../api/url";
import { getSpeciality } from "../../../actions/speciality";
import { styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: "center",
  paddingTop: theme.spacing(3),
  marginBottom: theme.spacing(2),
}));

const Specialities = () => {
  document.title='Specialities - Autodoc'
  const history = useHistory();
  const dispatch = useDispatch();
  const specs = useSelector((state) => state.speciality.speciality);

  useEffect(() => {
    dispatch(getSpeciality());
  }, [dispatch]);

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
          minHeight: "100vh",
        }}
      >
        <StyledToolbar />
        <Container
          style={{
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
            {specs.map((spec) => {
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
                        style={{background: `linear-gradient(rgba(255,255,255,0.8), rgba(255,255,255,0.6), rgba(255,255,255,0)), url(${baseurl + "/" + spec.image})`}}
                      >
                        {/* <img
                          className="card-image"
                          src={baseurl + "/" + spec.image}
                          // src={p}
                          alt=""
                        /> */}
                      </motion.div>
                      <motion.div
                        className="title-container"
                        layoutId={`title-container-${spec._id}`}
                      >
                        <h2>{spec.speciality}</h2>
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
