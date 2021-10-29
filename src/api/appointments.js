import axios from "axios";
import { baseurl } from "./url";
const API = axios.create({ baseURL: `${baseurl}/appointments` });
API.interceptors.request.use((req) => {
  if (localStorage.getItem("token")) {
    req.headers.Authorization = localStorage.getItem("token");
  }
  return req;
});

export const getappointment = () => API.get(`/`);
export const getappointmentsadmin = (formdata) => API.post("/admin", formdata);
export const createappointment = (formdata) => API.post("/", formdata);
export const changestatus = (app_id) => API.put(`/${app_id}`);
export const gethistory = () => API.get('/history')
export const getslots = (doc_id, date) =>
  API.post(`/slots/${doc_id}`, { date });
