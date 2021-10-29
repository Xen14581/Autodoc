import {
  login,
  signUp,
  forgotpass,
  changepass,
  updateprofilepic,
  updateprofile,
} from "../api/auth";
import { toast } from "react-toastify";

export const Signin = (formdata, router, state) => async (dispatch) => {
  try {
    const { data } = await login(formdata);
    dispatch({ type: "LOGIN", data: data });
    state();
    router.push("/dash");
  } catch (error) {
    new Promise((resolve) => setTimeout(resolve, 1000));
    state();
    toast.error("Invalid Credentials!");
  }
};

export const SignUp = (formdata, router, state) => async (dispatch) => {
  try {
    const res = await signUp(formdata);
    dispatch({ type: "LOGIN", data: res });
    state();
    router.push("/dash");
  } catch (error) {
    new Promise((resolve) => setTimeout(resolve, 1000));
    state();
    toast.error("Something went wrong!");
  }
};

export const ForgotPassword = (formdata, router, state) => async () => {
  try {
    await forgotpass(formdata)
    router.push('/login')
    state()
  } catch (error) {
    state();
    toast.error("Something went wrong!");
  }
}

export const Logout = (dispatch, router) => {
  try {
    dispatch({ type: "LOGOUT" });
    router.push("/login");
  } catch (error) {}
};

export const ChangePassword = (formdata, state) => async () => {
  try {
    await changepass(formdata);
    toast("Password Changed");
    state();
  } catch (error) {
    toast.error("Something went wrong!");
    state();
  }
};

export const UpdateProfilePic = (formdata) => async (dispatch) => {
  try {
    const { data } = await updateprofilepic(formdata);
    if (data.message) {
      dispatch({ type: "UPDATE_PROFILE", data: data.result });
    }
  } catch (error) {
    toast.error("Something went wrong!");
  }
};

export const UpdateProfile = (formdata, state) => async () => {
  try {
    await updateprofile(formdata);
    toast("Profile Updated!");
    state();
  } catch (error) {
    toast.error("Something went wrong!");
  }
};
