import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isLightThemeActive: false,
};

const themeStateSlice = createSlice({
  name: "themeState",
  initialState,
  reducers: {
    toggleTheme(state) {
      state.isLightThemeActive = !state.isLightThemeActive;
    },
  },
});

export const themeStateAction = themeStateSlice.actions;
export default themeStateSlice;
