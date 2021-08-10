import { configureStore } from "@reduxjs/toolkit";
import themeStateSlice from "./themeState";
import mouseLocationSlice from "./mouseLocation";
import navStateSlice from "./NavState";
import pageStateSlice from "./pageState";
import mapStateSlice from "./mapState";
const store = configureStore({
  reducer: {
    themeState: themeStateSlice.reducer,
    mouseLocation: mouseLocationSlice.reducer,
    pageState: pageStateSlice.reducer,
    navState: navStateSlice.reducer,
    mapState: mapStateSlice.reducer,
  },
});
export default store;
