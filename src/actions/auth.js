import { login, register } from "../api/auth";
import { toast } from "react-toastify";

export const Login = (formdata, router, state) => async (dispatch) => {
  try {
    const res = await login(formdata);
    dispatch({ type: "LOGIN", data: res.data });
    state();
    router.push("/dash");
  } catch (error) {
    state();
    toast.error("Something went wrong!");
  }
};

export const Register = (formdata, router, state) => async (dispatch) => {
  try {
    const res = await register(formdata);
    dispatch({ type: "LOGIN", data: res.data });
    state();
    router.push("/dash");
  } catch (error) {
    state();
    toast.error("Something went wrong!");
  }
};
