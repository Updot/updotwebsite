import { configureStore } from "@reduxjs/toolkit";
import mouseLocationSlice from "./mouseLocation";
import navStateSlice from "./NavState";
import pageStateSlice from "./pageState";
const store = configureStore({
  reducer: {
    mouseLocation: mouseLocationSlice.reducer,
    pageState: pageStateSlice.reducer,
    navState: navStateSlice.reducer,
  },
});
export default store;
