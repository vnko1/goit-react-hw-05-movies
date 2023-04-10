import { useState, useEffect } from 'react';
import MoviesList from 'components/movieList/MoviesList';
import { fetchMovies, normalizeMovies } from 'services';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const params = { fetchParams: 'trending/movie/week', controller };
    fetchMovies(params)
      .then(response => {
        const movies = normalizeMovies(response.results);
        setMovies(movies);
      })
      .catch(error => {})
      .finally(() => {});

    return () => {
      controller.abort();
    };
  }, []);
  return <MoviesList movies={movies} />;
};

export default Home;
