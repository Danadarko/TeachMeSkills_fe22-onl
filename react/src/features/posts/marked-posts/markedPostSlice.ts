import { createSlice } from "@reduxjs/toolkit";

const markedPostSlice = createSlice({
  name: "markedPost",
  initialState: {} as Record<string | number, boolean>,
  reducers: {
    setMarkedPost(
      state,
      { payload }: { payload: { id: string | number; state: boolean } }
    ) {
      state[payload.id] = payload.state;
    },
  },
});

export const { setMarkedPost } = markedPostSlice.actions;
export default markedPostSlice.reducer;
