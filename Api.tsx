import axios from 'axios';
import { MoviesResponse, MovieDetails, Credits } from './constants/movies';

const API_BASE_URL = process.env.NEXT_PUBLIC_TMDB_API_BASE_URL as string;
const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY as string;

// Create an Axios instance with default configuration
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  params: {
    api_key: API_KEY, // Automatically append API key to all requests
  },
});

/**
 * Fetch popular movies.
 * @param {number} page - The page number to fetch.
 * @returns {Promise<MoviesResponse>} - The response containing movies data.
 */
export const fetchPopularMovies = async (page: number = 1): Promise<MoviesResponse> => {
  const response = await apiClient.get<MoviesResponse>('/movie/popular', {
    params: { page },
  });
  return response.data;
};

/**
 * Fetch movie details by ID.
 * @param {number} movieId - The ID of the movie.
 * @returns {Promise<MovieDetails>} - The detailed information of the movie.
 */
export const fetchMovieDetails = async (movieId: number): Promise<MovieDetails> => {
  const response = await apiClient.get<MovieDetails>(`/movie/${movieId}`);
  return response.data;
};

/**
 * Fetch cast and crew for a specific movie.
 * @param {number} movieId - The ID of the movie.
 * @returns {Promise<Credits>} - The cast and crew details.
 */
export const fetchMovieCredits = async (movieId: number): Promise<Credits> => {
  const response = await apiClient.get<Credits>(`/movie/${movieId}/credits`);
  return response.data;
};

/**
 * Search for movies by title.
 * @param {string} query - The search query string.
 * @param {number} page - The page number to fetch (default: 1).
 * @returns {Promise<MoviesResponse>} - The response containing search results.
 */
export const searchMovies = async (query: string, page: number = 1): Promise<MoviesResponse> => {
  const response = await apiClient.get<MoviesResponse>('/search/movie', {
    params: { query, page },
  });
  return response.data;
};
