import authReducer from "./store/authSlice";
import thunk from "redux-thunk";

import { configureStore } from "@reduxjs/toolkit";
const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware: [thunk],
});
export default store;
