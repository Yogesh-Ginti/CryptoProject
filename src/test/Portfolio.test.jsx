import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import Portfolio from '../components/Portfolio';
import cryptocurrenciesSlice from '../redux/sync/coinSlice'; // Adjust the import path

// Create a test Redux store with the required reducer and initial state
const createTestStore = () => {
  const initialState = {
    cryptocurrencies: {
      cryptocurrencies: [
        { id: 'bitcoin', name: 'Bitcoin', current_price: 50000 },
        { id: 'ethereum', name: 'Ethereum', current_price: 4000 },
        { id: 'ripple', name: 'Ripple', current_price: 1 },
      ],
      status: 'idle',
      error: null,
    },
  };

  return configureStore({
    reducer: { cryptocurrencies: cryptocurrenciesSlice },
    preloadedState: initialState,
  });
};

describe('Portfolio Component', () => {
  it('should render without crashing', () => {
    const store = createTestStore(); // Create a Redux store for the test

    render(
      <Provider store={store}>
        <Portfolio />
      </Provider>
    );

    // Verify that the component renders the expected elements
    const portfolioTitle = screen.getByText(/Portfolio/i); // Check for the "Portfolio" title
    expect(portfolioTitle).toBeInTheDocument(); // Ensure it's in the DOM

    const totalValueText = screen.getByText(/Total Value \$/i); // Check for the total value text
    expect(totalValueText).toBeInTheDocument();

    
  });
});
