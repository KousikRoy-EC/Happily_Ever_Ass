import { configureStore } from "@reduxjs/toolkit";
import  firstReducer  from "./slice";

const store = configureStore({
  reducer:{
    update: firstReducer,
  }
});

export default store;