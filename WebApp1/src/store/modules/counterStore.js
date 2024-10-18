import { createSlice } from "@reduxjs/toolkit";

const counterStore = createSlice({
  name: "counter",
  initialState: { count: 0 },
  reducers: {
    increment: (state,action) => {
      // console.log('+1')
      state.count += action.payload;
    },
    decrement: (state,action) => {
      // console.log('-1')
      state.count -= action.payload;
    },
  },
});

//导出 actions
export const { increment, decrement } = counterStore.actions;
//导出 reducer
export default counterStore.reducer;