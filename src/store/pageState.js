import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isLoaded: false,
};

const pageStateSlice = createSlice({
  name: "pageState",
  initialState,
  reducers: {
    setLoaded(state) {
      state.isLoaded = true;
    },
  },
});

export const pageStateAction = pageStateSlice.actions;
export default pageStateSlice;
