import axios from "axios";
import { baseurl } from "./url";
const API = axios.create({ baseURL: `${baseurl}/diagnostics` });
API.interceptors.request.use((req) => {
  if (localStorage.getItem("token")) {
    req.headers.Authorization = localStorage.getItem("token");
  }
  return req;
});

export const diagnose = (formdata) => API.post("/", formdata);
export const diagnosecancer = (formdata) => API.post("/cancer", formdata);
export const diagnosediabetes = (formdata) => API.post("/diabetes", formdata);
export const diagnoseliverdisease = (formdata) => API.post("/liver", formdata);
