import { login, signUp } from "../api/auth";
import { toast } from "react-toastify";

export const Signin = (formdata, router, state) => async (dispatch) => {
  try {
    const res = await login(formdata);
    dispatch({ type: "LOGIN", data: res.data });
    state();
    router.push("/dash");
  } catch (error) {
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
    state();
    toast.error("Something went wrong!");
    router.push("/dash"); ///////////////////// remove later
  }
};
