import { fetchMovieCredits, fetchMovieDetails, fetchPopularMovies } from "@/Api";
import { GetStaticPaths, GetStaticProps } from "next";

export const getStaticPaths: GetStaticPaths = async () => {
    // Fetch popular movies to pre-generate some paths
    const { results } = await fetchPopularMovies(1);
    const paths = results.map((movie) => ({
      params: { id: movie.id.toString() },
    }));
  
    return {
      paths,
      fallback: 'blocking', // Fallback for on-demand rendering
    };
  };
  
  export const getStaticProps: GetStaticProps = async ({ params }) => {
    const id = params?.id as string;
  
    try {
      const movie = await fetchMovieDetails(Number(id));
      const credits = await fetchMovieCredits(Number(id));
      const cast = credits.cast.slice(0, 10); // Display only top 10 cast members
  
      return {
        props: {
          movie,
          cast,
        },
        revalidate: 86400, // Revalidate once a day
      };
    } catch (error) {
        console.log(error)
      return {
        notFound: true,
      };
    }
  };
  