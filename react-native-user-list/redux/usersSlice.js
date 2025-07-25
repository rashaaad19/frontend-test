import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    usersData: [],
    page: 0,
    limit: 5,
    hasMore: true,
    searchQuery: '',
  },
  reducers: {
    setUsers: (state, action) => {
      state.usersData = [...state.usersData, ...action.payload];
      state.page += 1; 
      if (action.payload.length === 0) {
        state.hasMore = false;
      }
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    }
  }
});

export const { setUsers, setSearchQuery } = usersSlice.actions;
export default usersSlice.reducer;
