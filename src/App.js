import "./sass/main.scss";
import React, { useEffect } from "react";
import DocHome from "../src/DoctorSide/DocHome";
import Appointments from "../src/PatientSide/Appointments";
import "./App.css";
import Homepage from "./Homepage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AOS from 'aos';
import "aos/dist/aos.css";
import Doctors from "../src/PatientSide/Doctors";
import Home from "../src/PatientSide/Home";
import Notes from "../src/PatientSide/Notes";
import PrivateRoute from "../src/Utilities/PrivateRoute";
import Profile from "../src/PatientSide/Profile";
import AdminHome from "../src/AdminSide/AdminHome";
import AddDoctors from "../src/AdminSide/AddDoctors";
import Specialization from "../src/AdminSide/Specialization";
import DoctorsList from "../src/AdminSide/DoctorsList";
import PrivateDoctor from "../src/Utilities/PrivateDoctor";
import PrivateAdmin from "../src/Utilities/PrivateAdmin";
import PrivatePatient from "../src/Utilities/PrivatePatient";
import NotesDoctors from "./PatientSide/NotesDoctors";
import AHistory from "./DoctorSide/AHistory";
import Prescriptions from "./PatientSide/Prescriptions";
import ADetails from "./DoctorSide/ADetails";
import AddNotes from "./DoctorSide/AddNotes";
import ViewAppointments from "./AdminSide/ViewAppointments";
import BookApp from "./PatientSide/BookApp";
import BookedApp from "./PatientSide/BookedApp";
import AddPrescriptions from "./DoctorSide/AddPrescriptions";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Landing from "./pages/Landing";
import Login from "./pages/Login/";
import Register from "./pages/Register/";
import PatientDash from "./pages/Dash/Patient/";
import DoctorDash from "./pages/Dash/Doctor";
import AdminDash from "./pages/Dash/Admin";

import OverLay from "./components/Overlay/";
import Loader from "./components/Loader/";

function App() {
  useEffect(() => {
    AOS.init({ once: true });
    AOS.refresh();
  }, []);

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover={false}
      />
      <Router hashType="noslash">
        <div className="App">
          <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/dash" exact component={PatientDash} />
            <Route path="/docdash" exact component={DoctorDash} />
            <Route path="/admindash" exact component={AdminDash} />
          </Switch>
          <Switch>
            <PrivatePatient path="/home" exact component={Home} />
            <PrivatePatient
              path="/appointments"
              exact
              component={Appointments}
            />
            <PrivatePatient path="/notes/:d_id" exact component={Notes} />
            <PrivatePatient
              path="/doctors/:specialization"
              exact
              component={Doctors}
            />
            <PrivateRoute path="/profile" exact component={Profile} />
            <PrivatePatient
              path="/doctorsnotes"
              exact
              component={NotesDoctors}
            />
            <PrivatePatient
              path="/prescriptions"
              exact
              component={Prescriptions}
            />
            <PrivatePatient
              path="/bookappointments/:d_id"
              exact
              component={BookApp}
            />
            <PrivatePatient
              path="/bookedappointments"
              exact
              component={BookedApp}
            />
          </Switch>
          <Switch>
            <PrivateDoctor path="/dochome" exact component={DocHome} />
            <PrivateDoctor
              path="/appointmenthistory"
              exact
              component={AHistory}
            />
            <PrivateDoctor
              path="/appointmentdetails"
              exact
              component={ADetails}
            />
            <PrivateDoctor
              path="/addnotes/:a_id/:p_id"
              exact
              component={AddNotes}
            />
            <PrivateDoctor
              path="/addprescriptions/:a_id/:p_id"
              exact
              component={AddPrescriptions}
            />
          </Switch>
          <Switch>
            <PrivateAdmin path="/adminhome" exact component={AdminHome} />
            <PrivateAdmin path="/adddoctors" exact component={AddDoctors} />
            <PrivateAdmin
              path="/specialization"
              exact
              component={Specialization}
            />
            <PrivateAdmin
              path="/doctorslist/:specialization"
              exact
              component={DoctorsList}
            />
            <PrivateAdmin
              path="/viewappointments/:d_id"
              exact
              component={ViewAppointments}
            />
          </Switch>
        </div>
        <OverLay />
        <Loader loading={true} height="100vh" width="100vw" />
      </Router>
    </>
  );
}

export default App;
