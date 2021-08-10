import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isLoaded: false,
  isLoaderRemoved: false,
};

const pageStateSlice = createSlice({
  name: "pageState",
  initialState,
  reducers: {
    setLoaded(state) {
      state.isLoaded = true;
    },
    setLoadederRemoved(state) {
      state.isLoaderRemoved = true;
    },
  },
});

export const pageStateAction = pageStateSlice.actions;
export default pageStateSlice;
