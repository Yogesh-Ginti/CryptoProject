import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import Exchanger from '../components/Exchanger';
import exchangerSlice from '../redux/sync/exchangerSlice'; 
// Basic Redux store setup with default initial state
const createTestStore = () => {
  const initialState = {
    exchanger: {
      fromCoin: '',
      toCoin: null,
      qty: '',
      getCoins: null,
      err: '',
    },
    cryptocurrencies: {
      cryptocurrencies: [
        { id: 'bitcoin', name: 'Bitcoin', current_price: 50000 },
        { id: 'ethereum', name: 'Ethereum', current_price: 4000 },
      ],
    },
  };

  return configureStore({
    reducer: {
      exchanger: exchangerSlice,
      cryptocurrencies: (state = initialState.cryptocurrencies) => state,
    },
    preloadedState: initialState,
  });
};

describe('Exchanger Component', () => {
  it('should render without crashing', () => {
    const store = createTestStore(); // Create a test store with initial state

    render(
      <Provider store={store}>
        <Exchanger />
      </Provider>
    );

    const title = screen.getByText(/Exchange Coins/i); // Check if title is rendered
    expect(title).toBeInTheDocument(); // Ensure it is in the DOM
  });
});
