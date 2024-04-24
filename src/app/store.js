import { configureStore } from '@reduxjs/toolkit';
import cryptoReducer from '../redux/async/cryptoSlice';
import exchangerReducer from '../redux/sync/exchangerSlice';
import currencyReducer from '../redux/sync/currencySlice';

const store = configureStore({
  reducer: {
    cryptocurrencies: cryptoReducer,
    exchanger:exchangerReducer,
    currency : currencyReducer
  },
});

export default store;
