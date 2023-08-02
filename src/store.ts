import authReducer from "./store/authSlice";

import { configureStore } from "@reduxjs/toolkit";
const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
export default store;
