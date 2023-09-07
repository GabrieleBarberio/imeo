import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { save, get, remove } from "../utility/internalMemory";

export interface AuthState {
  token: string ;
  user_name: string ;
  _id: string ;
  status: string;
}

const initialState: AuthState = {
  token: String(get("token")) ,
  user_name: String(get("user_name")),
  _id: String(get("_id")),
  status: String(get("status"))
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ token: string; user_name: string; _id: string; status: string; }>) => {
      state.token = action.payload.token;
      state.user_name = action.payload.user_name;
      state._id = action.payload._id;
      state.status = action.payload.status;
      save("token", state.token);
      save("user_name", state.user_name);
      save("_id", state._id);
      save("status", state.status);
    },

    logout: (state) => {
      state.token = "";
      state.user_name = "";
      state._id = "";
      remove("token");
      remove("user_name");
      remove("_id");
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
