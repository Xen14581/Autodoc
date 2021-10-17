import { toast } from "react-toastify";
import { getspeciality, createspeciality, deletespeciality } from "../api/speciality";

export const getSpeciality = () => async (dispatch) => {
  try {
    const { data } = await getspeciality();
    if (data?.message) {
      dispatch({ type: "GET_SPEC", data: data.result });
    }
  } catch (error) {
    toast.error("Something went wrong!");
  }
}

export const createSpeciality = (formdata, state) => async (dispatch) => {
  try {
    const { data } = await createspeciality(formdata);
    if (data?.message) {
      dispatch({ type: "NEW_SPEC", data: formdata });
    }
    toast("Speciality created successfully!");
    state();
    return;
  } catch (error) {
    state();
    toast.error("Something went wrong!");
  }
};

export const deleteSpeciality = (id) => async (dispatch) => {
  try {
    const { data } = await deletespeciality(id);
    if (data?.message) {
      dispatch({ type: "DELETE_SPEC", data: id });
    }
  } catch (error) {
    toast.error("Something went wrong!");
  }
};
