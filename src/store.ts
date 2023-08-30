import authReducer from "./store/authSlice";
import messageReducer from "./store/messageSlice";
import thunk from "redux-thunk";

import { configureStore } from "@reduxjs/toolkit";
const store = configureStore({
  reducer: {
    auth: authReducer,
    chat: messageReducer
  },
  middleware: [thunk],
});
export default store;
