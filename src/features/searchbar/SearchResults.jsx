// src/components/SearchResults.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { chooseCoin } from '../../redux/sync/coinSlice';

const SearchResults = () => {
  const dispatch = useDispatch();
  const searchResults = useSelector((state) => state.search.searchResults);

  const handleCoinClick = (coinId) => {
    dispatch(chooseCoin(coinId));
  };

  return (
    searchResults.length > 0 && (
      <ul>
        {searchResults.map((coin) => (
          <li
            key={coin.id}
            onClick={() => handleCoinClick(coin.id)}
          >
            <img src={coin.thumb} alt={`${coin.name} logo`} /> {coin.name}
          </li>
        ))}
      </ul>
    )
  );
};

export default SearchResults;
