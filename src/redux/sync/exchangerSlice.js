// src/redux/slices/exchangerSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  fromCoin: '',
  toCoin: '',
  toCoinId: '',
  qty: '',
  getCoins: null,
  toCoinSymbol: '',
  err: '',
};

export const exchangerSlice = createSlice({
  name: 'exchanger',
  initialState,
  reducers: {
    setFromCoin: (state, action) => {
      state.fromCoin = action.payload;
    },
    setToCoin: (state, action) => {
      const { price, id, symbol } = action.payload;
      state.toCoin = price;
      state.toCoinId = id;
      state.toCoinSymbol = symbol;
    },
    setQty: (state, action) => {
      state.qty = action.payload;
    },
    setGetCoins: (state, action) => {
      state.getCoins = action.payload;
    },
    setError: (state, action) => {
      state.err = action.payload;
    },
  },
});

export const {
  setFromCoin,
  setToCoin,
  setQty,
  setGetCoins,
  setError,
} = exchangerSlice.actions;

export default exchangerSlice.reducer;
