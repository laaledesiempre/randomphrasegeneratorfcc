import { configureStore } from "@reduxjs/toolkit";
import { phrasesReducer } from "./slices/phrases";
import { fetchReducer } from "./slices/fetch";

export const store = configureStore({
  reducer: {
    phrasesReducer,
    fetchReducer,
  },
});
