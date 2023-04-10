import { useState, useEffect } from 'react';

import MoviesList from 'components/trandingList/MoviesList';
import { fetchMovies, normalizeMovies } from 'services';

const Home = () => {
  const [trandingMovies, setTrandingMovies] = useState([]);
  useEffect(() => {
    const controller = new AbortController();
    const params = { fetchParams: 'trending/movie/week', controller };
    fetchMovies(params)
      .then(response => {
        const movies = normalizeMovies(response.results);
        setTrandingMovies(movies);
      })
      .catch(error => {})
      .finally(() => {});

    return () => {
      controller.abort();
    };
  }, []);
  return <MoviesList movies={trandingMovies} />;
};

export default Home;
