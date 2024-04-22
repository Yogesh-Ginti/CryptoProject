import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCryptocurrencies } from '../redux/async/cryptoSlice';

const Sidebar = () => {
  const dispatch = useDispatch();
  const { cryptocurrencies, status, error } = useSelector((state) => state.cryptocurrencies);

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
        {cryptocurrencies.map(crypto => (
          <li key={crypto.id} className="mb-2">
            <span className="text-blue-500 mr-2">{crypto.symbol.toUpperCase()}</span>
            <span>{crypto.price_change_percentage_24h}</span>
            <div>${crypto.market_cap}</div>

          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
