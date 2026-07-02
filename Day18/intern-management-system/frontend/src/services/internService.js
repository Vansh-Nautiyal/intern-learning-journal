import axios from "axios";

const API_URL = "http://localhost:3000/interns";

export const getInterns = () => {
  return axios.get(API_URL);
};

export const createIntern = (intern) => {
  return axios.post(API_URL, intern);
};

export const deleteIntern = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};

export const updateIntern = (id, data) => {
  return axios.put(`${API_URL}/${id}`, data);
};