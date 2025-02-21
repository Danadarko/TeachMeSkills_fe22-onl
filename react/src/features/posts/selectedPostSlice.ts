import { createSlice } from "@reduxjs/toolkit";

const selectedPostSlice = createSlice({
  name: "selectedPost",
  initialState: { id: null } as { id: string | null | number }, //пост не выбран
  reducers: {
    setSelectedPost(state, action: { payload: string | number | null }) {
      state.id = action.payload;
    },
  },
});

export const { setSelectedPost } = selectedPostSlice.actions;
export default selectedPostSlice.reducer;
