import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCryptocurrencies } from '../redux/async/cryptoSlice';

const Market = () => {  // Component displaying top 30 cryptocurrencies by market cap
  const dispatch = useDispatch();
  const { cryptocurrencies, status, error } = useSelector((state) => state.cryptocurrencies);
  const cryptos = cryptocurrencies.slice(0, 30);

  // Fetch cryptocurrencies when the component mounts if status is 'idle'
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchCryptocurrencies());
    }
  }, [dispatch, status]); // Re-run effect if 'status' changes

  if (status === 'loading') {// Render loading state
    return <div>Loading...</div>;
  }

  if (status === 'failed') { // Render error message if fetch failed
    return <div className='text-center'>Error: {error}</div>;
  }

  return (
    <>
      <div className='bg-white p-4 h-full overflow-y-auto'>
        {/* Container with scrollable content */}
        <h2 className="text-lg font-bold mb-4">Cryptocurrencies By Market Cap</h2>
        <ul className=''>
          {cryptos.map((crypto) => ( // Iterate over top 30 cryptocurrencies
            <li key={crypto.id} className="mb-2">
              <div className='flex justify-between'>
                <span className="text-blue-500 mr-2">{crypto.symbol.toUpperCase()}</span>

                {/* Determine text color based on price change percentage */}
                <span
                  className={`${crypto.price_change_percentage_24h >= 0 ? 'text-green-500' : 'text-red-500'
                    }`}
                >
                  {crypto.price_change_percentage_24h.toFixed(2)}% {/*Display price change percentage*/}
                </span>
              </div>

              <div>${crypto.market_cap.toLocaleString()}</div> {/*Display market cap with commas*/}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Market;
