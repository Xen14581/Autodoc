import React, { useState, useRef } from "react";
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

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: "center",
  paddingTop: theme.spacing(3),
  marginBottom: theme.spacing(2),
}));

const AddSpeciality = () => {
  document.title = "Add doctors- Speciality";
  const height = window.innerHeight;
  const [doc, setDoc] = useState({
    name: "",
  });

  const name_ref = useRef(null);
  const handleInput = (obj) => {
    const { name, value } = obj.target;
    setDoc((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <>
      <Navbar />
      <CssBaseline />
      <main
        style={{
          backgroundImage: "linear-gradient(180deg, #00c6ff 0%, #0072ff 100%)",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Container
          style={{
            height: { height },
            maxWidth: "100%",
            // padding: "0%",
            // margin: "0%",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            padding: "2% 0",
          }}
        ></Container>
        <StyledToolbar />
        <Paper
          elevation={12}
          sx={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "2%",
          }}
        ></Paper>
        <div className="header-medium">
          Add Speciality
          <Divider />
        </div>
        <Grid container>
          <Grid item xs = {12}
           sx={{ display: "flex", justifyContent: "center" }}
          >
           <div className="header-tiny">
              Details
              <Divider />
           </div>
          </Grid>
          <Grid 
            item 
            xs={12}
            md={6}
            lg={6}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <TextField 
              variant="outlined"
              inputRef={name_ref}
              label="Full Name"
              name="name"
              onChange={handleInput}
              style={{
                margin: "3% 0",
                width: "90%",
              }}
              align="center"
            
            
            
            />

          </Grid>


        </Grid>

      </main>
    </>
  );
};

export default AddSpeciality;
