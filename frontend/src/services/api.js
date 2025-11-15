import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api", // backend URL
});

// 🧠 Automatically attach token (if user logged in)
API.interceptors.request.use((config) => {
  const userInfo = localStorage.getItem("userInfo");
  if (userInfo) {
    const token = JSON.parse(userInfo).token;
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;

// 🧍 User API
export const registerUser = (userData) => API.post("/users/register", userData);
export const loginUser = (userData) => API.post("/users/login", userData);

// 📚 Task API
export const addTask = (taskData) => API.post("/tasks", taskData);
export const getTasks = () => API.get("/tasks");
export const deleteTask = (id) => API.delete(`/tasks/${id}`);
