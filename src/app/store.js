import { configureStore } from '@reduxjs/toolkit';
import cryptoReducer from '../redux/async/cryptoSlice';

const store = configureStore({
  reducer: {
    cryptocurrencies: cryptoReducer,
    
  },
});

export default store;
