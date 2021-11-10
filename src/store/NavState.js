import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isActive: false,
};

const navStateSlice = createSlice({
  name: "navState",
  initialState,
  reducers: {
    toggleNav(state) {
      state.isActive = !state.isActive;
    },
    setClose(state) {
      state.isActive = false;
    },
  },
});

export const navStateAction = navStateSlice.actions;
export default navStateSlice;
