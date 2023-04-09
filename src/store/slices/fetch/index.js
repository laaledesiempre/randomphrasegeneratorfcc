import { createSlice } from "@reduxjs/toolkit";

export const fetchSlice = createSlice({
  name: "fetch",
  initialState: {
    fetchStatus: false,
  },
  reducers: {
    setIsFetch: (state, action) => {
      state.fetchStatus = action.payload;
    },
  },
});
export const { setIsFetch } = fetchSlice.actions;

export const fetchReducer = fetchSlice.reducer;

export const setpayload = (boolean) => (dispatch) => {
  dispatch(setIsFetch(boolean));
};
