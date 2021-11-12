import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import MobileDatePicker from "@mui/lab/MobileDatePicker";
import useMediaQuery from "@mui/material/useMediaQuery";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";
import Navbar from "../../../components/Navbar";
import { getAppointmentsAdmin } from "../../../actions/appointments";

import { useDispatch, useSelector } from "react-redux";
const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: "center",
  paddingTop: theme.spacing(3),
  marginBottom: theme.spacing(2),
}));

function createData(p_name, d_name, date, slot) {
  return { p_name, d_name, date, slot };
}

const AdminDash = () => {
  document.title = "Admin Dash - Autodoc";
  const tab = useMediaQuery("(max-width:630px)");
  const dispatch = useDispatch();
  const reports = useSelector((state) => state.appointments.reports);
  const [doc, setDoc] = useState({
    from: new Date(),
    to: new Date(),
  });
  const [rows, setRows] = useState([]);

  const handleShift = (event, name) => {
    setDoc((prev) => {
      return { ...prev, [name]: event };
    });
  };

  const Submit = () => {
    dispatch(getAppointmentsAdmin(doc));
  };

  useEffect(() => {
    reports.map((report) => {
      setRows((prev) => {
        return !prev.includes(
          createData(
            report?.patient_id.name,
            report?.doctor_id.name,
            report?.slot.date,
            report?.slot.slot
          )
        )
          ? [
              ...prev,
              createData(
                report?.patient_id.name,
                report?.doctor_id.name,
                report?.slot.date,
                report?.slot.slot
              ),
            ]
          : prev;
      });
      return report;
    });
    return () => {
      setRows([]);
    };
  }, [reports]);

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
              Monitor Appointments
              <Divider />
            </div>
            <Grid container>
              <Grid
                item
                xs={12}
                md={6}
                lg={6}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  padding: "3% 0",
                }}
              >
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  {tab ? (
                    <MobileDatePicker
                      label="From"
                      inputFormat="dd/MM/yyyy"
                      value={doc.from}
                      onChange={(e) => handleShift(e, "from")}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  ) : (
                    <DesktopDatePicker
                      label="From"
                      inputFormat="dd/MM/yyyy"
                      value={doc.from}
                      onChange={(e) => handleShift(e, "from")}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  )}
                </LocalizationProvider>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                lg={6}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  padding: "3% 0",
                }}
              >
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  {tab ? (
                    <MobileDatePicker
                      label="To"
                      inputFormat="dd/MM/yyyy"
                      value={doc.to}
                      onChange={(e) => handleShift(e, "to")}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  ) : (
                    <DesktopDatePicker
                      label="To"
                      inputFormat="dd/MM/yyyy"
                      value={doc.to}
                      onChange={(e) => handleShift(e, "to")}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  )}
                </LocalizationProvider>
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
                  Get Appointments
                </Button>
              </Grid>
              {reports.length > 0 && (
                <Grid item xs={12} style={{ marginTop: "4%" }}>
                  <TableContainer component={Paper}>
                    <Table
                      // sx={{ minWidth: 650 }}
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
                        {rows.map((row, index) => (
                          <TableRow
                            key={index}
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                          >
                            <TableCell component="th" scope="row">
                              {row.p_name}
                            </TableCell>
                            <TableCell>{row.d_name}</TableCell>
                            <TableCell>{row.date.slice(8, 10)+row.date[7]+row.date.slice(5,7)+row.date[4]+row.date.slice(0,4)}</TableCell>
                            <TableCell>{row.slot}</TableCell>
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

export default AdminDash;
