import { createSlice } from '@reduxjs/toolkit';
import { fetchCampers } from './operators';

const tasksInitialState = {
  campersData: [],
  favorites: [],
  isLoading: false,
  error: null,
};

const campersSlice = createSlice({
  name: 'campers',
  initialState: tasksInitialState,

  reducers: {
    toggleFavorite(state, action) {
      const item = state.favorites.some((el) => el._id === action.payload._id);
      if (item) {
        const index = state.favorites.findIndex(
          (camper) => camper._id === action.payload._id
        );
        state.favorites.splice(index, 1);
        return;
      }

      state.favorites.push(action.payload);
    },

    deleteFavorite(state, action) {
      const index = state.favorites.findIndex(
        (camper) => camper._id === action.payload._id
      );
      state.favorites.splice(index, 1);
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.campersData = action.payload;
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { toggleFavorite, deleteFavorite } = campersSlice.actions;
export const campersReducer = campersSlice.reducer;
