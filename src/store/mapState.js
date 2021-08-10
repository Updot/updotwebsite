import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  currMap: "ind",
};

const mapStateSlice = createSlice({
  name: "mapState",
  initialState,
  reducers: {
    setMap(state, action) {
      state.currMap = action.payload;
    },
  },
});

export const mapStateAction = mapStateSlice.actions;
export default mapStateSlice;
