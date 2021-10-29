import React, { useState, useRef, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Navbar from "../../components/Navbar";
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import ImageUploader from "react-images-upload";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

import {
  createSpeciality,
  getSpeciality,
  deleteSpeciality,
} from "../../actions/speciality";
import { toast } from "react-toastify";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: "center",
  paddingTop: theme.spacing(3),
  marginBottom: theme.spacing(2),
}));

const AddSpeciality = () => {
  document.title = "Edit Speciality - Autodoc";
  const dispatch = useDispatch();
  const [spec, setSpec] = useState({
    speciality: "",
    image: "",
  });

  const specs = useSelector((state) => state.speciality.speciality);
  const name_ref = useRef(null);

  const Submit = () => {
    if (spec.speciality === "") {
      name_ref.current.focus();
    } else if (spec.image === "") {
      toast.error("Please select an image!");
    } else {
      var formData = new FormData();
      formData.append("speciality", spec.speciality);
      formData.append("image", spec.image);
      dispatch({ type: "LOAD" });
      dispatch({type: 'NEW_SPEC', data: {speciality: spec.speciality, image: spec.image, _id: specs.length}})
      dispatch(
        createSpeciality(formData, () => {
          setSpec({
            speciality: "",
            image: "",
          });
          dispatch({ type: "LOAD" });
        })
      );
    }
  };

  const Delete = (id) => {
    const handleClickDelete = () => {
      dispatch(deleteSpeciality(id));
    };
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className="custom-ui">
            <h1>Delete Speciality?</h1>
            <div className="confirm-alert-buttons">
              <Button
                variant="outlined"
                onClick={onClose}
                sx={{ color: "white", borderColor: "white" }}
              >
                Cancel
              </Button>
              <Button
                variant="outlined"
                onClick={() => {
                  handleClickDelete();
                  onClose();
                }}
                sx={{ color: "white", borderColor: "white" }}
              >
                Delete
              </Button>
            </div>
          </div>
        );
      },
    });
  };

  useEffect(() => {
    dispatch(getSpeciality());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <CssBaseline />
      <main
        style={{
          backgroundImage: "linear-gradient(180deg, #00c6ff 0%, #0072ff 100%)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          minHeight: "100vh",
          maxWidth: "100%",
        }}
      >
        <Container
          style={{
            minHeight: "100vh",
            maxWidth: "100%",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            padding: "2% 0",
          }}
        >
          <StyledToolbar />
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              md={specs.length === 0 ? 12 : 6}
              lg={specs.length === 0 ? 12 : 6}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Paper
                elevation={12}
                sx={{
                  width: "90%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "2%",
                }}
              >
                <div
                  className="header-medium"
                  style={{ justifySelf: "flex-start" }}
                >
                  Add Speciality
                  <Divider />
                </div>
                <Grid container sx={{ justifySelf: "center" }}>
                  <Grid
                    item
                    xs={12}
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    <TextField
                      variant="outlined"
                      inputRef={name_ref}
                      label="Speciality Name"
                      value={spec.speciality}
                      name="name"
                      onChange={(e) => {
                        setSpec((prev) => {
                          return { ...prev, speciality: e.target.value };
                        });
                      }}
                      style={{
                        margin: "3% 0",
                        width: "90%",
                      }}
                      align="center"
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    <ImageUploader
                      withIcon={true}
                      withPreview={true}
                      label=""
                      buttonText="Upload Background Image"
                      singleImage={true}
                      onChange={(e) => {
                        setSpec((prev) => {
                          return {
                            ...prev,
                            image: e[0],
                          };
                        });
                      }}
                      imgExtension={[".jpg", ".gif", ".png", ".svg"]}
                      maxFileSize={1048576}
                      fileSizeError="File size is too big"
                    />
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
                        Submit();
                      }}
                      sx={{ width: "60%" }}
                    >
                      Add Speciality
                    </Button>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            {specs.length !== 0 && (
              <Grid
                item
                xs={12}
                md={6}
                lg={6}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Paper
                  elevation={12}
                  sx={{
                    width: "90%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: "2%",
                  }}
                >
                  <div className="header-medium">
                    Delete Speciality
                    <Divider />
                  </div>
                  <Grid
                    container
                    justifyContent="center"
                    style={{ margin: "2%" }}
                  >
                    {specs.map((spec, index) => {
                      return (
                        <Grid
                          container
                          item
                          xs={12}
                          key={index}
                          style={{ maxWidth: "60%" }}
                        >
                          <Grid item xs={10} style={{display: 'flex', justifyContent: 'center'}}>
                            <Typography
                              variant="h5"
                              style={{ fontFamily: "Montserrat, sans serif" }}
                            >
                              {spec.speciality}
                            </Typography>
                          </Grid>
                          <Grid item xs={2}>
                            <IconButton onClick={() => Delete(spec._id)}>
                              <DeleteIcon />
                            </IconButton>
                          </Grid>
                        </Grid>
                      );
                    })}
                  </Grid>
                </Paper>
              </Grid>
            )}
          </Grid>
        </Container>
      </main>
    </>
  );
};

export default AddSpeciality;
