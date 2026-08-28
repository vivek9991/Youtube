import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chatSlice",
  initialState: {
    comments: [],
  },
  reducers: {
    addToChatList: (state, action) => {
      if (state.comments.length > 10) state.comments.splice(0, 1);
      state.comments.push({
        name: action.payload.name,
        commentText: action.payload.commentText,
      });
    },
  },
});

export const { addToChatList } = chatSlice.actions;
export default chatSlice.reducer;
