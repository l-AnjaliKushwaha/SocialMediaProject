import { createSlice } from "@reduxjs/toolkit";
import { Login } from "../pages";
import { dispatch } from "./store";

const initialState = {
  user: JSON.parse(window?.localStorage.getItem("user")) ?? {},
  edit: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    Login(state, action) {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    logout(state) {
      state.user = null;
      localStorage?.removeItem("user");
    },
    updateProfile(state, action) {
            state.edit = action.payload;
    },
  },
});

export default userSlice.reducer;


export function UserLogin(user){
            return (dispatch, getState) => {
                        dispatch(userSlice.actions.Login(user));
            };
}

export function Logout(){
            return (dispatch, getState) => {
                        dispatch(userSlice.actions.logout());
            };
}