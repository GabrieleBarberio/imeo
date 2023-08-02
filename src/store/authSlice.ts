import { createSlice } from "@reduxjs/toolkit";
import { save, get, remove } from "../utility/internalMemory";
const authSlice = () => {
  const token = get("token") || null;
  const user_name = get("user_name") || null;

  return createSlice({
    name: "auth",
    initialState: {
      token,
      user_name,
    },
    reducers: {
      login: (state, action) => {
        state.token = action.payload.token;
        state.user = action.payload.user;
        save("token", state.token);
        save("user_name", state.user_name);
      },

      logout: (state) => {
        state.token = null;
        state.user_name = null;

        remove("token");
        remove("user_name");
      },
    },
  });
};

export const { login, logout } = authSlice().actions;

export default authSlice().reducer;
