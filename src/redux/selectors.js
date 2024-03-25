export const selectCampersData = (state) => state.campers.campersData;

export const selectIsLoading = (state) => state.campers.isLoading;

export const selectFavorites = (state) => state.campers.favorites;

export const selectPaginate = (state) => state.campers.paginateData;

export const selectFavoritesPaginate = (state) =>
  state.campers.favoritesPaginate;

export const selectLimit = (state) => state.campers.limit;

export const selectCurrentPage = (state) => state.campers.currentPage;
