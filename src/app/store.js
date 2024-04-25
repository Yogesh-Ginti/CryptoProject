import { configureStore } from '@reduxjs/toolkit';
import cryptoReducer from '../redux/async/cryptoSlice';
import exchangerReducer from '../redux/sync/exchangerSlice';
import currencyReducer from '../redux/sync/currencySlice';
import coinReducer from '../redux/sync/coinSlice';
import chartReducer from '../redux/async/chartSlice';
import timeframeReducer from '../redux/sync/timeframeSlice';
import chartTypeReducer from '../redux/sync/chartTypeSlice';


const store = configureStore({
  reducer: {
    cryptocurrencies: cryptoReducer,
    exchanger:exchangerReducer,
    currency : currencyReducer,
    coins : coinReducer,
    chart : chartReducer,
    time : timeframeReducer,
    chartType : chartTypeReducer
  },
});

export default store;
