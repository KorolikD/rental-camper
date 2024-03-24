import axios from 'axios';

axios.defaults.baseURL = `https://6577723a197926adf62e51f2.mockapi.io`;

export const getAllCampers = async () => {
  const response = await axios.get(`/adverts`);
  return response.data;
};

// // /movies/get-movie-details запит повної інформації про фільм для сторінки кінофільму.
// export const getMovieDetailsById = async (id) => {
//   const response = await axios.get(`/movie/${id}?language=en-US`);
//   return response.data;
// };

// // /search/search-movies пошук фільму за ключовим словом на сторінці фільмів.
// export const searchMoviesByQuery = async (query) => {
//   const response = await axios.get(
//     `/search/movie?query=${query}&include_adult=false&language=en-US&page=1`
//   );
//   return response.data;
// };

// // /movies/get-movie-credits запит інформації про акторський склад для сторінки кінофільму.
// export const getMovieCredits = async (id) => {
//   const response = await axios.get(`/movie/${id}/credits?language=en-US`);
//   return response.data;
// };

// // /movies/get-movie-reviews запит оглядів для сторінки кінофільму.
// export const getMovieReviews = async (id) => {
//   const response = await axios.get(
//     `/movie/${id}/reviews?language=en-US&page=1`
//   );
//   return response.data;
// };
