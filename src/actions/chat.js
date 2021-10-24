import { getchats } from "../api/chat";
import { toast } from "react-toastify";

export const getChats = () => async (dispatch) => {
  try {
    const { data } = await getchats();
    dispatch({ type: "GETCHATS", data: data.result });
  } catch (error) {
    toast.error("Something went wrong!");
  }
};
