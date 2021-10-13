import axios from "axios";
import { baseurl } from "./url";
const API = axios.create({ baseURL: `${baseurl}/doctor` });
API.interceptors.request.use((req) => {
  if (localStorage.getItem("token")) {
    req.headers.Authorization = localStorage.getItem("token");
  }
  return req;
});

export const getdoctors = (speciality) => API.get(`/${speciality}`)
export const getsingledoctor = (doctor) => API.get(`/single/${doctor}`)