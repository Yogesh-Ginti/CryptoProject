import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchChart = createAsyncThunk(
  'chart/fetchChart',
  async (args, { rejectWithValue }) => {
    try {
      const { baseCurrency, baseCoin, fromTime, toTime } = args;
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${baseCoin}/market_chart/range?vs_currency=${baseCurrency}&from=${fromTime}&to=${toTime}&precision=2 `
      );
      console.log(response);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message || "An unknown error occurred");
    }
  }
);

export const chartSlice = createSlice({
  name: 'chart',
  initialState: {
    chartData: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchChart.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchChart.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.chartData = action.payload;
      })
      .addCase(fetchChart.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || "An error occurred";
      });
  },
});

export default chartSlice.reducer;
