import authReducer, { AuthState } from "./store/authSlice";
import messageReducer, { MessageState } from "./store/messageSlice";
import thunk from "redux-thunk";

import { configureStore } from "@reduxjs/toolkit";
export interface RootState {
  auth: AuthState;
  chat: MessageState;
}

const store = configureStore({
  reducer: {
    auth: authReducer,
    chat: messageReducer
  },
  middleware: [thunk],
});

export default store;
