import { createSlice } from "@reduxjs/toolkit";
const appSlice = createSlice({
  name: "appSlice",
  initialState: {
    toggle: false,
  },
  reducers: {
    toggleSideBar: (state) => {
      state.toggle = !state.toggle;
    },
    closeSideBar: (state) => {
      state.toggle = false;
    },
  },
});

export const { toggleSideBar, closeSideBar } = appSlice.actions;
export default appSlice.reducer;
