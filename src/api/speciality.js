import axios from "axios";
import { baseurl } from "./url";
const API = axios.create({ baseURL: `${baseurl}/speciality` });
API.interceptors.request.use((req) => {
  if (localStorage.getItem("token")) {
    req.headers.Authorization = localStorage.getItem("token");
  }
  return req;
});

export const getspeciality = () => API.get('/');
export const createspeciality = (formdata) => API.post(`/`, formdata);
export const deletespeciality = (id) => API.delete(`/${id}`)