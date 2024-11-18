export interface Movie {
    id: number; // Unique movie ID
    title: string; // Movie title
    poster_path: string | null; // Path to the movie poster image
    release_date: string; // Release date of the movie
    vote_average: number; // Average rating (out of 10)
    overview: string; // Short description/overview of the movie
    genre_ids: number[]; // IDs of associated genres
  }

  export interface MoviesResponse {
    page: number; // Current page
    results: Movie[]; // List of movies
    total_pages: number; // Total number of pages available
    total_results: number; // Total number of results
  }

  export interface MovieDetails {
    id: number; // Movie ID
    title: string; // Full movie title
    poster_path: string | null; // Poster path
    overview: string; // Full description
    release_date: string; // Release date
    genres: Genre[]; // Array of genre objects
    vote_average: number; // Average user rating
    runtime: number; // Runtime in minutes
    spoken_languages: SpokenLanguage[]; // Languages spoken in the movie
  }
  
  export interface Genre {
    id: number; // Genre ID
    name: string; // Genre name
  }
  
  export interface SpokenLanguage {
    iso_639_1: string; // ISO 639-1 code for the language
    name: string; // Language name
  }

  export interface Cast {
    id: number; // Unique ID for the cast member
    name: string; // Actor's name
    character: string; // Character portrayed
    profile_path: string | null; // Path to actor's profile image
  }
  
  export interface Crew {
    id: number; // Unique ID for the crew member
    name: string; // Crew member's name
    job: string; // Job/Role in the production (e.g., Director, Writer)
    profile_path: string | null; // Path to crew member's profile image
  }
  
  export interface Credits {
    cast: Cast[]; // List of cast members
    crew: Crew[]; // List of crew members
  }

  export interface FavoriteMovie {
    id: number; // Movie ID
    title: string; // Title of the movie
    poster_path: string | null; // Poster path
    release_date: string; // Release date
    vote_average: number; // Average rating
  }
  