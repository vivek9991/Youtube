import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./slice/appSlice";
import videosReducer from "./slice/videosSlice";
const Store = configureStore({
  reducer: {
    app: appReducer,
    video: videosReducer,
  },
});

export default Store;
