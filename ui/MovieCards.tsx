import React from 'react';
import { Movie } from '../constants/movies';

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const imageBaseUrl = 'https://image.tmdb.org/t/p/w500';

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={movie.poster_path ? `${imageBaseUrl}${movie.poster_path}` : '/placeholder.png'}
        alt={movie.title}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{movie.title}</h2>
        <p className="text-sm text-gray-600">Release: {movie.release_date}</p>
        <p className="text-sm text-gray-600">Rating: {movie.vote_average.toFixed(1)} / 10</p>
      </div>
    </div>
  );
};

export default MovieCard;
