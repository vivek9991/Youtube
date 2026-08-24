import { createSlice } from "@reduxjs/toolkit";

const videosSlice = createSlice({
  name: "Videos slice",
  initialState: {
    videos: null,
  },
  reducers: {
    setVideos: (state, action) => {
      state.videos = action.payload;
    },
  },
});

export const { setVideos } = videosSlice.actions;
export default videosSlice.reducer;
