import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import LineChart from '../features/charts/LineChart';
import chartReducer from '../redux/async/chartSlice';
import timeReducer from '../redux/sync/timeframeSlice';
import coinsReducer from '../redux/sync/coinSlice';
import currencyReducer from '../redux/sync/currencySlice';

// Function to create a Redux store with a preloaded state
const createTestStore = (preloadedState) => configureStore({
  reducer: {
    chart: chartReducer,
    time: timeReducer,
    coins: coinsReducer,
    currency: currencyReducer,
  },
  preloadedState,
});

describe('LineChart', () => {
  it('renders "Loading..." when chartData is not present', () => {
    const store = createTestStore({
      chart: { chartData: null },
      time: { format: 'minHr' },
      coins: { baseCoin: 'BTC' },
      currency: { baseCurrency: 'USD' },
    });

    const { getByText } = render(
      <Provider store={store}>
        <LineChart />
      </Provider>
    );

    expect(getByText(/loading/i)).toBeInTheDocument(); // Expect "Loading..." text
  });

  it('renders a chart when chartData is present', () => {
    const store = createTestStore({
      chart: {
        chartData: {
          prices: [
            [1683592800000, 50000],
            [1683679200000, 51000],
          ],
        },
      },
      time: { format: 'minHr' },
      coins: { baseCoin: 'BTC' },
      currency: { baseCurrency: 'USD' },
    });

    const { container } = render(
      <Provider store={store}>
        <LineChart />
      </Provider>
    );

    // Check if a canvas element is present, which indicates a chart
    const canvas = container.querySelector('canvas');
    expect(canvas).toBeInTheDocument(); // Verify canvas is rendered, indicating a chart
  });
});
