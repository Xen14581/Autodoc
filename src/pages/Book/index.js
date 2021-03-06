import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import { baseurl } from "../../api/url";
import { AnimatePresence } from "framer-motion";
import Doctor from "./Doctor/";
import { getDoctors } from "../../actions/doctors";
import { useDispatch } from "react-redux";
import { styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: "center",
  paddingTop: theme.spacing(3),
  marginBottom: theme.spacing(2),
}));

const Book = ({ match }) => {
  let { id, doc } = match.params;
  const imageHasLoaded = true;
  const history = useHistory();
  const dispatch = useDispatch();
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await dispatch(getDoctors(id));
      setDocs(data);
    };
    getData();
  }, [id, dispatch]);

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
            Doctors
            <Divider sx={{ bgcolor: "white" }} />
          </Typography>
          <Grid
            container
            justifyContent="center"
            spacing={2}
            style={{ padding: "2%" }}
          >
            {docs.map((doc) => {
              return (
                doc?.profile_pic && (
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    md={6}
                    lg={4}
                    key={doc._id}
                    style={{ height: "100%" }}
                  >
                    <div
                      className="card-content-container"
                      onClick={() =>
                        !history.location.pathname.includes(doc._id) &&
                        history.push(`${history.location.pathname}/${doc._id}`)
                      }
                    >
                      <motion.div
                        className="card-content"
                        layoutId={`card-container-${doc._id}`}
                      >
                        <motion.div
                          className="card-image-container"
                          layoutId={`card-image-container-${doc._id}`}
                          style={{
                            backgroundImage: `url(${baseurl}/${doc?.profile_pic})`,
                          }}
                        >
                          <img
                            className="card-image"
                            src={`${baseurl}/${doc?.profile_pic}`}
                            alt=""
                          />
                        </motion.div>
                        <motion.div
                          className="title-container"
                          layoutId={`title-container-${doc._id}`}
                        >
                          <h2>{doc.name}</h2>
                        </motion.div>
                      </motion.div>
                    </div>
                  </Grid>
                )
              );
            })}
            <AnimatePresence>
              {doc && imageHasLoaded && <Doctor id={doc} key="item" />}
            </AnimatePresence>
          </Grid>
        </Container>
      </main>
    </>
  );
};

export default Book;
