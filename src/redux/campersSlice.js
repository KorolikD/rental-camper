import { createSlice } from '@reduxjs/toolkit';
import { fetchCampers } from './operators';

const tasksInitialState = {
  campers: [],
  isLoading: false,
  error: null,
};

const campersSlice = createSlice({
  name: 'campers',
  initialState: tasksInitialState,

  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.campers = action.payload;
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },

  // name: 'campers',
  // initialState: tasksInitialState,
  // reducers: {
  //   fetchingInProgress(state) {
  //     state.isLoading = true;
  //   },
  //   fetchingSuccess(state, action) {
  //     state.isLoading = false;
  //     state.error = null;
  //     state.campers = action.payload;
  //   },
  //   fetchingError(state, action) {
  //     state.isLoading = false;
  //     state.error = action.payload;
  //   },
  // },
});

// export const { fetchingInProgress, fetchingSuccess, fetchingError } =
//   campersSlice.actions;
export const campersReducer = campersSlice.reducer;
