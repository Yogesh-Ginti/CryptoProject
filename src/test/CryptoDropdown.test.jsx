import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import CryptoCurrency from '../components/CryptoCurrency';
import coinSlice from '../redux/sync/coinSlice'; // Adjust the import path
import cryptocurrenciesSlice from '../redux/async/cryptoSlice'; // Adjust the import path

// Create a Redux store with initial state and required reducers
const createTestStore = () => {
  const initialState = {
    coins: {
      baseCoin: 'bitcoin', // Default selected coin
    },
    cryptocurrencies: {
      cryptocurrencies: [
        { id: 'bitcoin', name: 'Bitcoin' },
        { id: 'ethereum', name: 'Ethereum' },
        { id: 'ripple', name: 'Ripple' },
      ],
    },
  };

  return configureStore({
    reducer: {
      coins: coinSlice,
      cryptocurrencies: cryptocurrenciesSlice,
    },
    preloadedState: initialState,
  });
};

describe('CryptoCurrency Component', () => {
  it('should render without crashing', () => {
    const store = createTestStore(); // Create a Redux store with initial state

    render(
      <Provider store={store}>
        <CryptoCurrency />
      </Provider>
    );

    const dropdown = screen.getByRole('combobox'); // Get the select element
    expect(dropdown).toBeInTheDocument(); // Check that it exists
  });

  it('should populate the dropdown with cryptocurrencies', () => {
    const store = createTestStore();

    render(
      <Provider store={store}>
        <CryptoCurrency />
      </Provider>
    );

    const dropdown = screen.getByRole('combobox');

    // Check if the dropdown contains the expected options
    const bitcoinOption = screen.getByText('Bitcoin');
    const ethereumOption = screen.getByText('Ethereum');
    const rippleOption = screen.getByText('Ripple');

    expect(dropdown).toContainElement(bitcoinOption); // Ensure Bitcoin is in the list
    expect(dropdown).toContainElement(ethereumOption); // Ensure Ethereum is in the list
    expect(dropdown).toContainElement(rippleOption); // Ensure Ripple is in the list
  });
});
