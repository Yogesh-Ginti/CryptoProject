import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm, fetchSearchResults } from '../../redux/async/searchSlice';
import { FaSearch } from 'react-icons/fa';
import debounce from 'lodash/debounce';

const SearchInput = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.search.searchTerm);

  const debouncedFetch = debounce((query) => {
    dispatch(fetchSearchResults(query));
  }, 300); // Debounce API call by 300 ms

  const handleInputChange = (e) => {
    const newSearchTerm = e.target.value;
    dispatch(setSearchTerm(newSearchTerm));
    debouncedFetch(newSearchTerm);
  };

  return (
    <div className="flex items-center border-6 border-black border-solid bg-blue-300">
      <FaSearch style={{ marginRight: '8px' }} />
      <input
        className="border-0"
        type="text"
        placeholder="Search for coins..."
        value={searchTerm}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchInput;
