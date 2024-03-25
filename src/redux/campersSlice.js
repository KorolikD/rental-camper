import { createSlice } from '@reduxjs/toolkit';
import { fetchCampers } from './operators';

const tasksInitialState = {
  campersData: [],
  paginateData: [],
  favorites: [],
  favoritesPaginate: [],
  isLoading: false,
  error: null,
  currentPage: 1,
  limit: 4,
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

    renderFirstPaginatePage(state, action) {
      state.paginateData = [
        ...action.payload.slice(
          state.currentPage * state.limit - state.limit,
          state.currentPage * state.limit
        ),
      ];
    },

    paginateCampers(state, action) {
      state.paginateData = [
        ...state.paginateData,
        ...action.payload.slice(
          state.currentPage * state.limit - state.limit,
          state.currentPage * state.limit
        ),
      ];
    },

    renderFirstFavoritePage(state, action) {
      state.favoritesPaginate = [
        ...action.payload.slice(
          state.currentPage * state.limit - state.limit,
          state.currentPage * state.limit
        ),
      ];
    },

    paginateFavorite(state, action) {
      state.favoritesPaginate = [
        ...state.favoritesPaginate,
        ...action.payload.slice(
          state.currentPage * state.limit - state.limit,
          state.currentPage * state.limit
        ),
      ];
    },

    setCurrentPage(state, action) {
      state.currentPage = action.payload;
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

export const {
  toggleFavorite,
  renderFirstPaginatePage,
  paginateCampers,
  setCurrentPage,
  renderFirstFavoritePage,
  paginateFavorite,
} = campersSlice.actions;
export const campersReducer = campersSlice.reducer;
