import axios from "axios";

export const axiosInstance = axios.create({
	// baseURL: import.meta.env.MODE === "development" ? "http://localhost:5000/api" : "/api",
    // baseURL: "http://localhost:5000/api",
    baseURL: "https://qtify-backend-u907.onrender.com/api",
});