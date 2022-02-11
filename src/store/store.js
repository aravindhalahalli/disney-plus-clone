import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import movieReducer from "../reducers/movieReducer";
import userReducer from "../reducers/userReducer";

const store = configureStore({
  reducer: {
    user: userReducer,
    movie:movieReducer
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
