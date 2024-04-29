import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCryptocurrencies = createAsyncThunk(
  'cryptocurrencies/fetchCryptocurrencies',
  async () => {
    try {
      const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false');
      
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);



export const cryptoSlice = createSlice({
  name: 'cryptocurrencies',
  initialState : {
    cryptocurrencies: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder)=>{
    builder
    .addCase(fetchCryptocurrencies.pending, (state) => {
        state.status = 'loading';
        })
        .addCase(fetchCryptocurrencies.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.cryptocurrencies = action.payload;
        })

        .addCase(fetchCryptocurrencies.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
  }
});

export default cryptoSlice.reducer;
