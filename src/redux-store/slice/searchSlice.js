import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "seachSuggestions",
  initialState: {
    searchSuggestions: {},
  },
  reducers: {
    addToSearchSuggestions: (state, action) => {
      const { key, data } = action.payload;
      state.searchSuggestions[key] = data;
    },
  },
});

export const { addToSearchSuggestions } = searchSlice.actions;
export default searchSlice.reducer;
