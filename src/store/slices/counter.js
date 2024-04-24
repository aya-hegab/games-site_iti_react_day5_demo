import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  counter_val: 0,
  max_limit: 100,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: INITIAL_STATE,
  reducers: {
    increaseCounter: (state, action) => {
      state.counter_val = state.counter_val + 1;
    },
    decreaseCounter: (state, action) => {
      state.counter_val = state.counter_val - 1;
    },
    increaseCounterByVal: (state, action) => {
      state.counter_val = state.counter_val + action.payload;
    },
    resetCounter: (state, action) => {
      state.counter_val = 0;
    },
  },
});

export const {
  increaseCounter,
  decreaseCounter,
  increaseCounterByVal,
  resetCounter,
} = counterSlice.actions;

export default counterSlice.reducer;