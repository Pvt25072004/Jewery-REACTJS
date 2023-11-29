import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  ringList: [],
};
export const ringSlice = createSlice({
  name: "ring",
  initialState,
  reducers: {
    fetchRing: (state, action) => {
      return { ...state, ringList: action.payload };
    },
    addRing: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    deleteRing: (state) => {
      state.value -= 1;
    },
  },
});
export const { addRing, deleteRing, fetchRing } = ringSlice.actions;

export default ringSlice.reducer;
