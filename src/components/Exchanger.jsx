import React, { useState } from 'react';
import { useSelector } from 'react-redux';

function Exchanger() {
  const { cryptocurrencies } = useSelector((state) => state.cryptocurrencies);

  const [fromCoin, setFromCoin] = useState(''); // Set initial value to empty string
  const [toCoin, setToCoin] = useState(''); // Set initial value to empty string
  const [toCoinId, setToCoinId] = useState(''); // Store coin ID separately
  const [qty, setQty] = useState('');
  const [getCoins, setGetCoins] = useState(null);
  const [toCoinSymbol, setToCoinSymbol] = useState('');
  const [err, setErr] = useState('')

  const handleFromCoin = (event) => {
    const selectedPrice = Number(event.target.value);
    setFromCoin(selectedPrice);
  };

  const handleToCoin = (event) => {
    const coinId = event.target.value;
    const selectedCoin = cryptocurrencies.find((coin) => coin.id === coinId);

    if (selectedCoin) {
      setToCoin(selectedCoin.current_price);
      setToCoinSymbol(selectedCoin.symbol);
      setToCoinId(coinId); // Update the ID to ensure correct `value` in select
    }
  };

  const handleQty = (event) => {
    const value = event.target.value;

    if (value === '') {
      setQty(''); // Allow the input to be empty
    } else {
      setQty(Number(value)); // Convert to a number
    }
  };

  const handleExchange = () => {
    if (fromCoin && qty > 0 && toCoin) {
      const sellingAmt = fromCoin * qty;
      const getCoin = (sellingAmt / toCoin).toFixed(2);
      setGetCoins(getCoin);
      setErr('')
    } else {
      setGetCoins(null);
      setErr("Please Enter the Qty")
    }
  };

  return (
    <div className="bg-gray-200 w-[600px] h-[300px] p-6">
      <h1 className="text-2xl font-bold">Exchange Coins</h1>
      <div className="flex gap-16">
        <h2 className="text-xl text-red-500 font-semibold">Sell</h2>
        {/* Dropdown for sell coins list */}
        <select value={fromCoin} onChange={handleFromCoin}>
          <option value="" disabled>
            Select Coin
          </option>
          {cryptocurrencies.map((coin) => (
            <option key={coin.id} value={coin.current_price}>
              {coin.name}
            </option>
          ))}
        </select>

        {/* Input for taking selling quantity */}
        <div className="flex flex-col">
          <label htmlFor="SellAmt">Enter Value</label>
          <input
            type="number"
            onChange={handleQty}
            value={qty}
            placeholder="Qty of Selling Coins"
          />
        </div>
      </div>

      <div className="flex gap-16">
        <h2 className="text-xl text-green-500 font-semibold">Buy</h2>

        {/* Dropdown for buy coins list */}
        <select value={toCoinId} onChange={handleToCoin}>
          <option value="" disabled>
            Select Coin
          </option>
          {cryptocurrencies.map((coin) => (
            <option key={coin.id} value={coin.id}>
              {coin.name}
            </option>
          ))}
        </select>

        {/* Display the calculated buying quantity with the coin symbol */}
        <span>
          <span className='text-red-500'>{err}</span>
          <span className='font-semibold'>{getCoins !== null ? `${getCoins} ${toCoinSymbol}` : ''}</span>
        </span>
      </div>

      <button
        className="text-white bg-blue-500 px-5 py-2 rounded-md font-semibold"
        onClick={handleExchange}
      >
        Exchange
      </button>
    </div>
  );
}

export default Exchanger;
