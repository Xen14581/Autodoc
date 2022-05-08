import {
  diagnose,
  diagnosecancer,
  diagnosediabetes,
  diagnoseliverdisease,
} from "../api/diagnosis";
import { toast } from "react-toastify";

export const Diagnose = (formdata) => async (dispatch) => {
  try {
    const { data } = await diagnose(formdata);
    dispatch({ type: "DIAGNOSIS", data: data.prediction });
  } catch (error) {
    toast.error("Something went wrong!");
  }
};

export const diagnoseCancer = (formdata) => async (dispatch) => {
  try {
    const { data } = await diagnosecancer(formdata);
    dispatch({ type: "DIAGNOSIS", data: data.prediction });
  } catch (error) {
    toast.error("Something went wrong!");
  }
};

export const diagnoseDiabetes = (formdata) => async (dispatch) => {
  try {
    const { data } = await diagnosediabetes(formdata);
    dispatch({ type: "DIAGNOSIS", data: data.prediction });
  } catch (error) {
    toast.error("Something went wrong!");
  }
};

export const diagnoseLiverDisease = (formdata) => async (dispatch) => {
  try {
    const { data } = await diagnoseliverdisease(formdata);
    dispatch({ type: "DIAGNOSIS", data: data.prediction });
  } catch (error) {
    toast.error("Something went wrong!");
  }
};
