import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import useMediaQuery from "@mui/material/useMediaQuery";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";
import Navbar from "../../components/Navbar";
import { getHistory } from "../../actions/appointments";

import { useDispatch } from "react-redux";
const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: "center",
  paddingTop: theme.spacing(3),
  marginBottom: theme.spacing(2),
}));

const History = () => {
  document.title = "Appointment History - Autodoc";
  const tab = useMediaQuery("(max-width:630px)");
  const dispatch = useDispatch();
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let data = await dispatch(getHistory());
      setHistory(data);
    };
    getData();
  }, [dispatch]);

  console.log(history);

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
        }}
      >
        <Container
          style={{
            maxWidth: "100%",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            padding: "2% 0",
          }}
        >
          <StyledToolbar />
          <Paper
            elevation={12}
            sx={{
              width: tab ? "90%" : "50%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "2%",
            }}
          >
            <div className="header-tiny" style={{ fontWeight: "900" }}>
              Appointment History
              <Divider />
            </div>
            <Grid container>
              {history.length > 0 && (
                <Grid item xs={12} style={{ marginTop: "4%" }}>
                  <TableContainer component={Paper}>
                    <Table
                      size="small"
                      aria-label="a dense table"
                    >
                      <TableHead>
                        <TableRow>
                          <TableCell>Patient Name</TableCell>
                          <TableCell>Doctor Name</TableCell>
                          <TableCell>Date</TableCell>
                          <TableCell>Slot</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {history.map((row, index) => (
                          <TableRow
                            key={index}
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                          >
                            <TableCell component="th" scope="row">
                              {row.patient_id.name}
                            </TableCell>
                            <TableCell>{row.doctor_id.name}</TableCell>
                            <TableCell>{row.slot.date.slice(0,10)}</TableCell>
                            <TableCell>{row.slot.slot}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Grid>
              )}
            </Grid>
          </Paper>
        </Container>
      </main>
    </>
  );
};

export default History;
