import { createSlice } from "@reduxjs/toolkit";
type SetState = { payload: { id: string | number; state: "like" | "dislike" }};
const likeDislikeSlice = createSlice({
  name: "likeDislike",
  initialState: /*{'123': {count: 1, state: "like"}}*/{} as Record<
    string | number,
    { count: number; state: "like" | "dislike" }
  >, 
  reducers: {
    setState(
      state,
      {
        payload,
      }:SetState
    ) {
      const currentCount = state[payload.id]?.count ?? 0;
      if (payload.state === "like") {
        state[payload.id] = { count: currentCount + 1, state: "like" };
      } else if (payload.state === "dislike") {
        state[payload.id] = { count: currentCount - 1, state: "dislike" };
      }
    },
    reset(state,{
      payload,
    }: { payload: { id: string | number } }) {
      delete state[payload.id];
    }
  },
});

export const { setState, reset } = likeDislikeSlice.actions;
export default likeDislikeSlice.reducer;
