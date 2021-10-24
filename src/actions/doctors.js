import { getdoctors, getsingledoctor } from "../api/doctors";
import { toast } from "react-toastify";

export const getDoctors = (speciality) => async () => {
  try {
    const { data } = await getdoctors(speciality);
    return data.result;
  } catch (error) {
    toast("Something went wrong!");
  }
};

export const getSingleDoctor = (id) => async () => {
  try {
    const { data } = await getsingledoctor(id);
    return data.result;
  } catch (error) {
    toast("Something went wrong!");
  }
};
