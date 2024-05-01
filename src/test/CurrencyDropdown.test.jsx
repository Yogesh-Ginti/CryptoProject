import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import Currency from '../components/Currency';
import currencySlice from '../redux/sync/currencySlice'; // Adjust the import path to your slice

// Helper function to create a Redux store with a specified initial state
const createTestStore = (initialBaseCurrency = 'usd') => {
  const initialState = {
    currency: {
      baseCurrency: initialBaseCurrency,
    },
  };

  return configureStore({
    reducer: { currency: currencySlice },
    preloadedState: initialState,
  });
};

describe('Currency Component', () => {
  it('should render without crashing', () => {
    const store = createTestStore(); // Create a Redux store with default initial state

    render(
      <Provider store={store}>
        <Currency />
      </Provider>
    );

    const dropdown = screen.getByRole('combobox'); // Check if the select element exists
    expect(dropdown).toBeInTheDocument(); // Ensure it's in the DOM
  });

  it('should contain expected currency options', () => {
    const store = createTestStore(); // Create Redux store with default state

    render(
      <Provider store={store}>
        <Currency />
      </Provider>
    );

    const dropdown = screen.getByRole('combobox'); // Find the dropdown

    // Check if the dropdown contains expected options
    const usdOption = screen.getByText('USD');
    const inrOption = screen.getByText('INR');
    const eurOption = screen.getByText('EUR');

    expect(dropdown).toContainElement(usdOption); // USD should be an option
    expect(dropdown).toContainElement(inrOption); // INR should be an option
    expect(dropdown).toContainElement(eurOption); // EUR should be an option
  });
});
