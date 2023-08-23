import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { save, get, remove } from "../utility/internalMemory";

interface AuthState {
  token: string | null;
  user_name: string | null;
  _id: string | null;
}

const initialState: AuthState = {
  token: String(get("token")) || null,
  user_name: String(get("user_name")) || null,
  _id: String(get("_id")) || null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ token: string; user_name: string }>) => {
      state.token = action.payload.token;
      state.user_name = action.payload.user_name;
      state._id = action.payload._id;
      save("token", state.token);
      save("user_name", state.user_name);
      save("_id", state._id);
    },

    logout: (state) => {
      state.token = null;
      state.user_name = null;
      state._id= null;

      remove("token");
      remove("user_name");
      remove("_id")
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
