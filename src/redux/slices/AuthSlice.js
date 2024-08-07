import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../helpers/axiosInstance";
import toast from "react-hot-toast";

const initialState = {
	isLoggedIn: localStorage.getItem("isLoggedIn") === "true" || false,
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

export const login = createAsyncThunk("/auth/login", async (data) => {
	console.log("incoming data to thunk", data);
	try {
		const response = axiosInstance.post("/auth/login", data);
		console.log("Login response", response);
		toast.promise(response, {
			success: (resolvedPromise) => {
				return resolvedPromise?.data?.message;
			},
			loading: "Hold back tight, logging...",
			error: "Ohh No!, Something went wrong, Please try again.",
		});

		const apiResponse = await response;
		console.log("login authlice : ", apiResponse);
		return apiResponse;
	} catch (error) {
		console.log(error);
	}
});

export const logout = createAsyncThunk("/auth/logout", async () => {
	console.log("incoming data to thunk");
	try {
		const response = axiosInstance.post("/auth/logout");
		toast.promise(response, {
			success: (resolvedPromise) => {
				return resolvedPromise?.data?.message;
			},
			loading: "Loading out...",
			error: "Ohh No!, Something went wrong, Please try again.",
		});

		const apiResponse = await response;
		console.log(apiResponse);
		return apiResponse;
	} catch (error) {
		console.log(error);
	}
});

const AuthSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(login.fulfilled, (state, action) => {
				//reducer which execute when the login thunk is fullfilled
				state.isLoggedIn = true;
				state.role = action?.payload?.data?.data?.userRole;
				state.data = action?.payload?.data?.data?.userData;

				localStorage.setItem("isLoggedIn", true);
				localStorage.setItem(
					"role",
					action?.payload?.data?.data?.userRole
				);
				localStorage.setItem(
					"data",
					JSON.stringify(action?.payload?.data?.data?.userData)
				);
			})
			.addCase(logout.fulfilled, (state, action) => {
				localStorage.clear();
				state.isLoggedIn = false;
				state.role = "";
				state.data = {};
			});
	},
});

export default AuthSlice.reducer;
