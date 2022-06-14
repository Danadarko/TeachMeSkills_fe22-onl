import { createSlice } from "@reduxjs/toolkit";

const markedPostSlice = createSlice({
    name: 'markedPost',
    initialState: {} as Record<
    string | number, {state: boolean}>,
    reducers: {
      setMarkedPost(
        state,
        {
          payload,
        }: { payload: { id: string | number; state: boolean} }
          ) {
            if (payload.state === true) {
                state[payload.id] = {  state: true };            
            } else if (payload.state === false) {
              state[payload.id] = {  state: false };            
          }
        }
    }
  })
  
  export const { setMarkedPost } = markedPostSlice.actions
  export default markedPostSlice.reducer;