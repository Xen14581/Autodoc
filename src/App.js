import "./sass/main.scss";
import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  // useHistory,
} from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useSelector } from "react-redux";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { AnimateSharedLayout } from "framer-motion";

import Landing from "./pages/Landing";
import Login from "./pages/Login/";
import Register from "./pages/Register/";
import ForgotPass from "./pages/ForgotPass";
import PatientDash from "./pages/Dash/Patient/";
import DoctorDash from "./pages/Dash/Doctor";
import AdminDash from "./pages/Dash/Admin";
import Profile from "./pages/Profile";
import Appointments from "./pages/Appointments";
import Specialities from "./pages/Book/Specialities";
import Book from "./pages/Book/";
import AddSpeciality from "./pages/EditSpec";
import ManageDoc from "./pages/ManageDoc";
import Diagnosis from "./pages/Diagnosis";
import History from "./pages/History";

import Sidebar from "./components/Sidebar/";
import Loader from "./components/Loader/";

function App() {
  const user = useSelector((state) => state.auth);
  // const history = useHistory();

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
      <AnimateSharedLayout type="crossfade">
        <Router hashType="noslash">
          <Route path={["/book/:id/:doc", "/book/:id/"]} component={Book} />
          <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/forgot-pass" exact component={ForgotPass} />
            {user ? (
              <>
                <Route path="/dash" exact>
                  {user.role === "patient" ? (
                    <PatientDash />
                  ) : user.role === "doctor" ? (
                    <DoctorDash />
                  ) : (
                    user.role === "admin" && <AdminDash />
                  )}
                </Route>
                <Route path="/profile" exact component={Profile} />
                <Route path="/appointments" exact>
                  <Appointments />
                </Route>
                <Route path="/book" exact>
                  <Specialities />
                </Route>
                <Route path="/edit-speciality" exact>
                  {user.role === "admin" ? (
                    <AddSpeciality />
                  ) : (
                    <Redirect to="/dash" />
                  )}
                </Route>
                <Route path="/manage-doc" exact>
                  {user.role === "admin" ? (
                    <ManageDoc />
                  ) : (
                    <Redirect to="/dash" />
                  )}
                </Route>
                <Route path="/checkup" exact>
                  {user.role !== "admin" ? (
                    <Diagnosis />
                  ) : (
                    <Redirect to="/dash" />
                  )}
                </Route>
                <Route path="/history" exact>
                  {user.role !== "admin" ? (
                    <History />
                  ) : (
                    <Redirect to="/dash" />
                  )}
                </Route>
              </>
            ) : (
              <Redirect to="/login" />
            )}
          </Switch>
          <Sidebar />
          <Loader loading={true} height="100vh" width="100vw" />
        </Router>
      </AnimateSharedLayout>
    </>
  );
}

export default App;
