"use client"
import React, { useState } from 'react';
import { fetchPopularMovies } from '../Api';
import { Movie } from '../constants/movies';
import MovieCard from '@/ui/MovieCards';

const MoviesPage: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  React.useEffect(() => {
    const getMovies = async () => {
      try {
        const data = await fetchPopularMovies(1); // Fetch the first page of movies
        setMovies(data.results);
        console.log(movies)
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError('Failed to fetch movies.');
        setLoading(false);
      }
    };

    getMovies();
  }, []);

  if (loading) return <div className="text-center mt-10">Loading movies...</div>;
  if (error) return <div className="text-center mt-10 text-red-500">{error}</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">Popular Movies</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies?.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MoviesPage;
