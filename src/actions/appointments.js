import {
  createappointment,
  getappointment,
  changestatus,
  getslots,
  getappointmentsadmin,
  gethistory,
} from "../api/appointments";
import { toast } from "react-toastify";

export const createAppointments = (formdata) => async (dispatch) => {
  try {
    const { data } = await createappointment(formdata);
    dispatch({ type: "NEW_APPOINTMENT", data: data });
    toast("Appointment booked successfully!");
  } catch (error) {
    toast.error("Something went wrong!");
  }
};

export const getAppointment = () => async (dispatch) => {
  try {
    const { data } = await getappointment();
    dispatch({ type: "ALL_APPOINTMENTS", data: data.result });
  } catch (error) {
    toast.error("Something went wrong!");
  }
};

export const getAppointmentsAdmin = (formdata) => async (dispatch) => {
  try {
    const { data } = await getappointmentsadmin(formdata);
    dispatch({ type: "ADMIN_REPORTS", data: data.result });
  } catch (error) {
    toast.error("Something went wrong!");
  }
};

export const getHistory = () => async () => {
  try {
    const {data} = await gethistory()
    return data.result;
  } catch (error) {
    toast.error("Something went wrong!");
  }
}

export const changeStatus = (app_id) => async () => {
  try {
    await changestatus(app_id);
    toast("Appointment Updated!");
  } catch (error) {
    toast.error("Something went wrong!");
  }
};

export const getSlots = (doc_id, date) => async () => {
  try {
    const { data } = await getslots(doc_id, date);
    return data.result;
  } catch (error) {
    toast.error("Something went wrong!");
  }
};
