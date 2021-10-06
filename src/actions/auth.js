import { login, signUp, updateprofilepic } from "../api/auth";
import { toast } from "react-toastify";

export const Signin = (formdata, router, state) => async (dispatch) => {
  try {
    const res = await login(formdata);
    dispatch({ type: "LOGIN", data: res.data });
    state();
    router.push("/dash");
  } catch (error) {
    new Promise(resolve => setTimeout(resolve, 1000));
    state();
    toast.error("Something went wrong!");
    router.push("/dash"); ///////////////////// remove later
  }
};

export const SignUp = (formdata, router, state) => async (dispatch) => {
  try {
    const res = await signUp(formdata);
    dispatch({ type: "LOGIN", data: res.data });
    state();
    router.push("/dash");
  } catch (error) {
    new Promise(resolve => setTimeout(resolve, 1000));
    state();
    toast.error("Something went wrong!");
    router.push("/dash"); ///////////////////// remove later
  }
};

export const Logout = (dispatch, router) => {
  try {
    dispatch({ type: "LOGOUT" });
    router.push("/login");
  } catch (error) {}
};

export const UpdateProfilePic = async (formdata) => async (dispatch) => {
  try {
    const { data } = await updateprofilepic(formdata);
    if (data.message) {
      dispatch({ type: "UPDATE_PROFILE", data: data.result });
    }
  } catch (error) {
    toast.error("Something went wrong!");
  }
};
