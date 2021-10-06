import { createappointment } from "../api/appointments";
import { toast } from "react-toastify";

export const createAppointments =
  (formdata, router, state) => async (dispatch) => {
    try {
      const res = await createappointment(formdata);
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };
