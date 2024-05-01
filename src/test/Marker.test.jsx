import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import Market from '../components/Market'; 
import cryptoReducer from '../redux/async/cryptoSlice';

// Utility function to create a Redux store with the given preloaded state
const createTestStore = (preloadedState) => configureStore({
  reducer: {
    cryptocurrencies: cryptoReducer,
  },
  preloadedState,
});

describe('Market Component', () => {
  it('renders without crashing', () => {
    const store = createTestStore({
      cryptocurrencies: {
        status: 'idle', // Setting initial state
        cryptocurrencies: [],
        error: null,
      },
    });

    // Render the component with a Redux provider
    const { container } = render(
      <Provider store={store}>
        <Market />
      </Provider>
    );

    // Ensure the component was rendered successfully
    expect(container).toBeInTheDocument(); // Basic rendering check
  });

  it('renders "Loading..." when status is loading', () => {
    const store = createTestStore({
      cryptocurrencies: {
        status: 'loading', // Simulate loading state
        cryptocurrencies: [],
        error: null,
      },
    });

    const { getByText } = render(
      <Provider store={store}>
        <Market />
      </Provider>
    );

    // Check for the loading message
    expect(getByText(/loading/i)).toBeInTheDocument();
  });

  it('renders error message when status is failed', () => {
    const store = createTestStore({
      cryptocurrencies: {
        status: 'failed', // Simulate failed state
        cryptocurrencies: [],
        error: 'Failed to fetch data',
      },
    });

    const { getByText } = render(
      <Provider store={store}>
        <Market />
      </Provider>
    );

    // Check for the error message
    expect(getByText(/error: failed to fetch data/i)).toBeInTheDocument(); 
  });
});
