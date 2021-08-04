import { createSlice } from "@reduxjs/toolkit";
const initialMouseState = {
  currLocation: { x: 108, y: 23 },
  restLocation: { x: 108, y: 23 },
};

const mouseLocationSlice = createSlice({
  name: "mouseLocation",
  initialState: initialMouseState,
  reducers: {
    setCurrLocation(state, action) {
      state.currLocation.x = action.payload.x;
      state.currLocation.y = action.payload.y;
    },
    setRestLocation(state, action) {
      state.restLocation.x = action.payload.x;
      state.restLocation.y = action.payload.y;
    },
  },
});

export const mouseLocationAction = mouseLocationSlice.actions;
export default mouseLocationSlice;
