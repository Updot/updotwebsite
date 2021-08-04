import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isActive: false,
};

const navStateSlice = createSlice({
  name: "navState",
  initialState,
  reducers: {
    setIsActive(state) {
      state.isActive = !state.isActive;
    },
  },
});

export const navStateAction = navStateSlice.actions;
export default navStateSlice;
