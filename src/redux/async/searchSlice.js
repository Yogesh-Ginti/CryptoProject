import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const COINGECKO_SEARCH_API = 'https://api.coingecko.com/api/v3/search';

// Thunk to fetch search results
export const fetchSearchResults = createAsyncThunk(
  'search/fetchSearchResults',
  async (query, thunkAPI) => {
    if (!query) {
      return [];
    }

    try {
      const response = await axios.get(COINGECKO_SEARCH_API, {
        params: { query },
      });
      return response.data.coins;
    } catch (error) {
      console.error('Error fetching search results:', error);
      throw error;
    }
  }
);

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    searchTerm: '',
    searchResults: [],
    loading: false,
    error: null,
  },
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    resetSearch:(state)=>{
      state.searchResults = ''
      state.searchTerm = ''
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchResults.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSearchResults.fulfilled, (state, action) => {
        state.searchResults = action.payload;
        state.loading = false;
      })
      .addCase(fetchSearchResults.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export const { setSearchTerm, resetSearch } = searchSlice.actions;
export default searchSlice.reducer;
