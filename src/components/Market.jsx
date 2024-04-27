import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCryptocurrencies } from '../redux/async/cryptoSlice';

const Sidebar = () => {
  const dispatch = useDispatch();
  const { cryptocurrencies, status, error } = useSelector((state) => state.cryptocurrencies);
  const cryptos = cryptocurrencies.slice(0, 30);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchCryptocurrencies());
    }
  }, [dispatch, status]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="bg-gray-200 p-4">
      <h2 className="text-lg font-bold mb-4">Cryptocurrencies By Market Cap</h2>
      <ul>
        {cryptos.map((crypto) => (
          <li key={crypto.id} className="mb-2">
            <span className="text-blue-500 mr-2">{crypto.symbol.toUpperCase()}</span>

            {/* Determine text color based on price change percentage */}
            <span
              className={`${
                crypto.price_change_percentage_24h >= 0 ? 'text-green-500' : 'text-red-500'
              }`}
            >
              {crypto.price_change_percentage_24h.toFixed(2)}%
            </span>

            <div>${crypto.market_cap.toLocaleString()}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
