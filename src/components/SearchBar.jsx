import React from 'react';
import SearchInput from '../features/searchbar/SearchInput'; 
import SearchResults from '../features/searchbar/SearchResults'; 

const SearchBar = () => { // Component for the search bar feature
  return (
    <>
      <div> 
        {/* Container for the search input and results */}
        <SearchInput /> {/*Input field for entering search queries*/}
        <SearchResults /> {/*Section to display search results based on input*/}
      </div>
    </>
  );
};

export default SearchBar; 