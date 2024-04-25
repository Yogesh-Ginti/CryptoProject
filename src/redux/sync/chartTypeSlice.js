import { createSlice } from "@reduxjs/toolkit";

const chartTypeSlice = createSlice({
  name: "chartType",
  initialState:{
    usedChart : "lineChart"
  },
  reducers:{
    setChart : (state, action)=>{
      state.usedChart = action.payload
    }
  }
});

export const {setChart} = chartTypeSlice.actions;

export default chartTypeSlice.reducer