import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setFromCoin,
  setToCoin,
  setQty,
  setGetCoins,
  setError,
} from '../redux/sync/exchangerSlice';

function Exchanger() { // to render the Excjhange component
  const dispatch = useDispatch();
  const {
    fromCoin,
    toCoin,
    toCoinId,
    qty,
    getCoins,
    toCoinSymbol,
    err,
  } = useSelector((state) => state.exchanger);

  const { cryptocurrencies } = useSelector((state) => state.cryptocurrencies); // Redux dispatch function for sending actions

  // Handler for selecting the coin to sell
  const handleFromCoin = (event) => {
    const selectedPrice = Number(event.target.value);
    dispatch(setFromCoin(selectedPrice));
  };

  // Handler for selecting the coin to buy
  const handleToCoin = (event) => {
    const coinId = event.target.value;
    const selectedCoin = cryptocurrencies.find((coin) => coin.id === coinId);

    if (selectedCoin) {
      dispatch(setToCoin({
        price: selectedCoin.current_price,
        symbol: selectedCoin.symbol,
        id: coinId,
      }));
    }
  };

  // Handler for setting the quantity of the coin to sell
  const handleQty = (event) => {
    const value = event.target.value;

    if (value === '') {
      dispatch(setQty('')); // Allow the input to be empty
    } else {
      dispatch(setQty(Number(value)));
    }
  };

   // Handler for initiating the exchange
  const handleExchange = () => {
    if (fromCoin && qty > 0 && toCoin) {
      const sellingAmt = fromCoin * qty;
      const getCoin = (sellingAmt / toCoin).toFixed(2);
      dispatch(setGetCoins(getCoin));
      dispatch(setError(''));
    } else {
      dispatch(setError('Please Enter the Qty'));
      dispatch(setGetCoins(null));
    }
  };

  return (
    <>
      <div className="flex flex-col gap-6 h-[300px] p-6">
        {/* Title and setup for Exchange Coins */}
        <h1 className="text-2xl font-bold">Exchange Coins</h1>
        <div className="flex gap-16">
          <h2 className="text-xl text-red-500 font-semibold">Sell</h2>
          <select value={fromCoin} onChange={handleFromCoin}
          className='bg-slate-100'>
            <option value="" disabled>
              Select Coin
            </option>
            {cryptocurrencies.map((coin) => (
              <option key={coin.id} value={coin.current_price}>
                {coin.name}
              </option>
            ))}
          </select>

          {/* Input for selling quantity */}
          <div className="flex flex-col">
            <label htmlFor="SellAmt">Enter Value</label>
            <input
              className='w-20 px-1'
              type="number"
              onChange={handleQty}
              value={qty}
              placeholder="Qty"
              style={{ WebkitAppearance: 'none', MozAppearance: 'textfield' }}
            />
          </div>
        </div>

        <div className="flex gap-16">
          <h2 className="text-xl text-green-500 font-semibold">Buy</h2>
          <select value={toCoinId} onChange={handleToCoin}
          className='bg-slate-100'>
            <option value="" disabled>
              Select Coin
            </option>
            {cryptocurrencies.map((coin) => (
              <option key={coin.id} value={coin.id}>
                {coin.name}
              </option>
            ))}
          </select>

            {/* Display error and the amount to get */}
          <span>
            <span className="text-red-500">{err}</span>
            <span className="font-semibold">
              {getCoins !== null ? `${getCoins} ${toCoinSymbol}` : ''}
            </span>
          </span>
        </div>

        <div className='flex justify-center'>
         {/* Display error and the amount to get */} 
        <button
          className="text-white bg-blue-500 px-5 py-2 rounded-md font-semibold "
          onClick={handleExchange}
        >
          Exchange
        </button>
        </div>
      </div>
    </>
  );
}

export default Exchanger;
