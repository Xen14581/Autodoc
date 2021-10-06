import { getchats } from "../api/chat";
import { toast } from "react-toastify";

export const getChats = () => async (dispatch) => {
  try {
    const res = await getchats();
    dispatch({ type: "GETCHATS", data: res.data });
  } catch (error) {
    toast.error("Something went wrong!");
  }
};
