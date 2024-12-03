import { fetchMovieDetails, fetchMovieCredits } from "../../../Api";

interface MovieDetailsPageProps {
  params: { id: string };
}

const MovieDetailsPage = async ({ params }: MovieDetailsPageProps) => {
  const id: string = await params.id;

  const movie = await fetchMovieDetails(Number(id));
  const credits = await fetchMovieCredits(Number(id));
  const cast = credits.cast.slice(0, 10);

  const imageBaseUrl = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row items-start">
        <img
          src={
            movie.poster_path
              ? `${imageBaseUrl}${movie.poster_path}`
              : "/placeholder.png"
          }
          alt={movie.title}
          className="w-64 h-auto rounded-lg shadow-md"
        />
        <div className="mt-6 md:mt-0 md:ml-8">
          <h1 className="text-3xl font-bold">{movie.title}</h1>
          <p className="mt-2 text-gray-600">{movie.overview}</p>
          <p className="mt-4">
            <span className="font-semibold">Release Date:</span>{" "}
            {movie.release_date}
          </p>
          <p className="mt-2">
            <span className="font-semibold">Rating:</span>{" "}
            {movie.vote_average.toFixed(1)} / 10
          </p>
          <p className="mt-2">
            <span className="font-semibold">Genres:</span>{" "}
            {movie.genres.map((genre) => genre.name).join(", ")}
          </p>
        </div>
      </div>
      {cast.length > 0 && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Cast</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {cast.map((actor) => (
              <div key={actor.id} className="text-center">
                <img
                  src={
                    actor.profile_path
                      ? `${imageBaseUrl}${actor.profile_path}`
                      : "/placeholder.png"
                  }
                  alt={actor.name}
                  className="w-24 h-24 rounded-full mx-auto"
                />
                <p className="mt-2 text-sm font-semibold">{actor.name}</p>
                <p className="text-xs text-gray-500">as {actor.character}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetailsPage;
