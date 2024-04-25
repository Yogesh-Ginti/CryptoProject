import { createSlice } from "@reduxjs/toolkit";

const calculateFromTime = (days) => {
  const currTime = Math.floor(Date.now() / 1000);
  return currTime - days * 24 * 60 * 60;
};

const timeframeSlice = createSlice({
  name: 'time',
  initialState: {
    toTime: Math.floor(Date.now() / 1000),
    fromTime: calculateFromTime(1),
    format : 'minHr'
    
  },
  reducers: {
    setTime1D: (state) => {
      state.fromTime = calculateFromTime(1);
      state.format = 'minHr'
    },
    setTime1W: (state) => {
      state.fromTime = calculateFromTime(7);
      state.format = 'minHrDay'
    },
    setTime1M: (state) => {
      state.fromTime = calculateFromTime(30);
      state.format = 'dateMonName'
    },
    setTime6M: (state) => {
      state.fromTime = calculateFromTime(180);
      state.format = 'dateMonName'
    },
    setTime1Y: (state) => {
      state.fromTime = calculateFromTime(365);
      state.format = 'dateMonNameYr'
    },
  },
});



export const {
  setTime1D,
  setTime1W,
  setTime1M,
  setTime6M,
  setTime1Y,
} = timeframeSlice.actions;

export default timeframeSlice.reducer;
