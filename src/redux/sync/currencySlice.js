import { createSlice } from "@reduxjs/toolkit";

export const currencySlice = createSlice({
  name:'currency',
  initialState:{
    baseCurrency : "usd"
  },
  reducers:{
    chooseCurr : (state, action) =>{
      state.baseCurrency = action.payload
    }
  }
})

export const {chooseCurr} = currencySlice.actions

export default currencySlice.reducer;