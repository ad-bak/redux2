import { configureStore } from "@reduxjs/toolkit";

import UISlice from "./ui";
import cartSlice from "./cart";

const store = configureStore({
  reducer: { ui: UISlice.reducer, cart: cartSlice.reducer },
});

export default store;
