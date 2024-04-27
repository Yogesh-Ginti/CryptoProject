import React from 'react';
import SearchInput from '../features/searchbar/SearchInput';
import SearchResults from '../features/searchbar/SearchResults';


const SearchBar = () => {
  return (
    <>
      <div>
        <SearchInput />
        <SearchResults />
      </div>
    </>
  );
};

export default SearchBar;
