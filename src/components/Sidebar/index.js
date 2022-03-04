import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Button from "@mui/material/Button";
import { CSSTransition } from "react-transition-group";
import { Logout } from "../../actions/auth";

const sidebar = {
  open: () => ({
    clipPath: `circle(${document.documentElement.scrollHeight + 100}px at 35px 35px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
    zIndex: 20,
  }),
  closed: {
    clipPath: "circle(30px at 35px 35px)",
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
    zIndex: 20, 
  },
};

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    zIndex: 20,
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
    zIndex: 20,
  },
};

const variant = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -50 },
    },
    zIndex: 20,
  },
  closed: {
    y: 20,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
    zIndex: 20,
  },
};

const Sidebar = () => {
  const user = useSelector((state) => state.auth);
  const val = useSelector((state) => state.hamburger.Open);
  const containerRef = useRef(null);
  const history = useHistory();
  const dispatch = useDispatch();

  const del = () => {
    new Promise((resolve) => setTimeout(resolve, 1000));
    return val ? "open" : "closed"
  }

  return (
    <CSSTransition in={val} timeout={1000} classNames="sidebar" unmountOnExit>
      <motion.nav
        initial="closed"
        animate={del()}
        ref={containerRef}
        custom="100vh"
        className="nav"
      >
        <motion.div className="background" variants={sidebar} />
        <motion.ul variants={variants} className="ul">
          <motion.li
            variants={variant}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="li"
          >
            <Button
              onClick={() => {
                history.push("/dash")
                dispatch({type: "TOGGLE"})
              }}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItens: "center",
                width: "100%",
                fontFamily: 'Montserrat, sans serif',
                fontWeight: 600,
              }}
            >
              Dashboard
            </Button>
          </motion.li>
          {user.role !== "admin" ? (
            <>
              <motion.li
                variants={variant}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="li"
              >
                <Button
                  onClick={() => {
                    history.push("/checkup")
                    dispatch({type: "TOGGLE"})
                  }}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItens: "center",
                    width: "100%",
                    fontFamily: 'Montserrat, sans serif',
                    fontWeight: 600,
                  }}
                >
                  AI Checkup
                </Button>
              </motion.li>
              <motion.li
                variants={variant}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="li"
              >
                <Button
                  onClick={() => {
                    history.push("/book")
                    dispatch({type: "TOGGLE"})
                  }}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItens: "center",
                    width: "100%",
                    fontFamily: 'Montserrat, sans serif',
                    fontWeight: 600,
                  }}
                >
                  Book Appointment
                </Button>
              </motion.li>
              <motion.li
                variants={variant}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="li"
              >
                <Button
                  onClick={() => {
                    history.push("/appointments")
                    dispatch({type: "TOGGLE"})
                  }}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItens: "center",
                    width: "100%",
                    fontFamily: 'Montserrat, sans serif',
                    fontWeight: 600,
                  }}
                >
                  Appointments Chat
                </Button>
              </motion.li>
              <motion.li
                variants={variant}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="li"
              >
                <Button
                  onClick={() => {
                    history.push("/history")
                    dispatch({type: "TOGGLE"})
                  }}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItens: "center",
                    width: "100%",
                    fontFamily: 'Montserrat, sans serif',
                    fontWeight: 600,
                  }}
                >
                  Appointments History
                </Button>
              </motion.li>
            </>
          ) : (
            <>
              <motion.li
                variants={variant}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="li"
              >
                <Button
                  onClick={() => {
                    history.push("/edit-speciality")
                    dispatch({type: "TOGGLE"})
                  }}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItens: "center",
                    width: "100%",
                    fontFamily: 'Montserrat, sans serif',
                    fontWeight: 600,
                  }}
                >
                  Edit Specialities
                </Button>
              </motion.li>
              <motion.li
                variants={variant}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="li"
              >
                <Button
                  onClick={() => {
                    history.push("/manage-doc")
                    dispatch({type: "TOGGLE"})
                  }}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItens: "center",
                    width: "100%",
                    fontFamily: 'Montserrat, sans serif',
                    fontWeight: 600,
                  }}
                >
                  Manage Doctors
                </Button>
              </motion.li>
            </>
          )}
          <motion.li
            variants={variant}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="li"
          >
            <Button
              onClick={() => {
                Logout(dispatch, history)
                dispatch({type: "TOGGLE"})
              }}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItens: "center",
                width: "100%",
                fontFamily: 'Montserrat, sans serif',
                fontWeight: 600,
              }}
            >
              Logout
            </Button>
          </motion.li>
        </motion.ul>
      </motion.nav>
    </CSSTransition>
  );
};

export default Sidebar;
