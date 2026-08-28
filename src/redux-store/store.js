import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./slice/appSlice";
import videosReducer from "./slice/videosSlice";
import searchSuggestionsReducer from "./slice/searchSlice";
import chatSliceReducer from "./slice/chatSlice";
const Store = configureStore({
  reducer: {
    app: appReducer,
    video: videosReducer,
    searchSuggestions: searchSuggestionsReducer,
    chat: chatSliceReducer,
  },
});

export default Store;
