import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../helpers/axiosInstance";
import toast from "react-hot-toast";

const initialState = {
	isLoggedIn: localStorage.getItem("isLoggedIn") === "ture" || "false",
	role: localStorage.getItem("role") || "",
	data: JSON.parse(localStorage.getItem("data")) || {},
};

export const createAccount = createAsyncThunk(
	"/auth/createAccount",
	async (data) => {
		console.log("incoming data to thunk", data);
		try {
			const response = axiosInstance.post("/users", data);
			toast.promise(response, {
				success: (resolvedPromise) => {
					return resolvedPromise?.data?.message;
				},
				loading: "Hold back tight, we are registering your id...",
				error: "Ohh No!, Something went wrong, Please try again.",
			});

			const apiResponse = await response;
			console.log(apiResponse);
			return apiResponse;
		} catch (error) {
			console.log(error);
		}
	}
);

const AuthSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {},
	// extraReducers: {},
});

export default AuthSlice.reducer;
