import { createSlice } from "@reduxjs/toolkit";

const currencySlice = createSlice({
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