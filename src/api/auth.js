import axios from "axios";
import { baseurl } from "./url";
const API = axios.create({ baseURL: `${baseurl}/auth` });
API.interceptors.request.use((req) => {
  if (localStorage.getItem("token")) {
    req.headers.Authorization = localStorage.getItem("token");
  }
  return req;
});

export const login = (formData) => API.post("/", formData);
export const signUp = (formData) => API.post("/register", formData);
export const forgotpass = (formdata) => API.put("/forgot-password", formdata);
export const changepass = (formData) => API.put("/change-password", formData);
export const updateprofile = (formData) => API.put("/", formData);

export const updateprofilepic = (formdata) =>
  API.put("/update-profile-picture", formdata);
