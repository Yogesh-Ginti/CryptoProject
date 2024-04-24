import { configureStore } from '@reduxjs/toolkit';
import cryptoReducer from '../redux/async/cryptoSlice';
import exchangerReducer from '../redux/sync/exchangerSlice';
import currencyReducer from '../redux/sync/currencySlice';
import coinReducer from '../redux/sync/coinSlice';

const store = configureStore({
  reducer: {
    cryptocurrencies: cryptoReducer,
    exchanger:exchangerReducer,
    currency : currencyReducer,
    coins : coinReducer
  },
});

export default store;
