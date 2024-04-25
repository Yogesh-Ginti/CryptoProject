import { createSlice } from "@reduxjs/toolkit";

export const coinSlice = createSlice({
  name : "coins",
  initialState:{
    baseCoin : "bitcoin"
  },
  reducers:{
    chooseCoin :(state, action)=>{
      state.baseCoin = action.payload
    }
  }
});

export const {chooseCoin} = coinSlice.actions;

export default coinSlice.reducer;