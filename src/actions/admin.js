import { createdoctor } from "../api/admin";
import { toast } from "react-toastify";

export const createDoctor = async (formdata, state) => {
  try {
    await createdoctor(formdata);
    toast("Doctor's Account created!");
    state();
  } catch (error) {
    toast.error("Something went wrong!");
    state();
  }
};
