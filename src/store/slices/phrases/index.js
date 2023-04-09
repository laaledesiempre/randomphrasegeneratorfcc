import { createSlice } from "@reduxjs/toolkit";

export const phrasesSlice = createSlice({
  name: "phrases",
  initialState: {
    list: "",
  },
  reducers: {
    setPhraseList: (state, action) => {
      state.list = action.payload;
    },
  },
});
export const { setPhraseList } = phrasesSlice.actions;

export const phrasesReducer = phrasesSlice.reducer;

export const fetchAllPhrases = () => async (dispatch) => {
  const response = await fetch(
    "https://programming-quotesapi.vercel.app/api/random"
  );

  const dataJson = await response.json();
  console.log("fetched data:");
  console.log(dataJson);
  dispatch(setPhraseList(dataJson));
};
