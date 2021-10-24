import { diagnose } from "../api/diagnosis";
import { toast } from "react-toastify";

export const Diagnose = (formdata) => async (dispatch) => {
  try {
    const { data } = await diagnose(formdata);
    dispatch({type: 'DIAGNOSIS', data: data.prediction})
  } catch (error) {
    toast.error("Something went wrong!");
  }
};
