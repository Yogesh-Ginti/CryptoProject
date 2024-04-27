import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { chooseCoin } from '../../redux/sync/coinSlice';
import { resetSearch } from '../../redux/async/searchSlice';


const SearchResults = () => {
  const dispatch = useDispatch();
  const searchResults = useSelector((state) => state.search.searchResults);


  const handleCoinClick = (coinId) => {
    dispatch(chooseCoin(coinId));
    dispatch(resetSearch())
    
  };

  return (
    <>
      <div className='w-96 absolute h-80 overflow-y-auto'>
        {
          searchResults.length > 0 && (
            <ul>
              {searchResults.map((coin) => (
                <li
                  key={coin.id}
                  onClick={() => handleCoinClick(coin.id)}
                  className='flex p-2 gap-2 bg-white w-full cursor-pointer'
                >
                  <img src={coin.thumb} alt={`${coin.name} logo`} /> 
                  <p>{coin.name}</p>
                </li>
              ))}
            </ul>
          )
        }
      </div>
    </>
  );
};

export default SearchResults;
